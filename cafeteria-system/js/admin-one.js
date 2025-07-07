 // Dashboard functionality
 document.addEventListener('DOMContentLoaded', function() {
    // Initialize sales chart
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
            datasets: [{
                label: 'المبيعات',
                data: [1200, 1900, 1500, 2100, 1800, 2400, 2200],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });

    // User menu dropdown functionality
    const userMenu = document.querySelector('.user-menu');
    userMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
    });

    // Notification dropdown functionality
    const notificationIcon = document.querySelector('.notification-icon');
    const notificationBadge = document.querySelector('.notification-badge');
    const markAllRead = document.querySelector('.mark-all-read');
    const unreadNotifications = document.querySelectorAll('.notification-item.unread');

    notificationIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
    });

    // Mark all notifications as read functionality
    markAllRead.addEventListener('click', function(e) {
        e.stopPropagation();
        unreadNotifications.forEach(item => {
            item.classList.remove('unread');
        });
        notificationBadge.style.display = 'none';
    });

    // Mark individual notification as read
    document.querySelectorAll('.notification-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            if (this.classList.contains('unread')) {
                this.classList.remove('unread');
                updateNotificationBadge();
            }
        });
    });

    function updateNotificationBadge() {
        const remainingUnread = document.querySelectorAll('.notification-item.unread').length;
        if (remainingUnread === 0) {
            notificationBadge.style.display = 'none';
        } else {
            notificationBadge.style.display = 'flex';
            notificationBadge.textContent = remainingUnread;
        }
    }

    // Message dropdown functionality
    const messageIcon = document.querySelector('.message-icon');
    const messageBadge = document.querySelector('.message-badge');
    const markAllReadMessages = document.querySelector('.mark-all-read-messages');
    const unreadMessages = document.querySelectorAll('.message-item.unread');

    messageIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
    });

    // Mark all messages as read functionality
    markAllReadMessages.addEventListener('click', function(e) {
        e.stopPropagation();
        unreadMessages.forEach(item => {
            item.classList.remove('unread');
        });
        messageBadge.style.display = 'none';
    });

    // Mark individual message as read
    document.querySelectorAll('.message-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            if (this.classList.contains('unread')) {
                this.classList.remove('unread');
                updateMessageBadge();
            }
        });
    });

    function updateMessageBadge() {
        const remainingUnread = document.querySelectorAll('.message-item.unread').length;
        if (remainingUnread === 0) {
            messageBadge.style.display = 'none';
        } else {
            messageBadge.style.display = 'flex';
            messageBadge.textContent = remainingUnread;
        }
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!userMenu.contains(e.target)) {
            userMenu.classList.remove('active');
        }
        if (!notificationIcon.contains(e.target)) {
            notificationIcon.classList.remove('active');
        }
        if (!messageIcon.contains(e.target)) {
            messageIcon.classList.remove('active');
        }
    });

    // Sidebar toggle functionality
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const body = document.body;
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            body.classList.toggle('sidebar-collapsed');
            this.querySelector('i').classList.toggle('fa-chevron-right');
            this.querySelector('i').classList.toggle('fa-chevron-left');
        });
    }

    // Cafetria submenu functionality
    const cafetriaMenu = document.getElementById('cafetria-menu');
    const cafetriaSubmenu = document.getElementById('cafetria-submenu');
    
    if (cafetriaMenu && cafetriaSubmenu) {
        cafetriaMenu.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            cafetriaSubmenu.classList.toggle('active');
        });
    }

    // Chart period selector
    const chartPeriod = document.querySelector('.chart-period');
    if (chartPeriod) {
        chartPeriod.addEventListener('change', function() {
            // Here you would typically fetch new data based on the selected period
            console.log('Selected period:', this.value);
        });
    }

    // Add hover effects to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Quick action buttons
    const quickActions = document.querySelectorAll('.quick-action');
    quickActions.forEach(action => {
        action.addEventListener('click', function(e) {
            // Add a small delay for visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
});