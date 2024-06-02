document.getElementById('myList').addEventListener('click', function() {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});