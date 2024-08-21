document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk mendapatkan daftar pengguna
    function fetchUsers() {
        fetch('/users')
            .then(response => response.json())
            .then(data => {
                const userListUl = document.getElementById('userListUl');
                userListUl.innerHTML = ''; // Kosongkan daftar pengguna yang ada
                data.forEach(user => {
                    const li = document.createElement('li');
                    li.textContent = `Nama Lengkap: ${user.namalengkap}, NIK: ${user.nik}, No. KK: ${user.kk}, Kepala Keluarga: ${user.kepalakeluarga}, Alamat: ${user.alamat}, Telepon: ${user.telepon}, Email: ${user.email}`;
                    userListUl.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }

    // Ambil daftar pengguna saat halaman dimuat
    fetchUsers();

    // Tambah aksi pada formulir pendaftaran
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default

        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('/submit-registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
                document.getElementById('registrationForm').reset(); // Reset formulir setelah berhasil
                fetchUsers(); // Update daftar pengguna setelah pendaftaran berhasil
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman formulir default

        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        fetch('/submit-registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                alert(data.message);
                document.getElementById('registrationForm').reset(); // Reset formulir setelah berhasil
                fetchUsers(); // Update daftar pengguna setelah pendaftaran berhasil
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah pengiriman form default

    // Ambil nilai dari form
    var namaLengkap = document.getElementById('namalengkap').value;
    var nik = document.getElementById('nik').value;
    var kk = document.getElementById('kk').value;
    var kepalakeluarga = document.getElementById('kepalakeluarga').value;
    var alamat = document.getElementById('alamat').value;
    var telepon = document.getElementById('telepon').value;
    var email = document.getElementById('email').value;

    // Validasi sederhana untuk memastikan semua input diisi
    if (namaLengkap && nik && kk && kepalakeluarga && alamat && telepon && email) {
        // Ambil elemen tbody dari tabel
        var resultBody = document.getElementById('resultBody');

        // Buat elemen baris baru
        var newRow = document.createElement('tr');

        // Buat dan tambahkan elemen kolom (td) untuk setiap input
        newRow.innerHTML = `
            <td>${namaLengkap}</td>
            <td>${nik}</td>
            <td>${kk}</td>
            <td>${kepalakeluarga}</td>
            <td>${alamat}</td>
            <td>${telepon}</td>
            <td>${email}</td>
        `;

        // Tambahkan baris baru ke tbody
        resultBody.appendChild(newRow);

        // Bersihkan form setelah pendaftaran berhasil
        document.getElementById('registrationForm').reset();
    } else {
        alert('Semua field harus diisi!');
    }
});

// pengajuan.js
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil data dari formulir
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Ambil referensi ke tabel body
    const resultTableBody = document.getElementById('resultBody');

    // Buat baris baru untuk tabel
    const row = document.createElement('tr');

    // Tambahkan sel untuk setiap kolom
    Object.values(data).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    });

    // Tambahkan baris ke tabel
    resultTableBody.appendChild(row);

    // Reset formulir setelah data ditambahkan
    event.target.reset();

    event.preventDefault()

    document.addEventListener('DOMContentLoaded', function() {
        // Fungsi untuk menyimpan data ke Local Storage
        function saveDataToLocalStorage(data) {
            let existingData = JSON.parse(localStorage.getItem('registrations')) || [];
            existingData.push(data);
            localStorage.setItem('registrations', JSON.stringify(existingData));
        }
    
        // Fungsi untuk memuat data dari Local Storage
        function loadDataFromLocalStorage() {
            let storedData = JSON.parse(localStorage.getItem('registrations')) || [];
            const resultTableBody = document.getElementById('resultBody');
    
            storedData.forEach(item => {
                const row = document.createElement('tr');
                Object.values(item).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });
                resultTableBody.appendChild(row);
            });
        }
    
        // Menangani pengiriman formulir
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman formulir default
    
            // Mengambil data dari formulir
            const formData = new FormData(this);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
    
            // Simpan data ke Local Storage
            saveDataToLocalStorage(data);
    
            // Tambahkan data ke tabel
            const resultTableBody = document.getElementById('resultBody');
            const row = document.createElement('tr');
    
            Object.values(data).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });
    
            resultTableBody.appendChild(row);
    
            // Reset formulir setelah data ditambahkan
            this.reset();
        });
    
        // Muat data dari Local Storage saat halaman dimuat
        loadDataFromLocalStorage();
    });
    

});
