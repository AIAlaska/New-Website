// Add event listener to the contact form submit button
document.querySelector('#contact button').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('#contact input[type="text"]').value;
    const email = document.querySelector('#contact input[type="email"]').value;
    const message = document.querySelector('#contact textarea').value;
    // Send the data to the server or perform any other action
    console.log(name, email, message);
});// JavaScript Document