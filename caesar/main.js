// Fonction de chiffrement César
function caesarCipher(str, shift) {
    return str
        .split('')
        .map(char => {
            const code = char.charCodeAt(0);
            if (code >= 65 && code <= 90) { // Pour les majuscules
                return String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) { // Pour les minuscules
                return String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
            return char;
        })
        .join('');
}

// Fonction pour gérer le clic sur le bouton
function handleEncrypt() {
    const shift = parseInt(document.getElementById('shift').value);
    const message = document.getElementById('message').value;
    const encryptedMessage = caesarCipher(message, shift);
    document.getElementById('output').innerText = encryptedMessage;
}

// Ajout d'un gestionnaire d'événements au bouton de chiffrement
document.getElementById('encryptBtn').addEventListener('click', handleEncrypt);
