const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const section = document.querySelector(link.getAttribute("href"));
    section.scrollIntoView({
      behavior: "smooth"
    });
  });
});