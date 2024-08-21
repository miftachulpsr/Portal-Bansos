const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const REGISTRATION_FILE = path.join(__dirname, 'registrations.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint untuk menyimpan data pengajuan
app.post('/submit-registration', (req, res) => {
    const data = req.body;

    if (!data.namalengkap || !data.nik || !data.kk || !data.kepalakeluarga || !data.alamat || !data.telepon || !data.email) {
        return res.status(400).json({ error: 'Semua field harus diisi' });
    }

    fs.readFile(REGISTRATION_FILE, 'utf8', (err, fileData) => {
        let registrations = [];
        if (!err && fileData) {
            registrations = JSON.parse(fileData);
        }
        registrations.push(data);

        fs.writeFile(REGISTRATION_FILE, JSON.stringify(registrations, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Gagal menyimpan data' });
            }
            res.json({ message: 'Pendaftaran berhasil' });
        });
    });
});

// Endpoint untuk mendapatkan daftar pengguna
app.get('/users', (req, res) => {
    fs.readFile(REGISTRATION_FILE, 'utf8', (err, fileData) => {
        if (err) {
            return res.status(500).json({ error: 'Gagal membaca data' });
        }
        res.json(JSON.parse(fileData));
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

