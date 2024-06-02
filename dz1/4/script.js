document.addEventListener('DOMContentLoaded', () => {
    // Секретный код
    const secretCode = '12345';
    let inputSequence = '';
    document.addEventListener('keydown', (event) => {
        inputSequence += event.key;

        if (inputSequence.length > secretCode.length) {
            inputSequence = inputSequence.substring(inputSequence.length - secretCode.length);
        }

        if (inputSequence === secretCode) {
            console.log('я показался');
            document.getElementById('secret').style.display = 'block';
        }
    });
});
