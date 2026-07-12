// =========================
// MUSIC CONTROL
// =========================
const musicButton = document.getElementById("musicButton");
const music = document.getElementById("music");

let playing = false;

musicButton.addEventListener("click", () => {
    if (!playing) {
        music.play();
        musicButton.innerHTML = "Ⅱ";
        playing = true;
        
        // Efeito de pulso rápido ao dar play
        musicButton.style.transform = "scale(1.12)";
        setTimeout(() => {
            musicButton.style.transform = "scale(1)";
        }, 200);
    } else {
        music.pause();
        musicButton.innerHTML = "♫";
        playing = false;
    }
});

// =========================
// LIGHT FOLLOW MOUSE (Otimizado)
// =========================
const light = document.querySelector(".light");
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let lightX = mouseX;
let lightY = mouseY;

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Animação muito mais fluida usando o motor do navegador
function animateLight() {
    lightX += (mouseX - lightX) * 0.15;
    lightY += (mouseY - lightY) * 0.15;
    
    // O -275 centraliza a luz de 550px perfeitamente no ponteiro
    light.style.transform = `translate(${lightX - 275}px, ${lightY - 275}px)`;
    requestAnimationFrame(animateLight);
}

// Ativa a luz apenas em telas maiores (evita bugs no celular)
if (window.innerWidth > 768) {
    animateLight();
}

// =========================
// REVEAL ON SCROLL
// =========================
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.25 });

reveals.forEach(section => {
    revealObserver.observe(section);
});

// =========================
// HERO FADE ON SCROLL
// =========================
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;
    let opacity = 1 - scroll / 600;

    if (opacity < 0) {
        opacity = 0;
    }

    hero.style.opacity = opacity;
    hero.style.transform = `translateY(${scroll * 0.15}px)`;
});