document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.getElementById('share-button');
    const sharePopup = document.getElementById('share-popup');

    shareButton.addEventListener('click', function() {
        const rect = shareButton.getBoundingClientRect();
        sharePopup.style.top = `${rect.top - sharePopup.offsetHeight - 10}px`; // Ajuste para estar justo arriba del botón
        sharePopup.style.left = `${rect.left + (rect.width / 2) - (sharePopup.offsetWidth / 2)}px`;

        if (sharePopup.style.display === 'none' || sharePopup.style.display === '') {
            sharePopup.style.display = 'flex';
        } else {
            sharePopup.style.display = 'none';
        }
    });
});