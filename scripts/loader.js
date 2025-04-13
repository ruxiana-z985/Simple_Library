window.addEventListener('DOMContentLoaded', () => {
    fetch('navbar.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('navbar').innerHTML = html;
  
        // Now that navbar is added, attach the event listener
        const bookAdder = document.querySelector('.book_adder');
        const addBook_dialog = document.getElementById('addBook_dialog');
  
        bookAdder.addEventListener('click', () => {
          addBook_dialog.showModal();
        });
      })
      .catch(error => {
        console.error('failed to load navbar', error);
      });
  });
  