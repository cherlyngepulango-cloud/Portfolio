// ✅ MOBILE MENU
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// ✅ FADE ANIMATION
const fadeElements = document.querySelectorAll('.fade-up');

function checkFade() {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkFade);
checkFade();


// ✅ ✅ ✅ FULL LIVE PROJECT MODAL (REPLACES IMAGE MODAL)
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalFrame = document.getElementById("modalFrame"); // ✅ iframe
const openFullProject = document.getElementById("openFullProject");
const closeModal = document.getElementById("closeModal");

const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
  card.addEventListener('click', () => {

    const title = card.dataset.title;
    const description = card.dataset.description;
    const link = card.dataset.link;   // ✅ LIVE PROJECT LINK

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalFrame.src = link;            // ✅ LOAD FULL PROJECT
    openFullProject.href = link;      // ✅ OPEN IN NEW TAB

    modal.style.display = 'flex';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modalFrame.src = ""; // ✅ STOP LOADING WHEN CLOSED
});


// ✅ BACK TO TOP
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
