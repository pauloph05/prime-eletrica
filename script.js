// ===== Config =====
const PHONE_E164 = "5513991653227"; // +55 13 99165-3227
const DEFAULT_MSG = "Olá! Vim pelo site da Prime Elétrica. Pode me passar um orçamento?";

// Monta link do WhatsApp
function waLink(message) {
  const text = encodeURIComponent(message || DEFAULT_MSG);
  return `https://wa.me/${PHONE_E164}?text=${text}`;
}

// ===== Menu mobile =====
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("isOpen");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Fecha o menu ao clicar em um link
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("isOpen");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ===== CTA WhatsApp (topo/hero/dicas/contato) =====
const idsWhats = [
  "ctaTopo",
  "btnWhatsHero",
  "btnWhatsAtendimento",
  "btnWhatsDicas",
  "btnWhatsRodape",
  "linkWhatsContato"
];

idsWhats.forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = waLink(DEFAULT_MSG);
});

// ===== Serviços que vão pro WhatsApp com mensagem pronta =====
document.querySelectorAll(".wa-service").forEach(card => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    const service = card.getAttribute("data-service") || "Serviço";
    const msg = `Olá! Vim pelo site da Prime Elétrica. Quero orçamento para: ${service}. Cidade/bairro: ____`;
    window.open(waLink(msg), "_blank");
  });
});

// ===== Scroll suave para âncoras =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", (e) => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});