// Efecto sutil del Header al hacer scroll
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.style.backgroundColor = "#f8fafc";
    header.style.borderColor = "var(--accent-color)";
  } else {
    header.style.backgroundColor = "#ffffff";
    header.style.borderColor = "#000000";
  }
});

// Desplazamiento suave para los enlaces de navegación
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const section = document.querySelector(targetId);
    
    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});