document.addEventListener('DOMContentLoaded', function() {
    const qrForm = document.getElementById('qrForm');
    const qrCodeImage = document.getElementById('qrCodeImage');

    qrForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const urlInput = document.getElementById('urlInput');
        const url = urlInput.value.trim();

        if (url === "") {
            alert("Please enter a URL before generating the QR code.");
            return;
        }

        qrCodeImage.innerHTML = ''; // Clear previous QR code

        const qrCodeImg = document.createElement('img');
        qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(url)}&size=200x200`;
        qrCodeImg.alt = 'QR Code';

        qrCodeImage.appendChild(qrCodeImg);
    });
});
