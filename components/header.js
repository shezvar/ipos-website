export function loadHeader(containerId) {
    fetch('./components/header.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById(containerId).innerHTML = html;
      });
  }