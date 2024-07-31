document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'lily' && password === 'prettygirl') {
        window.location.href = 'wedding-invitation.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});
