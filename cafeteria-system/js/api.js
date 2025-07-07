// API Base URL - change this to match your backend URL
const API_BASE_URL = 'http://localhost:5001/api';

// Utility function for making authenticated API calls
async function apiCall(endpoint, options = {}) {
    const token = localStorage.getItem('token');
    const defaultHeaders = {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers
        }
    });

    if (!response.ok) {
        if (response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = 'login.html';
            throw new Error('Unauthorized');
        }
        throw new Error(`API call failed: ${response.statusText}`);
    }

    return response.json();
}

// Check if user is authenticated
function isAuthenticated() {
    return !!localStorage.getItem('token');
}

// Get current user role
function getUserRole() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    
    // Decode JWT token (token is in format: header.payload.signature)
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
}

// Logout function
function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
} 