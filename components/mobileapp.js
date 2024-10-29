export function loadHeader(containerId) {
    fetch('./components/mobileapp.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById(containerId).innerHTML = html;
      });
  }