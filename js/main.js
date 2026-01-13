document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    fetch("components/navbar.html")
      .then(res => res.text())
      .then(data => {
        navbar.innerHTML = data;
        setActiveNavLink();
      })
      .catch(err => console.error("Navbar load error:", err));
  }

  const footer = document.getElementById("footer");
  if (footer) {
    fetch("components/footer.html")
      .then(res => res.text())
      .then(data => footer.innerHTML = data)
      .catch(err => console.error("Footer load error:", err));
  }

  const slider = document.querySelector(".product-slider");
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  if (slider && nextBtn && prevBtn) {
    const scrollAmount = 300;

    nextBtn.addEventListener("click", () => {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", () => {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
  }

});

function setActiveNavLink() {
  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

function playDemoVideo() {
  const video = document.getElementById("demoVideo");
  const overlay = document.querySelector(".video-play-overlay");

  if (!video || !overlay) return;

  video.play();

  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";

  setTimeout(() => {
    overlay.style.display = "none";
  }, 300);
}
