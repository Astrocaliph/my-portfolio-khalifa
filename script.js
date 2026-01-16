/* =========================================
   Hamburger Menu
========================================= */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* =========================================
   Section Arrows Smooth Scroll
========================================= */
document.querySelectorAll(".arrow").forEach(arrow => {
  arrow.addEventListener("click", () => {
    const targetId = arrow.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

/* =========================================
   Project Filtering
========================================= */
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    projectCards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

/* =========================================
   Project Modal
========================================= */
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");
const modalLinks = document.getElementById("modal-links");
const closeModal = document.querySelector(".close");

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    modal.style.display = "block";
    modalTitle.textContent = card.querySelector(".project-title").textContent;
    modalImg.src = card.querySelector(".project-img").src;
    modalDesc.textContent = card.querySelector(".project-desc").textContent;
    modalLinks.innerHTML = card.querySelector(".project-btns").innerHTML;
  });
});

closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => { if (e.target == modal) modal.style.display = "none"; };

/* =========================================
   Contact Form (EmailJS)
========================================= */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_tqikysv', 'template_efkx99i', this)
      .then(function() {
        formMessage.style.display = 'block';
        formMessage.style.color = 'green';
        formMessage.textContent = "Your message has been sent!";
        contactForm.reset();

        // Auto-hide after 4 seconds
        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 4000);

      }, function(error) {
        formMessage.style.display = 'block';
        formMessage.style.color = 'red';
        formMessage.textContent = "Oops! Something went wrong. Try again.";

        setTimeout(() => {
          formMessage.style.display = 'none';
        }, 4000);

        console.log('EmailJS Error:', error);
      });
  });
}