function setLanguage(lang) {
  document.querySelectorAll("[data-pt]").forEach(el => {
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });
}

window.onload = () => setLanguage('pt');
