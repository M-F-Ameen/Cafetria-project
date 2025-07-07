document.addEventListener('DOMContentLoaded', function() {
// Sidebar toggle functionality (only if sidebar exists)
const sidebarToggle = document.querySelector('.sidebar-toggle');
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
        document.body.classList.toggle('sidebar-collapsed');
        this.querySelector('i').classList.toggle('fa-chevron-right');
        this.querySelector('i').classList.toggle('fa-chevron-left');
    });
}

// Add dropdown menu functionality
const userMenu = document.querySelector('.user-menu');
if (userMenu) {
    userMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
    });
}

// Notification dropdown functionality
const notificationIcon = document.querySelector('.notification-icon');
const notificationBadge = document.querySelector('.notification-badge');
const markAllRead = document.querySelector('.mark-all-read');
const unreadNotifications = document.querySelectorAll('.notification-item.unread');

// Message dropdown functionality
const messageIcon = document.querySelector('.message-icon');
const messageBadge = document.querySelector('.message-badge');
const markAllReadMessages = document.querySelector('.mark-all-read-messages');
const unreadMessages = document.querySelectorAll('.message-item.unread');

if (notificationIcon) {
    notificationIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
    });
}

// Mark all as read functionality
if (markAllRead) {
    markAllRead.addEventListener('click', function(e) {
        e.stopPropagation();
        unreadNotifications.forEach(item => {
            item.classList.remove('unread');
        });
        if (notificationBadge) {
            notificationBadge.style.display = 'none';
        }
    });
}

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
    if (notificationBadge) {
        if (remainingUnread === 0) {
            notificationBadge.style.display = 'none';
        } else {
            notificationBadge.style.display = 'flex';
            notificationBadge.textContent = remainingUnread;
        }
    }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(e) {
    if (userMenu && !userMenu.contains(e.target)) {
        userMenu.classList.remove('active');
    }
    if (notificationIcon && !notificationIcon.contains(e.target)) {
        notificationIcon.classList.remove('active');
    }
    if (messageIcon && !messageIcon.contains(e.target)) {
        messageIcon.classList.remove('active');
    }
});

if (messageIcon) {
    messageIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
    });
}

// Mark all messages as read functionality
if (markAllReadMessages) {
    markAllReadMessages.addEventListener('click', function(e) {
        e.stopPropagation();
        unreadMessages.forEach(item => {
            item.classList.remove('unread');
        });
        if (messageBadge) {
            messageBadge.style.display = 'none';
        }
    });
}

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
    if (messageBadge) {
        if (remainingUnread === 0) {
            messageBadge.style.display = 'none';
        } else {
            messageBadge.style.display = 'flex';
            messageBadge.textContent = remainingUnread;
        }
    }
}

// ///////////

    // Add click event listeners to all section headers
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on the header
            this.classList.toggle('active');
            
            // Toggle the content visibility
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

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
});