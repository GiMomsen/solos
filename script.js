// =========================
// PLAY MUSIC
// =========================

const playButton = document.getElementById("playButton");
const music = document.getElementById("bgMusic");

playButton.addEventListener("click", () => {

    music.play();

    playButton.innerHTML = "Playing...";

    playButton.disabled = true;

});


// =========================
// CUSTOM CURSOR
// =========================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


document.querySelectorAll("button,.card,.hover-glow").forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.classList.add("active");

    });

    item.addEventListener("mouseleave",()=>{

        cursor.classList.remove("active");

    });

});


// =========================
// SCROLL REVEAL
// =========================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.2});

document.querySelectorAll(".card,.glass,.final-box").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


// =========================
// 3D CARD EFFECT
// =========================

document.querySelectorAll(".hover-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width)-0.5)*18;
        const rotateX = ((y / rect.height)-0.5)*-18;

        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="rotateX(0) rotateY(0)";

    });

});


// =========================
// PARTICLES
// =========================

const particles = document.getElementById("particles");

for(let i=0;i<90;i++){

    const dot = document.createElement("span");

    dot.classList.add("particle");

    dot.style.left=Math.random()*100+"vw";

    dot.style.top=Math.random()*100+"vh";

    dot.style.animationDuration=(6+Math.random()*12)+"s";

    dot.style.animationDelay=Math.random()*5+"s";

    dot.style.width=(2+Math.random()*4)+"px";

    dot.style.height=dot.style.width;

    particles.appendChild(dot);

}


// =========================
// PARALLAX
// =========================

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/60;

    const y=(window.innerHeight/2-e.clientY)/60;

    document.querySelectorAll(".glass,.card").forEach(el=>{

        el.style.transform += ` translate(${x}px,${y}px)`;

    });

});


// =========================
// TYPE EFFECT
// =========================

const title=document.querySelector(".title");

const text=title.innerHTML;

title.innerHTML="";

let i=0;

function typing(){

    if(i<text.length){

        title.innerHTML+=text.charAt(i);

        i++;

        setTimeout(typing,35);

    }

}

typing();


// =========================
// GLOW EFFECT
// =========================

document.querySelectorAll(".hover-glow").forEach(item=>{

    item.addEventListener("mousemove",(e)=>{

        const rect=item.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        item.style.background=`radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.35),
        transparent 65%)`;

    });

    item.addEventListener("mouseleave",()=>{

        item.style.background="transparent";

    });

});


// =========================
// SMOOTH APPEAR
// =========================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});