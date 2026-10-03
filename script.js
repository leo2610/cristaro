// ===============================
// CONFIGURAÇÃO DO WHATSAPP
// Troque pelo número do cliente.
// Formato: 5511999999999
// ===============================
const WHATSAPP_NUMBER = "5511974681250";

document.querySelectorAll(".whatsapp-link").forEach(link => {
  const message = link.dataset.message || "Olá! Gostaria de saber mais sobre os atendimentos.";
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(item => {
  item.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

// Pequena animação de entrada dos cards
const cards = document.querySelectorAll(".service-card, .step");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(25px)";
  card.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(card);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".visible").forEach(el => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  });
});

const style = document.createElement("style");
style.textContent = ".service-card.visible,.step.visible{opacity:1!important;transform:translateY(0)!important}";
document.head.appendChild(style);
