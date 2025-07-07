document.addEventListener('DOMContentLoaded', () => {
    // Redirect if already logged in
    if (isAuthenticated()) {
        const role = getUserRole();
        window.location.href = role === 'admin' ? 'admin.html' : 'employee.html';
    }

    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', handleLogin);
});

async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error-message');

    try {
        const response = await apiCall('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });

        localStorage.setItem('token', response.token);
        
        // Redirect based on role
        if (response.role === 'admin') {
            window.location.href = 'admin.html';
        } else {
            window.location.href = 'employee.html';
        }
    } catch (error) {
        errorDiv.textContent = 'Invalid email or password';
        errorDiv.style.display = 'block';
    }
} 