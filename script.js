document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'admit' && password === '0987') {
        
        window.location.href ="admit-card.html"
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
