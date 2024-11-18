// Decrypt and render the encrypted HTML
async function loadEncryptedContent() {
    try {
        const response = await fetch('index.html.enc');
        const encryptedContent = await response.text();

        // Decrypt the content
        const password = 'password1'; // Hardcoded password
        const decryptedContent = CryptoJS.AES.decrypt(encryptedContent, password).toString(CryptoJS.enc.Utf8);

        if (!decryptedContent) throw new Error('Decryption failed. Check the password or encrypted file.');

        // Display the decrypted HTML in the app container
        document.getElementById('app').innerHTML = decryptedContent;
    } catch (error) {
        console.error('Failed to load encrypted content:', error);
        document.getElementById('app').innerHTML = '<h1>Error loading the web app.</h1>';
    }
}

loadEncryptedContent();
