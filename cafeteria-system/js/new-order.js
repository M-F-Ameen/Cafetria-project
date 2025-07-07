let menuItems = [];
let cart = [];
let currentCategory = 'drinks';

// Sample menu items - replace with API call
const sampleMenuItems = [
    {
        id: 8,
        name: "كولا",
        price: 8.00,
        category: "drinks",
        image: "../images/cola.jpg",
        stock: 100
    },
    {
        id: 9,
        name: "عصير برتقال",
        price: 10.00,
        category: "drinks",
        image: "../images/orange-juice.jpg",
        stock: 80
    },
    {
        id: 10,
        name: "شاي",
        price: 6.00,
        category: "drinks",
        image: "../images/tea.jpg",
        stock: 120
    },
    {
        id: 13,
        name: "عصير تفاح",
        price: 12.00,
        category: "drinks",
        image: "../images/cola.jpg",
        stock: 75
    },
    {
        id: 14,
        name: "عصير أناناس",
        price: 14.00,
        category: "drinks",
        image: "../images/orange-juice.jpg",
        stock: 60
    },
    {
        id: 15,
        name: "عصير مانجو",
        price: 16.00,
        category: "drinks",
        image: "../images/tea.jpg",
        stock: 50
    },
    {
        id: 16,
        name: "عصير فراولة",
        price: 15.00,
        category: "drinks",
        image: "../images/iced-tea.jpg",
        stock: 55
    },
    {
        id: 17,
        name: "عصير ليمون",
        price: 8.00,
        category: "drinks",
        image: "../images/soda.jpg",
        stock: 90
    },
    {
        id: 1,
        name: "برجر لحم",
        price: 25.00,
        category: "other",
        image: "../images/burger.jpg",
        stock: 50
    },
    {
        id: 2,
        name: "بيتزا مارجريتا",
        price: 35.00,
        category: "other",
        image: "../images/pizza.jpg",
        stock: 30
    },
    {
        id: 3,
        name: "سلطة قيصر",
        price: 18.00,
        category: "other",
        image: "../images/caesar-salad.jpg",
        stock: 25
    },
    {
        id: 4,
        name: "باستا كاربونارا",
        price: 28.00,
        category: "other",
        image: "../images/pasta.jpg",
        stock: 20
    }
];

document.addEventListener('DOMContentLoaded', () => {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
        return;
    }

    initializePOS();
});

function initializePOS() {
    // Load menu items
    loadMenuItems();
    
    // Set up event listeners
    setupEventListeners();
    
    // Update cart display
    updateCartDisplay();
}

function setupEventListeners() {
    // Category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            setActiveCategory(category);
        });
    });

    // Product search
    const searchInput = document.getElementById('productSearch');
    searchInput.addEventListener('input', (e) => {
        filterProducts(e.target.value);
    });

    // Payment buttons
    document.getElementById('cashPayment').addEventListener('click', () => {
        processPayment('cash');
    });

    document.getElementById('cardPayment').addEventListener('click', () => {
        processPayment('card');
    });
}

async function loadMenuItems() {
    try {
        // For now, use sample data. Replace with actual API call
        menuItems = sampleMenuItems;
        // menuItems = await apiCall('/menu');
        
        renderProducts(menuItems);
    } catch (error) {
        console.error('Error loading menu items:', error);
        // Fallback to sample data
        menuItems = sampleMenuItems;
        renderProducts(menuItems);
    }
}

function renderProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(item => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image" onerror="this.src='../images/burger.jpg'">
            <div class="product-name">${item.name}</div>
            <div class="product-price">${item.price.toFixed(2)}جنيه</div>
            
        `;
        
        productCard.addEventListener('click', () => {
            addToCart(item.id);
        });
        
        productsGrid.appendChild(productCard);
    });
}

function setActiveCategory(category) {
    currentCategory = category;
    
    // Update active tab
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        }
    });
    
    // Filter products
    filterProducts(document.getElementById('productSearch').value);
}

function filterProducts(searchTerm) {
    let filteredProducts = menuItems;
    
    // Filter by category
    filteredProducts = filteredProducts.filter(item => item.category === currentCategory);
    
    // Filter by search term
    if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        filteredProducts = filteredProducts.filter(item => 
            item.name.toLowerCase().includes(term)
        );
    }
    
    renderProducts(filteredProducts);
}

function addToCart(menuItemId) {
    const menuItem = menuItems.find(item => item.id === menuItemId);
    if (!menuItem) return;

    const existingItem = cart.find(item => item.menuItemId === menuItemId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            menuItemId,
            name: menuItem.name,
            price: menuItem.price,
            quantity: 1
        });
    }

    updateCartDisplay();
    
    // Visual feedback
    const productCard = event.target.closest('.product-card');
    if (productCard) {
        productCard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            productCard.style.transform = '';
        }, 150);
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

function updateQuantity(index, change) {
    const item = cart[index];
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(index);
    } else {
        updateCartDisplay();
    }
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    const cashPayment = document.getElementById('cashPayment');
    const cardPayment = document.getElementById('cardPayment');
    
    cartItems.innerHTML = '';

    let total = 0;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<div style="padding: 20px; text-align: center; color: #6c757d;">سلة المشتريات فارغة</div>';
    } else {
        cart.forEach((item, index) => {
            const subtotal = item.price * item.quantity;
            total += subtotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} جنيه</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                    <div class="remove-btn" onclick="removeFromCart(${index})">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
    }

    totalAmount.textContent = `${total.toFixed(2)} جنيه`;
    
    // Enable/disable payment buttons
    const hasItems = cart.length > 0;
    cashPayment.disabled = !hasItems;
    cardPayment.disabled = !hasItems;
}

async function processPayment(method) {
    if (cart.length === 0) return;

    try {
        const orderItems = cart.map(item => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity
        }));

        const orderData = {
            items: orderItems,
            paymentMethod: method,
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };

        // Show loading state
        const paymentBtn = method === 'cash' ? document.getElementById('cashPayment') : document.getElementById('cardPayment');
        const originalText = paymentBtn.innerHTML;
        paymentBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> معالجة...';
        paymentBtn.disabled = true;

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // await apiCall('/order', {
        //     method: 'POST',
        //     body: JSON.stringify(orderData)
        // });

        // Success
        showSuccessMessage(`تم إتمام الطلب بنجاح!  : ${method === 'cash' ? '-' : 'ضيافة'}`);
        
        // Clear cart
        cart = [];
        updateCartDisplay();
        
    } catch (error) {
        console.error('Error processing payment:', error);
        showErrorMessage('فشل في إتمام الطلب. يرجى المحاولة مرة أخرى.');
    } finally {
        // Reset button state
        const paymentBtn = method === 'cash' ? document.getElementById('cashPayment') : document.getElementById('cardPayment');
        paymentBtn.innerHTML = method === 'cash' ? 
            '<i class="fas fa-money-bill-wave"></i> طلب' : 
            '<i class="fas fa-credit-card"></i> ضيافة';
        paymentBtn.disabled = false;
    }
}

function showSuccessMessage(message) {
    // Create success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function showErrorMessage(message) {
    // Create error notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #dc3545;
        color: white;
        padding: 15px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-weight: 600;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;



document.head.appendChild(style);

// Authentication check function (placeholder)
function isAuthenticated() {
    // Replace with actual authentication check
    return true;
}

// API call function (placeholder)
async function apiCall(endpoint, options = {}) {
    // Replace with actual API implementation
    console.log(`API call to ${endpoint}`, options);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ success: true });
        }, 1000);
    });
} 