// Check if the user has a preferred color scheme stored

const darkModePreferred = localStorage.getItem('darkMode');



// If dark mode is preferred, apply it to the body

if (darkModePreferred === 'true') {

document.body.classList.add('dark-mode');

}



// Toggle dark mode

document.addEventListener('DOMContentLoaded', function() {

const darkModeButton = document.querySelector('.midnight-btn');

// Fetch and log fake data

fetchFakeData();



if (darkModeButton) {

darkModeButton.addEventListener('click', function(event) {

// Check if the clicked element is the dark mode button or a descendant

if (darkModeButton.contains(event.target)) {

document.body.classList.toggle('dark-mode');



// Save the user's preference to local storage

const isDarkMode = document.body.classList.contains('dark-mode');

localStorage.setItem('darkMode', isDarkMode);

}

});

}

});



// Function to fetch fake data and log it

function fetchFakeData() {

fetch('https://jsonplaceholder.typicode.com/users')

.then(response => {

if (!response.ok) {

throw new Error('Network response was not ok');

}

return response.json();

})

.then(data => {

console.log('Fetched fake data:', data);

})

.catch(error => {

console.error('There was a problem with your fetch operation:', error);

});

}
