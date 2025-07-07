document.addEventListener('DOMContentLoaded', () => {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
        return;
    }

    loadOrders();
});

async function loadOrders() {
    try {
        const orders = await apiCall('/order');
        const ordersList = document.getElementById('ordersList');
        ordersList.innerHTML = '';

        orders.forEach(order => {
            const card = document.createElement('div');
            card.className = 'card mb-3';
            
            let itemsHtml = order.orderItems.map(item => `
                <tr>
                    <td>${item.menuItem.name}</td>
                    <td>${item.quantity}</td>
                    <td>$${item.unitPrice.toFixed(2)}</td>
                    <td>$${item.totalPrice.toFixed(2)}</td>
                </tr>
            `).join('');

            card.innerHTML = `
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <span>Order #${order.id}</span>
                        <span>Date: ${new Date(order.orderDate).toLocaleString()}</span>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${itemsHtml}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3" class="text-end"><strong>Total Amount:</strong></td>
                                <td><strong>$${order.totalAmount.toFixed(2)}</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            `;

            ordersList.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading orders:', error);
    }
} 


 // Global variables
 let currentOrderId = null;
 let orders = [
     {
         id: 1,
         customer: {
             name: "أحمد محمد",
             avatar: "assets/imgs/customer01.jpg"
         },
         item: {
             name: "بيتزا مارجريتا",
             description: "حجم كبير",
             image: "images/pizza.jpg"
         },
         quantity: 2,
         price: "45 جنيه",
         time: "14:30",
         timeAgo: "منذ 15 دقيقة",
         status: "preparing",
         comments: "بدون جبنة إضافية"
     },
     {
         id: 2,
         customer: {
             name: "فاطمة علي",
             avatar: "assets/imgs/customer02.jpg"
         },
         item: {
             name: "برجر دجاج",
             description: "مع بطاطس",
             image: "images/burger.jpg"
         },
         quantity: 1,
         price: "25 جنيه",
         time: "14:15",
         timeAgo: "منذ 30 دقيقة",
         status: "ready",
         comments: "بدون بصل"
     },
     {
         id: 3,
         customer: {
             name: "محمد حسن",
             avatar: "assets/imgs/customer01.jpg"
         },
         item: {
             name: "باستا كاربونارا",
             description: "حجم متوسط",
             image: "images/pasta.jpg"
         },
         quantity: 1,
         price: "35 جنيه",
         time: "13:45",
         timeAgo: "منذ ساعة",
         status: "delivered",
         comments: "-"
     },
     {
         id: 4,
         customer: {
             name: "سارة أحمد",
             avatar: "assets/imgs/customer02.jpg"
         },
         item: {
             name: "سلطة قيصر",
             description: "مع دجاج مشوي",
             image: "images/caesar-salad.jpg"
         },
         quantity: 1,
         price: "30 جنيه",
         time: "14:45",
         timeAgo: "منذ 5 دقائق",
         status: "pending",
         comments: "بدون جبنة بارميزان"
     },
     {
         id: 5,
         customer: {
             name: "علي محمود",
             avatar: "assets/imgs/customer01.jpg"
         },
         item: {
             name: "ساندويتش لحم بقري",
             description: "مع مشروب",
             image: "images/beef-sandwich.jpg"
         },
         quantity: 2,
         price: "40 جنيه",
         time: "12:30",
         timeAgo: "منذ ساعتين",
         status: "cancelled",
         comments: "تم الإلغاء من العميل"
     }
 ];

 // Initialize the page
 document.addEventListener('DOMContentLoaded', function() {
     // Add event listeners for filtering and searching
     document.getElementById('statusFilter').addEventListener('change', filterOrders);
     document.getElementById('searchOrders').addEventListener('input', filterOrders);
     
     // Add event listener for clicking outside modal to close it
     document.getElementById('commentModal').addEventListener('click', function(e) {
         if (e.target === this) {
             closeCommentModal();
         }
     });
 });

 // Filter orders based on status and search term
 function filterOrders() {
     const statusFilter = document.getElementById('statusFilter').value;
     const searchTerm = document.getElementById('searchOrders').value.toLowerCase();
     
     const filteredOrders = orders.filter(order => {
         const matchesStatus = !statusFilter || order.status === statusFilter;
         const matchesSearch = !searchTerm || 
             order.customer.name.toLowerCase().includes(searchTerm) ||
             order.item.name.toLowerCase().includes(searchTerm);
         
         return matchesStatus && matchesSearch;
     });
     
     renderOrders(filteredOrders);
 }

 // Render orders in the table
 function renderOrders(ordersToRender) {
     const tbody = document.getElementById('ordersTableBody');
     tbody.innerHTML = '';
     
     if (ordersToRender.length === 0) {
         tbody.innerHTML = `
             <tr>
                 <td colspan="8">
                     <div class="no-orders">
                         <i class="fas fa-clipboard-list"></i>
                         <h3>لا توجد طلبات</h3>
                         <p>لم يتم العثور على طلبات تطابق معايير البحث</p>
                     </div>
                 </td>
             </tr>
         `;
         return;
     }
     
     ordersToRender.forEach(order => {
         const row = document.createElement('tr');
         row.innerHTML = `
             <td>
                 <div class="customer-info">
                     <img src="${order.customer.avatar}" alt="Customer" class="customer-avatar">
                     <div class="customer-details">
                         <h4>${order.customer.name}</h4>
                     </div>
                 </div>
             </td>
             <td>
                 <div class="order-item">
                     <img src="${order.item.image}" alt="${order.item.name}" class="order-image">
                     <div class="order-details">
                         <h4>${order.item.name}</h4>
                         <p>${order.item.description}</p>
                     </div>
                 </div>
             </td>
             <td>${order.quantity}</td>
             <td>${order.price}</td>
             <td>
                 <div class="order-time">
                     <div>${order.time}</div>
                     <div>${order.timeAgo}</div>
                 </div>
             </td>
             <td>
                 <span class="status-badge status-${order.status}">${getStatusText(order.status)}</span>
             </td>
             <td>
                 <div class="order-comments">${order.comments}</div>
             </td>
             <td>
                 <div class="order-actions">
                     <button class="action-btn edit-btn" onclick="editOrder(${order.id})">
                         <i class="fas fa-edit"></i>
                         تعديل
                     </button>
                     <button class="action-btn comment-btn" onclick="addComment(${order.id})">
                         <i class="fas fa-comment"></i>
                         ملاحظة
                     </button>
                     <button class="action-btn delete-btn" onclick="deleteOrder(${order.id})">
                         <i class="fas fa-trash"></i>
                         حذف
                     </button>
                 </div>
             </td>
         `;
         tbody.appendChild(row);
     });
 }

 // Get status text in Arabic
 function getStatusText(status) {
     const statusMap = {
         'pending': 'في الانتظار',
         'preparing': 'قيد التحضير',
         'ready': 'جاهز',
         'delivered': 'تم التوصيل',
         'cancelled': 'ملغي'
     };
     return statusMap[status] || status;
 }

 // Edit order function
 function editOrder(orderId) {
     const order = orders.find(o => o.id === orderId);
     if (!order) return;
     
     // Here you would typically open an edit modal or redirect to edit page
     // For now, we'll show an alert with the order details
     alert(`تعديل الطلب رقم ${orderId}\nالعميل: ${order.customer.name}\nالطلب: ${order.item.name}`);
     
     // You can implement a proper edit modal here
     // Example: openEditModal(order);
 }

 // Add comment function
 function addComment(orderId) {
     currentOrderId = orderId;
     const order = orders.find(o => o.id === orderId);
     if (!order) return;
     
     const commentText = document.getElementById('commentText');
     commentText.value = order.comments === '-' ? '' : order.comments;
     document.getElementById('commentModal').style.display = 'block';
 }

 // Save comment function
 function saveComment() {
     if (!currentOrderId) return;
     
     const commentText = document.getElementById('commentText').value;
     const order = orders.find(o => o.id === currentOrderId);
     
     if (order) {
         order.comments = commentText || '-';
         filterOrders(); // Re-render the table
     }
     
     closeCommentModal();
 }

 // Close comment modal function
 function closeCommentModal() {
     document.getElementById('commentModal').style.display = 'none';
     currentOrderId = null;
     document.getElementById('commentText').value = '';
 }

 // Delete order function
 function deleteOrder(orderId) {
     const order = orders.find(o => o.id === orderId);
     if (!order) return;
     
     if (confirm(`هل أنت متأكد من حذف طلب ${order.customer.name}؟`)) {
         orders = orders.filter(o => o.id !== orderId);
         filterOrders(); // Re-render the table
         
         // Show success message
         showNotification('تم حذف الطلب بنجاح', 'success');
     }
 }

 // Show notification function
 function showNotification(message, type = 'info') {
     // Create notification element
     const notification = document.createElement('div');
     notification.className = `notification ${type}`;
     notification.style.cssText = `
         position: fixed;
         top: 20px;
         right: 20px;
         background: ${type === 'success' ? '#28a745' : '#007bff'};
         color: white;
         padding: 15px 20px;
         border-radius: 5px;
         box-shadow: 0 2px 10px rgba(0,0,0,0.1);
         z-index: 10000;
         font-size: 14px;
     `;
     notification.textContent = message;
     
     document.body.appendChild(notification);
     
     // Remove notification after 3 seconds
     setTimeout(() => {
         if (notification.parentNode) {
             notification.parentNode.removeChild(notification);
         }
     }, 3000);
 }

 // Update order status function (can be called from edit modal)
 function updateOrderStatus(orderId, newStatus) {
     const order = orders.find(o => o.id === orderId);
     if (order) {
         order.status = newStatus;
         filterOrders();
         showNotification('تم تحديث حالة الطلب بنجاح', 'success');
     }
 }

 // Export orders to CSV (optional feature)
 function exportOrders() {
     const csvContent = "data:text/csv;charset=utf-8," 
         + "العميل,الطلب,الكمية,السعر,الوقت,الحالة,ملاحظات\n"
         + orders.map(order => 
             `${order.customer.name},${order.item.name},${order.quantity},${order.price},${order.time},${getStatusText(order.status)},${order.comments}`
         ).join("\n");
     
     const encodedUri = encodeURI(csvContent);
     const link = document.createElement("a");
     link.setAttribute("href", encodedUri);
     link.setAttribute("download", "orders.csv");
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
 }
      // Cafetria submenu functionality
    //   const cafetriaMenu = document.getElementById('cafetria-menu');
    //     const cafetriaSubmenu = document.getElementById('cafetria-submenu');
        
    //     if (cafetriaMenu && cafetriaSubmenu) {
    //         cafetriaMenu.addEventListener('click', function(e) {
    //             e.preventDefault();
    //             this.classList.toggle('active');
    //             cafetriaSubmenu.classList.toggle('active');
    //         });
    //     }