// Mysteria Loading Screen

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) {
            loader.style.opacity = "0";

            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    }, 3000);
});
// Typewriter Effect

const text = "Explore The Unknown";
const heading = document.getElementById("typewriter");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        heading.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

window.addEventListener("load", () => {
    heading.innerHTML = "";
    setTimeout(typeEffect, 3500);
});
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeButton.innerHTML = "🌙";
    }
    else{
        themeButton.innerHTML = "☀️";
    }
});
const exploreBtn = document.getElementById("explore-btn");

exploreBtn.addEventListener("click", function () {
    document.getElementById("ancient").scrollIntoView({
        behavior: "smooth"
    });
});
const music = document.getElementById("bg-music");

window.addEventListener("load", () => {
    document.body.addEventListener("click", () => {
        music.volume = 0.3;
        music.play();
    }, { once: true });
});
const mysteries = [
    {
        title: "🛸 The Wow! Signal",
        text: "In 1977, astronomers detected a powerful radio signal from space that has never been fully explained."
    },
    {
        title: "🏛 The Pyramids of Giza",
        text: "The Great Pyramid is one of the greatest engineering achievements of the ancient world, and its construction still fascinates researchers."
    },
    {
        title: "🌊 The Bermuda Triangle",
        text: "This region in the Atlantic Ocean is famous for stories of unexplained disappearances of ships and aircraft."
    },
    {
        title: "🗿 The Nazca Lines",
        text: "Huge drawings in the Peruvian desert can best be seen from the sky, and their purpose is still debated."
    },
    {
        title: "❄️ The Dyatlov Pass Incident",
        text: "In 1959, nine hikers died under unusual circumstances in Russia's Ural Mountains, and the exact cause remains uncertain."
    }
];

const discoverBtn = document.getElementById("discover-btn");

discoverBtn.addEventListener("click", function () {

    const box = document.getElementById("mystery-box");

    box.style.display = "block";

    document.getElementById("mystery-title").textContent = "🔎 Searching Mystery Archive...";
    document.getElementById("mystery-text").textContent = "Please wait while we find today's mystery...";

    setTimeout(() => {

        const random = Math.floor(Math.random() * mysteries.length);

        document.getElementById("mystery-title").textContent = mysteries[random].title;
        document.getElementById("mystery-text").textContent = mysteries[random].text;

    }, 2000);

});
const options = document.querySelectorAll(".quiz-option");
const result = document.getElementById("quiz-result");

options.forEach(option => {

    option.addEventListener("click", function () {

        options.forEach(btn => btn.disabled = true);

        if(this.dataset.correct === "true"){

            this.classList.add("correct");
            result.innerHTML = "✅ Correct Answer!";

        }else{

            this.classList.add("wrong");

            result.innerHTML = "❌ Wrong Answer!";

            options.forEach(btn => {

                if(btn.dataset.correct === "true"){
                    btn.classList.add("correct");
                }

            });

        }

    });

});
/* Go To Top Button */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});