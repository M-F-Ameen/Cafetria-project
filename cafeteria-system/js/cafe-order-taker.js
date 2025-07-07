  // Global variables
  let currentOrderId = null;
  let orders = [
      {
          id: 1,
          customer: {
              name: "أحمد محمد",
              avatar: "../assets/imgs/customer01.jpg"
          },
          item: {
              name: "بيتزا مارجريتا",
              description: "حجم كبير",
              image: "../images/pizza.jpg"
          },
          quantity: 2,
          price: "45 جنيه",
          collection: "دعم",
          time: "14:30",
          timeAgo: "منذ 15 دقيقة",
          status: "preparing",
          comments: "بدون جبنة إضافية"
      },
      {
          id: 2,
          customer: {
              name: "فاطمة علي",
              avatar: "../assets/imgs/customer02.jpg"
          },
          item: {
              name: "برجر دجاج",
              description: "مع بطاطس",
              image: "../images/burger.jpg"
          },
          quantity: 1,
          price: "25 جنيه",
          collection: "كاش",
          time: "14:15",
          timeAgo: "منذ 30 دقيقة",
          status: "ready",
          comments: "بدون بصل"
      },
      {
          id: 3,
          customer: {
              name: "محمد حسن",
              avatar: "../assets/imgs/customer01.jpg"
          },
          item: {
              name: "باستا كاربونارا",
              description: "حجم متوسط",
              image: "../images/pasta.jpg"
          },
          quantity: 1,
          price: "35 جنيه",
          collection: "دعم",
          time: "13:45",
          timeAgo: "منذ ساعة",
          status: "delivered",
          comments: "-"
      },
      {
          id: 4,
          customer: {
              name: "سارة أحمد",
              avatar: "../assets/imgs/customer02.jpg"
          },
          item: {
              name: "سلطة قيصر",
              description: "مع دجاج مشوي",
              image: "../images/caesar-salad.jpg"
          },
          quantity: 1,
          price: "30 جنيه",
          collection: "كاش",
          time: "14:45",
          timeAgo: "منذ 5 دقائق",
          status: "pending",
          comments: "بدون جبنة بارميزان"
      },
      {
          id: 5,
          customer: {
              name: "علي محمود",
              avatar: "../assets/imgs/customer01.jpg"
          },
          item: {
              name: "ساندويتش لحم بقري",
              description: "مع مشروب",
              image: "../images/beef-sandwich.jpg"
          },
          quantity: 2,
          price: "40 جنيه",
          collection: "دعم",
          time: "12:30",
          timeAgo: "منذ ساعتين",
          status: "cancelled",
          comments: "تم الإلغاء من العميل"
      }
  ];

  // Hospitality Orders Array
  let hospitalityOrders = [
      {
          id: 101,
          customer: {
              name: "إدارة الجامعة",
              avatar: "../assets/imgs/customer01.jpg"
          },
          item: {
              name: "شاي وقهوة",
              description: "ضيافة اجتماع مجلس الجامعة",
              image: "../images/tea.jpg"
          },
          quantity: 10,
          price: "0 جنيه",
          collection: "ضيافة",
          time: "11:00",
          timeAgo: "منذ ساعتين",
          status: "ready",
          comments: "بدون سكر"
      },
      {
          id: 102,
          customer: {
              name: "قسم شؤون الطلاب",
              avatar: "../assets/imgs/customer02.jpg"
          },
          item: {
              name: "عصائر وحلويات",
              description: "ضيافة حفل تكريم",
              image: "../images/orange-juice.jpg"
          },
          quantity: 20,
          price: "0 جنيه",
          collection: "ضيافة",
          time: "13:00",
          timeAgo: "منذ نصف ساعة",
          status: "preparing",
          comments: "تقديم بارد"
      },
      {
          id: 103,
          customer: {
              name: "قسم الموارد البشرية",
              avatar: "../assets/imgs/customer01.jpg"
          },
          item: {
              name: "قهوة عربية",
              description: "ضيافة مقابلات التوظيف",
              image: "../images/tea.jpg"
          },
          quantity: 8,
          price: "0 جنيه",
          collection: "ضيافة",
          time: "09:30",
          timeAgo: "منذ 3 ساعات",
          status: "pending",
          comments: "سكر قليل"
      },
      {
          id: 104,
          customer: {
              name: "إدارة العلاقات العامة",
              avatar: "../assets/imgs/customer02.jpg"
          },
          item: {
              name: "مياه معدنية",
              description: "ضيافة مؤتمر صحفي",
              image: "../images/cola.jpg"
          },
          quantity: 15,
          price: "0 جنيه",
          collection: "ضيافة",
          time: "10:45",
          timeAgo: "منذ ساعة ونصف",
          status: "delivered",
          comments: "باردة"
      },
      {
          id: 105,
          customer: {
              name: "قسم المالية",
              avatar: "../assets/imgs/customer01.jpg"
          },
          item: {
              name: "كيك شوكولاتة",
              description: "ضيافة اجتماع الميزانية",
              image: "../images/chocolate-cake.jpg"
          },
          quantity: 12,
          price: "0 جنيه",
          collection: "ضيافة",
          time: "12:15",
          timeAgo: "منذ ساعة",
          status: "cancelled",
          comments: "تم الإلغاء"
      },
      {
          id: 106,
          customer: {
              name: "قسم تقنية المعلومات",
              avatar: "../assets/imgs/customer02.jpg"
          },
          item: {
              name: "دونات",
              description: "ضيافة ورشة عمل",
              image: "../images/donut.jpg"
          },
          quantity: 18,
          price: "0 جنيه",
          collection: "ضيافة",
          time: "14:00",
          timeAgo: "منذ 10 دقائق",
          status: "preparing",
          comments: "تقديم مع عصير"
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
      renderHospitalityOrders(hospitalityOrders);
      renderCompletedOrders();
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
              <td style="width: 280px !important;">
                  <div class="order-item" >
                      <img src="${order.item.image}" alt="${order.item.name}" class="order-image">
                      <div class="order-details">
                          <h4>${order.item.name}</h4>
                          <p>${order.item.description}</p>
                      </div>
                  </div>
              </td>
              <td>${order.quantity}</td>
              <td>${order.price}</td>
              <td><span class="collection-badge ${order.collection === 'دعم' ? 'collection-support' : 'collection-cash'}">${order.collection}</span></td>
              <td>
                  <div class="order-time">
                      <div>${order.time}</div>
                      <div>${order.timeAgo}</div>
                  </div>
              </td>
              <td>
                  <div class="order-comments">${order.comments}</div>
              </td>
              <td>
                  <select class="status-select ${order.status}" onchange="updateOrderStatus(${order.id}, this.value)">
                      <option value="pending" style="background:#fffbe6;color:#856404;" ${order.status === 'pending' ? 'selected' : ''}>في الانتظار</option>
                      <option value="preparing" style="background:#eaf6ff;color:#004085;" ${order.status === 'preparing' ? 'selected' : ''}>قيد التحضير</option>
                      <option value="ready" style="background:#eaffea;color:#155724;" ${order.status === 'ready' ? 'selected' : ''}>جاهز</option>
                      <option value="delivered" style="background:#eafcff;color:#0c5460;" ${order.status === 'delivered' ? 'selected' : ''}>تم التوصيل</option>
                      <option value="cancelled" style="background:#fff0f0;color:#721c24;" ${order.status === 'cancelled' ? 'selected' : ''}>ملغي</option>
                  </select>
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
          + "العميل,الطلب,الكمية,السعر,تحصيل,الوقت,الحالة,ملاحظات\n"
          + orders.map(order => 
              `${order.customer.name},${order.item.name},${order.quantity},${order.price},${order.collection},${order.time},${getStatusText(order.status)},${order.comments}`
          ).join("\n");
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "orders.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }

  // Render hospitality orders in the table
  function renderHospitalityOrders(ordersToRender) {
      const tbody = document.getElementById('hospitalityOrdersTableBody');
      tbody.innerHTML = '';

      if (ordersToRender.length === 0) {
          tbody.innerHTML = `
              <tr>
                  <td colspan="8">
                      <div class="no-orders">
                          <i class="fas fa-clipboard-list"></i>
                          <h3>لا توجد طلبات ضيافة</h3>
                          <p>لم يتم العثور على طلبات ضيافة</p>
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
              <td><span class="collection-badge collection-support">${order.collection}</span></td>
              <td>
                  <div class="order-time">
                      <div>${order.time}</div>
                      <div>${order.timeAgo}</div>
                  </div>
              </td>
              <td>
                  <div class="order-comments">${order.comments}</div>
              </td>
              <td>
                  <select class="status-select ${order.status}" onchange="updateHospitalityOrderStatus(${order.id}, this.value)">
                      <option value="pending" style="background:#fffbe6;color:#856404;" ${order.status === 'pending' ? 'selected' : ''}>في الانتظار</option>
                      <option value="preparing" style="background:#eaf6ff;color:#004085;" ${order.status === 'preparing' ? 'selected' : ''}>قيد التحضير</option>
                      <option value="ready" style="background:#eaffea;color:#155724;" ${order.status === 'ready' ? 'selected' : ''}>جاهز</option>
                      <option value="delivered" style="background:#eafcff;color:#0c5460;" ${order.status === 'delivered' ? 'selected' : ''}>تم التوصيل</option>
                      <option value="cancelled" style="background:#fff0f0;color:#721c24;" ${order.status === 'cancelled' ? 'selected' : ''}>ملغي</option>
                  </select>
              </td>
          `;
          tbody.appendChild(row);
      });
  }

  // Update hospitality order status
  function updateHospitalityOrderStatus(orderId, newStatus) {
      const order = hospitalityOrders.find(o => o.id === orderId);
      if (order) {
          order.status = newStatus;
          renderHospitalityOrders(hospitalityOrders);
          showNotification('تم تحديث حالة طلب الضيافة بنجاح', 'success');
      }
  }

  function toggleCompletedOrders() {
      const dropdown = document.getElementById('completedOrdersDropdown');
      const btn = document.getElementById('completedOrdersToggleBtn');
      if (dropdown.style.display === 'none') {
          dropdown.style.display = 'block';
          btn.textContent = '▲';
      } else {
          dropdown.style.display = 'none';
          btn.textContent = '▼';
      }
  }

  function renderCompletedOrders() {
      const tbody = document.getElementById('completedOrdersTableBody');
      tbody.innerHTML = '';
      // Combine both arrays and filter for completed orders
      const completed = [...orders, ...hospitalityOrders].filter(order => order.status === 'delivered' || order.status === 'ready');
      if (completed.length === 0) {
          tbody.innerHTML = `
              <tr>
                  <td colspan="8">
                      <div class="no-orders">
                          <i class="fas fa-clipboard-list"></i>
                          <h3>لا توجد طلبات مكتملة</h3>
                          <p>لم يتم العثور على طلبات مكتملة</p>
                      </div>
                  </td>
              </tr>
          `;
          return;
      }
      completed.forEach(order => {
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
              <td><span class="collection-badge ${order.collection === 'دعم' ? 'collection-support' : order.collection === 'كاش' ? 'collection-cash' : 'collection-support'}">${order.collection}</span></td>
              <td>
                  <div class="order-time">
                      <div>${order.time}</div>
                      <div>${order.timeAgo}</div>
                  </div>
              </td>
              <td>
                  <div class="order-comments">${order.comments}</div>
              </td>
              <td>
                  <span class="status-badge status-${order.status}">${getStatusText(order.status)}</span>
              </td>
          `;
          tbody.appendChild(row);
      });
  }