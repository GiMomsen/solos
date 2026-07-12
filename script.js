/* =========================
   VARIABLES & RESET
========================= */
:root {
    --bg-dark: #050505;
    --bg-light: #1d1d1d;
    --text-main: #ffffff;
    --text-muted: #8e8e8e;
    --accent-color: #d4af37; /* Tom dourado/girassol escuro para os detalhes */
    --font-serif: 'Cormorant Garamond', serif;
    --font-sans: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-sans);
    background: var(--bg-dark);
    color: var(--text-main);
    overflow-x: hidden;
    opacity: 0;
    animation: fadeInBody 1.5s ease forwards;
}

/* =========================
   AMBIENCE & BACKGROUND
========================= */
.background {
    position: fixed;
    inset: 0;
    background: radial-gradient(circle at top, var(--bg-light) 0%, var(--bg-dark) 70%);
    z-index: -5;
}

.grain {
    position: fixed;
    inset: 0;
    opacity: 0.05;
    background-image: url("https://grainy-gradients.vercel.app/noise.svg");
    pointer-events: none;
    z-index: -4;
    mix-blend-mode: overlay;
}

.light {
    position: fixed;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    /* Luz com um leve tom quente/dourado no centro */
    background: radial-gradient(circle, rgba(212, 175, 55, 0.05), transparent 60%);
    pointer-events: none;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
    z-index: -3;
    mix-blend-mode: screen;
    will-change: transform; /* Otimização de performance */
}

/* =========================
   MUSIC BUTTON
========================= */
#musicButton {
    position: fixed;
    right: 40px;
    top: 40px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.03);
    color: var(--text-main);
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 18px;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;
}

#musicButton:hover {
    transform: scale(1.1);
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: var(--bg-dark);
    box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
}

#musicButton.is-playing {
    animation: pulse 2s infinite;
}

/* =========================
   TYPOGRAPHY & LAYOUT
========================= */
.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10vw;
}

.hero-content {
    max-width: 900px;
}

.small {
    color: var(--accent-color);
    letter-spacing: 6px;
    text-transform: uppercase;
    font-size: 12px;
    margin-bottom: 30px;
    animation: fadeUp 1.5s ease 0.5s forwards;
    opacity: 0;
}

h1 {
    font-family: var(--font-serif);
    font-size: clamp(3rem, 7vw, 6.5rem);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -2px;
    animation: fadeUp 1.5s ease 0.8s forwards;
    opacity: 0;
    transition: color 0.4s ease;
}

.scroll {
    display: inline-block;
    margin-top: 80px;
    color: var(--text-muted);
    letter-spacing: 4px;
    text-transform: uppercase;
    font-size: 11px;
    opacity: 0;
    animation: fadeUp 1.5s ease 1.2s forwards, float 3s ease-in-out infinite 1.5s;
}

.section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 10vw;
    position: relative;
}

.text {
    max-width: 800px;
}

.number {
    color: var(--accent-color);
    font-size: 13px;
    letter-spacing: 4px;
    margin-bottom: 20px;
}

h2 {
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 5vw, 5rem);
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 25px;
    font-style: italic;
    transition: all 0.4s ease;
}

.text p {
    color: var(--text-muted);
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    line-height: 1.6;
    max-width: 500px;
    transition: color 0.4s ease;
}

h1:hover, h2:hover {
    color: var(--text-main);
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
}

.text p:hover {
    color: var(--text-main);
}

/* =========================
   ENDING SECTION
========================= */
.ending {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.line {
    width: 1px;
    height: 100px;
    background: linear-gradient(to bottom, transparent, var(--accent-color), transparent);
    margin-bottom: 40px;
}

.timestamp {
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--text-muted);
    letter-spacing: 3px;
    margin-bottom: 40px;
    font-size: 14px;
}

.progress-bar {
    width: 150px;
    height: 1px;
    background: rgba(255, 255, 255, 0.2);
    position: relative;
}

.progress-bar::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 0%;
    background: var(--accent-color);
    transition: width 0.5s ease;
}

/* =========================
   ANIMATIONS & EFFECTS
========================= */
.reveal {
    opacity: 0;
    transform: translateY(60px);
    transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

@keyframes fadeInBody { to { opacity: 1; } }
@keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); filter: blur(5px); }
    to { opacity: 1; transform: translateY(0); filter: blur(0); }
}
@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
}
@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); }
    70% { box-shadow: 0 0 0 15px rgba(212, 175, 55, 0); }
    100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
}

/* =========================
   MEDIA QUERIES (MOBILE)
========================= */
@media(max-width: 768px) {
    #musicButton { right: 20px; top: 20px; width: 45px; height: 45px; }
    .hero { padding: 0 8vw; }
    .section { padding: 0 8vw; }
    .scroll { margin-top: 50px; }
    .line { height: 60px; }
    .light { display: none; } /* Desativa a luz no celular por performance */
}