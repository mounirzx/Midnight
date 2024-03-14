// Check if the user has a preferred color scheme stored
const darkModePreferred = localStorage.getItem('darkMode');

// If dark mode is preferred, apply it to the body
if (darkModePreferred === 'true') {
  document.body.classList.add('dark-mode');
}
document.addEventListener('abort', function(){
})
// Toggle dark mode
document.addEventListener('DOMContentLoaded', function() {
    const darkModeButton = document.querySelector('.midnight-btn');
    if (darkModeButton) {
      darkModeButton.addEventListener('click', function(event) {
        // Check if the clicked element is the dark mode button
        if (event.target === darkModeButton) {
          document.body.classList.toggle('dark-mode');

          // Save the user's preference to local storage
          const isDarkMode = document.body.classList.contains('dark-mode');
          localStorage.setItem('darkMode', isDarkMode);
        }
      });
    }
});
