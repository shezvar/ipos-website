export function loadHeader(containerId) {
    fetch('./components/footer.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById(containerId).innerHTML = html;
      });
  }