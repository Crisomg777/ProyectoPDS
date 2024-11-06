document.addEventListener('DOMContentLoaded', () => {
    const username = sessionStorage.getItem('loggedInUser');
    if (username) {
        document.getElementById('usernameDisplay').textContent = username;
    } else {
        window.location.href = 'index.html';
    }
});