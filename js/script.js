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
var loading = document.querySelector('.loading');
var sections = document.getElementsByClassName('section');
var items = document.getElementsByClassName('item');
var home_item = document.querySelector('.home-item');
var music = document.querySelector(".music .menu-ul-li-icon");
var musicDiv = document.querySelector(".music");
var audioTemp = false;
var setting_icon = document.querySelector(".setting-icon");
var setting = document.querySelector(".setting");
var audio = new Audio('music/1.mp3');
var colorDiv = document.querySelector('.color');
var colAnimate = document.querySelector('.color-animation');

// var colorTheme = getComputedStyle(document.documentElement).getPropertyValue('--color-third');
// audio.play();

function loaded() {
    loading.style.display = 'none';
}

setting_icon.addEventListener("click", function () {
    setting.style.left = (setting.style.left == "0px") ? "-205px" : "0px";
});

function colorAnimation() {
    colorDiv.style.display = 'flex';
    colAnimate.style.animation = 'color 0.5s linear';
    setTimeout(function () {
        colorDiv.style.display = 'none';
    }, 500);
}

function Color(x) {
    let color = x.getAttribute('data-color');
    localStorage.setItem('theme', color);
    document.querySelector(":root").style.setProperty('--color-third', color);
    setting.style.left = "-205px";
    colorAnimation();
}

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}

for (let x = 0; x < items.length; x++) {
    items[x].addEventListener('click', function (e) {
        e.preventDefault();
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.left = '-105vw';
            items[i].style.color = "var(--color-first)";
        }
        home_item.style.color = "var(--color-first)";
        var attribute = this.getAttribute('data-item');
        document.querySelector(`.${attribute}`).style.left = '0px';
        this.style.color = "var(--color-third)";
    });
}

home_item.addEventListener('click', function (e) {
    e.preventDefault();
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.left = '-105vw';
        items[i].style.color = "var(--color-first)";
    }
    home_item.style.color = "var(--color-third)";
});

musicDiv.addEventListener("click", function (e) {
    e.preventDefault();
    if (audioTemp) {
        playAudio();
        music.classList.add("audio");
        music.innerHTML = '<i class="fas fa-compact-disc"></i>';
        musicDiv.style.color = 'var(--color-third)';
        audioTemp = false;
    } else {
        pauseAudio();
        music.classList.remove("audio");
        music.innerHTML = '<i class="fas fa-play"></i>';
        musicDiv.style.color = '#fff';
        audioTemp = true;
    }
});