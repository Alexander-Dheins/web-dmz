document.addEventListener('DOMContentLoaded', () => {
    const contactBtns = document.querySelectorAll('.contactBtn');
    const closeBtns = document.querySelectorAll('.close');
    const acceptBtns = document.querySelectorAll('.acceptBtn');

    contactBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'block';
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-modal');
            document.getElementById(modalId).style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    acceptBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const socialId = btn.getAttribute('data-social');
            document.getElementById(socialId).classList.remove('hidden');
            const modal = btn.closest('.modal');
            modal.style.display = 'none';
            const contactBtn = document.querySelector(`.contactBtn[data-modal="${modal.id}"]`);
            if (contactBtn) {
                contactBtn.style.display = 'none';
            }
        });
    });
});