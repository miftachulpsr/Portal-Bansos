document.getElementById('cekBansosForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nik = document.getElementById('nik').value;

    if (nik) {
        alert('NIK Submitted: ' + nik);
        // Here, you can add your logic to send NIK to a server, fetch data, etc.
    } else {
        alert('Please enter a valid NIK.');
    }
});

document.getElementById('cekBansosForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nik = document.getElementById('nik').value;

    if (nik) {
        // Tampilkan pesan konfirmasi
        if (confirm('NIK Submitted: ' + nik + '\nApakah Anda ingin melanjutkan?')) {
            // Jika pengguna mengklik "OK", arahkan mereka ke halaman yang diinginkan
            window.location.href = 'hasilcek.html';
        } else {
            // Jika pengguna mengklik "Cancel", Anda bisa melakukan sesuatu yang lain, atau cukup biarkan kosong
            alert('Pengguna memilih untuk tidak melanjutkan.');
        }
    } else {
        alert('Silakan masukkan NIK yang valid.');
    }
});
