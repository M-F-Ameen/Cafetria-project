// Sample data for demonstration
const menuItems = [
    { id: 1, name: "وجبة إفطار", price: 15 },
    { id: 2, name: "وجبة غداء", price: 25 },
    { id: 3, name: "وجبة عشاء", price: 20 },
    { id: 4, name: "مشروب", price: 5 }
];

const orders = [
    { id: 1, itemId: 1, quantity: 1, status: "مكتمل", date: "2023-10-01" },
    { id: 2, itemId: 2, quantity: 2, status: "قيد التحضير", date: "2023-10-02" }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // If on employee page, populate orders table
    if (document.getElementById('ordersTable')) {
        populateOrdersTable();
    }

    // Handle order form submission
    if (document.getElementById('orderForm')) {
        document.getElementById('orderForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const itemId = document.getElementById('foodItem').value;
            const quantity = document.getElementById('quantity').value;
            
            // In a real app, you would send this to a backend
            alert(`تم تقديم الطلب بنجاح! الصنف: ${itemId}, الكمية: ${quantity}`);
            this.reset();
        });
    }
});

function populateOrdersTable() {
    const tableBody = document.querySelector('#ordersTable tbody');
    tableBody.innerHTML = '';

    orders.forEach(order => {
        const item = menuItems.find(i => i.id == order.itemId);
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${item.name}</td>
            <td>${order.quantity}</td>
            <td>${order.status}</td>
            <td>${order.date}</td>
        `;
        
        tableBody.appendChild(row);
    });
}