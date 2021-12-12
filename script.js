document.getElementById("0").style.background = "CYAN";
let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");
let imgSourceIndex = 0;
const imageSrcArr = ["http://127.0.0.1:5500/photo.jpg", "http://127.0.0.1:5500/photo2.jpeg", "http://127.0.0.1:5500/photo3.jpeg", "http://127.0.0.1:5500/photo4.jpeg", "http://127.0.0.1:5500/photo5.jpeg"];
$(".fa-play").hide();
rightArrow.addEventListener("click", () => {
    right();
})
leftArrow.addEventListener("click", () => {
    left();
})

function right() {
    let imgsrc = document.getElementById("navPhoto").src;
    for (let i = 0; i < imageSrcArr.length; i++) {
        if (imageSrcArr[i] == imgsrc) {
            if (i == 4) {
                imgSourceIndex = 0;
            } else {
                imgSourceIndex = i + 1;
            }
        }
    }
    document.getElementById("navPhoto").src = imageSrcArr[imgSourceIndex];
    setBulletColor();
}

function setBulletColor() {
    for (let i = 0; i < 5; i++) {
        if (i == imgSourceIndex) {
            document.getElementById(`${i}`).style.background = "CYAN";
        } else {
            document.getElementById(`${i}`).style.background = "white";
        }
    }
}

function left() {
    let imagesrc = document.getElementById("navPhoto").src;
    for (let i = 0; i < imageSrcArr.length; i++) {
        if (imageSrcArr[i] == imagesrc) {
            if (imgSourceIndex == 0) {
                imgSourceIndex = imageSrcArr.length - 1;

            } else {
                imgSourceIndex = i - 1;
            }
        }
    }
    document.getElementById("navPhoto").src = imageSrcArr[imgSourceIndex];
    setBulletColor();
}
let IntervalSet;
let toggleImage = setInterval(() => {
    right();
}, 2000)
IntervalSet = toggleImage;
$(".fa-pause").click(() => {
    $(".fa-pause").fadeToggle(200);
    $(".fa-play").fadeToggle(200);
    clearInterval(IntervalSet);
    IntervalSet = "";
})
$(".fa-play").click(() => {
    $(".fa-pause").fadeToggle(200);
    $(".fa-play").fadeToggle(200);
    let toggleImage = setInterval(() => {
        right();
    }, 2000)
    IntervalSet = toggleImage;
})
