export function loadHeader(containerId) {
  fetch('./components/header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById(containerId).innerHTML = html;

      const buttons = document.querySelectorAll('[data-mainButton]');

      buttons.forEach(button => {
        const menuText = button.querySelector('span'); // Select the span containing "Menu"

        button.addEventListener('click', () => {
          const menu = button.querySelector('[data-panel]');
          menu.classList.toggle('hidden');

          // Toggle the text content
          if (menu.classList.contains('hidden')) {
            menuText.textContent = 'Menu';
          } else {
            menuText.textContent = 'Close';
          }
        });
      });

      // Feature menu event listeners
      const featureButtons = document.querySelectorAll('[data-features]');
      featureButtons.forEach(button => {
        const chevronIcon = button.querySelector('img'); // Select the image within the button

        button.addEventListener('click', () => {
          const featureVisible = button.nextElementSibling;
          featureVisible.classList.toggle('hidden');
          chevronIcon.classList.toggle('rotate-180'); // Toggle the rotate-180 class
        });
      });

      // Prevent closing data-panel when clicking inside it
      const panel = document.querySelector('[data-menuPanel]');
      panel.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from bubbling up
      });

    });
}