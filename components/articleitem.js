export function loadHeader(containerId) {
    fetch('./components/articleitem.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById(containerId).innerHTML = html;
      });
  }