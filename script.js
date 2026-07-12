// =========================
// MUSIC CONTROL
// =========================

const musicButton = document.getElementById("musicButton");
const music = document.getElementById("music");

let playing = false;


musicButton.addEventListener("click", () => {

    if(!playing){

        music.play();

        musicButton.innerHTML = "Ⅱ";

        playing = true;

    }else{

        music.pause();

        musicButton.innerHTML = "♫";

        playing = false;

    }

});


// =========================
// LIGHT FOLLOW MOUSE
// =========================

const light = document.querySelector(".light");


document.addEventListener("mousemove",(event)=>{

    const x = event.clientX;
    const y = event.clientY;


    light.style.transform = `
        translate(
        ${x - 275}px,
        ${y - 275}px
        )
    `;

});


// =========================
// REVEAL ON SCROLL
// =========================

const reveals = document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }


    });


},
{
    threshold:0.25
});


reveals.forEach(section=>{

    revealObserver.observe(section);

});


// =========================
// HERO FADE ON SCROLL
// =========================

const hero = document.querySelector(".hero");


window.addEventListener("scroll",()=>{


    let scroll =
    window.scrollY;


    let opacity =
    1 - scroll / 600;


    if(opacity < 0){

        opacity = 0;

    }


    hero.style.opacity = opacity;


    hero.style.transform =
    `
    translateY(${scroll * 0.15}px)
    `;


});


// =========================
// SMOOTH SECTION TRANSITION
// =========================

const sections =
document.querySelectorAll(
".section, .ending"
);


sections.forEach(section=>{


    section.style.transition =
    "opacity 1s ease";


});


// =========================
// MUSIC BUTTON PULSE
// =========================

setInterval(()=>{


    if(playing){


        musicButton.style.transform =
        "scale(1.08)";


        setTimeout(()=>{


            musicButton.style.transform =
            "scale(1)";


        },400);


    }


},1200);