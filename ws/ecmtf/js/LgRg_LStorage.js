document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var user = {
        username: username,
        password: password
    };

    localStorage.setItem('user', JSON.stringify(user));
    alert('Registrazione completata!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var loginUsername = document.getElementById('loginUsername').value;
    var loginPassword = document.getElementById('loginPassword').value;

    var storedUser = localStorage.getItem('user');
    if (storedUser) {
        var userData = JSON.parse(storedUser);

        if (userData.username === loginUsername && userData.password === loginPassword) {
            alert('Login completato!');
            localStorage.setItem('loggedInUser', loginUsername); // Salva il nome utente nell'archivio locale come utente connesso
            window.location.href = "Homepage.html";
        } else {
            alert('Nome utente o password non corretti.');
        }
    } else {
        alert('Nessun utente registrato con questo nome.');
    }
});
