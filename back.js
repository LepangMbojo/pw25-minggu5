document.addEventListener('DOMContentLoaded', () => {
    // Validasi Form
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name.length < 3) {
                e.preventDefault();
                alert('Nama harus memiliki minimal 3 karakter!');
            }
            if (!name || !email || !message) {
                e.preventDefault();
                alert('Harap isi semua bidang!');
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                e.preventDefault();
                alert('Harap masukkan email yang valid!');
            }
        });
    }

    //blur
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.backgroundColor = 'transparent';
            navbar.style.backdropFilter = 'none';
            navbar.style.boxShadow = 'none';
        }
    });
});

