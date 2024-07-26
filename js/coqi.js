document.addEventListener("DOMContentLoaded", function() {
    var cookieConsent = document.getElementById('cookie-consent');
    var acceptButton = document.getElementById('accept-cookies');
    var rejectButton = document.getElementById('reject-cookies');

    // Mostrar el banner de cookies solo si no hay una decisión previa
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsent.style.display = 'flex';
    }

    // Manejar la aceptación de cookies
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.style.display = 'none';
    });

    // Manejar el rechazo de cookies
    rejectButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieConsent.style.display = 'none';
    });
});