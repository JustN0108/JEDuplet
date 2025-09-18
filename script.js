// Mobile menu toggle
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

if (menu && menuLinks) {
  menu.addEventListener('click', () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });
}

// FAQ toggle
document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq__question');

  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;

      // Close all other answers
      document.querySelectorAll('.faq__answer').forEach(a => {
        if (a !== answer) a.style.maxHeight = null;
      });

      // Toggle current answer
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
});

// Navbar scroll effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
