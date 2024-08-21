document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting to see JavaScript action
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log('Login attempted with username:', username, 'and password:', password);
    // Add your login handling code here
});

// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulasi login atau validasi
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Misalkan login berhasil
    if (email && password) {
        window.location.href = 'masuklogin.html'; // Ganti dengan URL halaman tujuan
    } else {
        // Tampilkan pesan error jika diperlukan
        alert('Email dan kata sandi tidak valid.');
    }
});
