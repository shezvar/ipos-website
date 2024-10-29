export function loadHeader(containerId) {
    fetch('./components/resources.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById(containerId).innerHTML = html;
      });
  }