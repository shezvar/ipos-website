export function loadHeader(containerId) {
    fetch('./components/faq.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById(containerId).innerHTML = html;
      });
  }