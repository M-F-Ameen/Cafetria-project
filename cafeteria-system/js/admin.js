document.addEventListener('DOMContentLoaded', () => {
    // Check if user is admin
    if (!isAuthenticated() || getUserRole() !== 'admin') {
        window.location.href = 'login.html';
        return;
    }

    loadMenuItems();
    
    const menuForm = document.getElementById('menuForm');
    menuForm.addEventListener('submit', handleAddMenuItem);
});

async function loadMenuItems() {
    try {
        const menuItems = await apiCall('/menu');
        const menuList = document.getElementById('menuList');
        menuList.innerHTML = '';

        menuItems.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.imageUrl || 'N/A'}</td>
                <td>
                    <button onclick="editMenuItem(${item.id})" class="btn btn-warning btn-sm">Edit</button>
                    <button onclick="deleteMenuItem(${item.id})" class="btn btn-danger btn-sm">Delete</button>
                </td>
            `;
            menuList.appendChild(row);
        });
    } catch (error) {
        console.error('Error loading menu items:', error);
    }
}

async function handleAddMenuItem(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const price = parseFloat(document.getElementById('price').value);
    const imageUrl = document.getElementById('imageUrl').value;

    try {
        await apiCall('/menu', {
            method: 'POST',
            body: JSON.stringify({ name, price, imageUrl })
        });

        // Reset form and reload menu items
        event.target.reset();
        loadMenuItems();
    } catch (error) {
        console.error('Error adding menu item:', error);
    }
}

async function deleteMenuItem(id) {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
        await apiCall(`/menu/${id}`, {
            method: 'DELETE'
        });
        loadMenuItems();
    } catch (error) {
        console.error('Error deleting menu item:', error);
    }
}

async function editMenuItem(id) {
    try {
        const item = await apiCall(`/menu/${id}`);
        
        // Populate form with item details
        document.getElementById('name').value = item.name;
        document.getElementById('price').value = item.price;
        document.getElementById('imageUrl').value = item.imageUrl || '';
        
        // Change form to update mode
        const menuForm = document.getElementById('menuForm');
        menuForm.onsubmit = async (e) => {
            e.preventDefault();
            
            await apiCall(`/menu/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    id,
                    name: document.getElementById('name').value,
                    price: parseFloat(document.getElementById('price').value),
                    imageUrl: document.getElementById('imageUrl').value
                })
            });

            // Reset form and reload menu items
            menuForm.reset();
            menuForm.onsubmit = handleAddMenuItem;
            loadMenuItems();
        };
    } catch (error) {
        console.error('Error editing menu item:', error);
    }
} 