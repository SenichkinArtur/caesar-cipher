let text = document.getElementById('text'),
    shift = document.getElementById('shift'),
    result = document.getElementById('result'),
    encryptBtn = document.getElementById('encryptBtn'),
    decryptBtn = document.getElementById('decryptBtn'),
    autoDecryptBtn = document.getElementById('autoDecryptBtn'),
    autoText = document.getElementById('autoText'),
    autoResult = document.getElementById('autoResult'),
    autoShift = document.getElementById('autoShift'),
    alphabet = 'abcdefghijklmnopqrstuvwxyz';

function encryptDecrypt(str, shift) {
    let text = str.toLowerCase();
    let newText = '';

    for(let i = 0; i < text.length; i++) {
        let currentLetter = text[i];
        if(currentLetter === ' ' || currentLetter === ',' || currentLetter === '.' || currentLetter === '?' || currentLetter === ':' || currentLetter === "'") {
            newText += currentLetter;
            continue;
        }
        
        let currentIndex = alphabet.indexOf(currentLetter);
        let newIndex = currentIndex + shift;
        if(newIndex > 25) newIndex = newIndex - 26;
        if(newIndex < 0) newIndex = newIndex + 26;

        if(currentLetter.toUpperCase() !== str[i]) {
            newText += alphabet[newIndex];
        } else {
            newText += alphabet[newIndex].toUpperCase();
        }
    }
    return newText;
}

function autoEncrypt(string) {
    let lettersAmount = {};
    let maxIndex = 0;
    let maxLetter = '';

    string.split('').map((letter) => {
        letter = letter.toLowerCase();
        lettersAmount[letter] = !lettersAmount[letter] ? 1 : lettersAmount[letter] + 1;
    });
    
    for(letter in lettersAmount) {
        if(lettersAmount[letter] >= maxIndex && letter != ' ') {
            maxIndex = lettersAmount[letter];
            maxLetter = letter;
        }
    }
    let index = alphabet.indexOf('e') - alphabet.indexOf(maxLetter);
        
    return encryptDecrypt(string, index);
}


encryptBtn.addEventListener('click', () => {
    result.innerHTML = encryptDecrypt(text.value, +shift.value);
});

decryptBtn.addEventListener('click', () => {
    result.innerHTML = encryptDecrypt(text.value, -shift.value);
});

autoDecryptBtn.addEventListener('click', () => {
    autoResult.innerHTML = autoEncrypt(autoText.value);
})