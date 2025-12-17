/* =========================
   MOBILE MENU
========================= */
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

/* =========================
   FADE-UP ANIMATION
========================= */
const fadeElements = document.querySelectorAll(".fade-up");

function checkFade() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
}

/* =========================
   PROJECT IMAGE ZOOM-IN ON SCROLL
========================= */
const projectImages = document.querySelectorAll(".project-img");

function projectImageZoom() {
  projectImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      img.classList.add("show");
    }
  });
}

/* =========================
   BACK TO TOP BUTTON
========================= */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }

  checkFade();
  projectImageZoom();
  animateSkillBars();
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =========================
   CONTACT FORM POPUP
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("closePopup");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    popup.style.display = "flex";
    contactForm.reset();

    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });
});

/* =========================
   SKILL CARD HOVER
========================= */
document.querySelectorAll('.skill-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.15)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)';
  });
});

/* =========================
   SKILL BARS ANIMATION
========================= */
function animateSkillBars() {
  const skillCards = document.querySelectorAll('.skill-card');

  skillCards.forEach(card => {
    const fill = card.querySelector('.skill-bar-fill');
    const percentText = card.querySelector('.skill-percent');
    const rect = card.getBoundingClientRect();

    if (rect.top < window.innerHeight - 50 && !fill.classList.contains('animated')) {
      const targetPercent = Math.min(parseInt(fill.getAttribute('data-percent')), 100);

      fill.style.width = targetPercent + '%';
      fill.classList.add('animated');

      let current = 0;
      const increment = targetPercent / 50;
      const interval = setInterval(() => {
        current += increment;
        if (current >= targetPercent) {
          current = targetPercent;
          clearInterval(interval);
        }
        percentText.textContent = Math.round(current) + '%';
      }, 30);
    }
  });
}

/* =========================
   RESUME MODAL (OPTIONAL)
========================= */
const openResume = document.getElementById("openResume");
const resumeModal = document.getElementById("resumeModal");
const closeResume = document.getElementById("closeResume");

openResume?.addEventListener("click", (e) => {
  e.preventDefault();
  resumeModal.style.display = "flex";
});

closeResume?.addEventListener("click", () => {
  resumeModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === resumeModal) {
    resumeModal.style.display = "none";
  }
});

/* =========================
   INITIALIZE ON LOAD
========================= */
window.addEventListener("load", () => {
  checkFade();
  projectImageZoom();
  animateSkillBars();
});
/* =========================
   VIEW PROJECT BUTTON TOGGLE
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const viewProjectBtns = document.querySelectorAll(".view-project-btn");

  viewProjectBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default link behavior
      const projectCard = btn.closest(".project-card");
      const description = projectCard.querySelector(".project-description");

      description.classList.toggle("active"); // toggle description visibility
    });
  });
});
