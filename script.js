//Soldaki menü de nerede olduğumuzu gösteriyor. 
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".sidebar a");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      const id = entry.target.getAttribute("id");

      links.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + id) {
          link.classList.add("active");
        }
      });

    }
  });
}, {
  root: null,
  threshold: 0.4
});

sections.forEach(section => {
  observer.observe(section);
});


//Kopyalandı yazısı için. 
document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", () => {

    const code = button.nextElementSibling.innerText;

    navigator.clipboard.writeText(code);

    button.innerText = "Kopyalandı ✔";

    setTimeout(() => {
      button.innerText = "Kopyala";
    }, 1500);

  });
});

//dark mode için kodlar
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.innerText = "☀️ Light Mode";
  } else {
    toggleBtn.innerText = "🌙 Dark Mode";
  }
});