document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('.landing-container').classList.add('loaded');
  }, 300);

  // Add button click functionality
  document.querySelector('.start-button').addEventListener('click', () => {
    // Replace with the URL of your reading page
    window.location.href = '/Book/book.html';
  });
});
