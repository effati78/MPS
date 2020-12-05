document.addEventListener('DOMContentLoaded', function () {

    Typed.new("#typed", {
        stringsElement: document.getElementById('typed-strings'),
        typeSpeed: 100,
        backDelay: 500,
        loop: true,
        contentType: 'html',
        loopCount: null,
        callback: function () {
            foo();
        },
        resetCallback: function () {
            newTyped();
        }
    });

    var resetElement = document.querySelector('.reset');
    if (resetElement) {
        resetElement.addEventListener('click', function () {
            document.getElementById('typed')._typed.reset();
        });
    }

});

function newTyped() {
    /* A new typed object */
}

function foo() {
    console.log("Callback");
}


/* ---- */

var li_about = document.querySelector("#li_about");
var li_skills = document.querySelector("#li_skills");
var about = document.querySelector(".about");
var skills = document.querySelector(".skills");
var music = document.querySelector(".music .menu-ul-li-icon");
var musicDiv = document.querySelector(".music");
var audioTemp = false;
var setting_icon = document.querySelector(".setting-icon");
var setting = document.querySelector(".setting");
var audio = new Audio('music/1.mp3');

audio.play();

setting_icon.addEventListener("click", function () {
    setting.style.left = (setting.style.left == "0px") ? "-205px" : "0px";
});

function Color(x) {
    let color = x.getAttribute('data-color');
    document.querySelector(":root").style.setProperty('--color-third', color);
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

li_about.addEventListener("click", function (e) {
    e.preventDefault();
    about.style.left = (about.style.left == "0px") ? "-105vw" : "0px";
    li_about.style.color = (li_about.style.color == "var(--color-third)") ? "var(--color-first)" : "var(--color-third)";
});

li_skills.addEventListener("click", function (e) {
    e.preventDefault();
    skills.style.left = (skills.style.left == "0px") ? "-105vw" : "0px";
    li_skills.style.color = (li_skills.style.color == "var(--color-third)") ? "var(--color-first)" : "var(--color-third)";
});

musicDiv.addEventListener("click", function (e) {
    e.preventDefault();
    if(audioTemp){
        playAudio();
        music.classList.add("audio");
        music.innerHTML = '<i class="fas fa-compact-disc"></i>';
        musicDiv.style.color = 'var(--color-third)';
        audioTemp = false;
    }else{
        pauseAudio();
        music.classList.remove("audio");
        music.innerHTML = '<i class="fas fa-play"></i>';
        musicDiv.style.color = '#fff';
        audioTemp = true;
    }
});