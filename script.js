document.getElementById("0").style.background = "CYAN";
let rightArrow = document.getElementById("rightArrow");
let leftArrow = document.getElementById("leftArrow");
let imgSourceIndex = 0;
const imageSrcArr = ["https://ruchika-sehgal.github.io/Ruchika-Sehgal-Azure-Project-HealthBot/photo.jpg", "https://ruchika-sehgal.github.io/Ruchika-Sehgal-Azure-Project-HealthBot/photo2.jpeg", "https://ruchika-sehgal.github.io/Ruchika-Sehgal-Azure-Project-HealthBot/photo3.jpeg", "https://ruchika-sehgal.github.io/Ruchika-Sehgal-Azure-Project-HealthBot/photo4.jpeg", "https://ruchika-sehgal.github.io/Ruchika-Sehgal-Azure-Project-HealthBot/photo5.jpeg"];
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

// var xhr = new XMLHttpRequest();
// xhr.open('GET', "https://webchat.botframework.com/api/tokens", true);
// xhr.setRequestHeader('Authorization', 'BotConnector ' + 'R8hLnaodo8w.FL1miT0qXMIpR7OKP8TOoD8-U3XYGeKGbV2l7WG2Ci4');
// xhr.send();
// xhr.onreadystatechange = processRequest;

// function processRequest(e) {
//     let iframe = document.createElement('iframe');
//     console.log(xhr.response);
//     iframe.src = `https://webchat.botframework.com/embed/appointment_booker?s=${xhr.response}`
//     document.body.append(iframe)
// }
let randomNumber = Math.floor(Math.random() * 400000) + 100;
window.WebChat.renderWebChat(
    {
       directLine: window.WebChat.createDirectLine({
          token: 'z7WqHiZm9p4.xWv23Ajbb8usObBo_CT6L115WJnXVeaAGaKiD0ZwhPU'
       }),
       userID: randomNumber
    },
    document.getElementById('web-chat')

 );
 $(".fa-comment").click(()=>{
     $(".Body").fadeOut(1000);
    $(".chat").css({
        "width":"100vw",
        
        "background-color":"#fff",
    })
    $("#web-chat").css({
        "display":"flex"
    })
    $(".chat").show();
    $(".chatIcon").fadeOut(1000);
})
$(".cross").click(()=>{
    $(".Body").fadeIn(1000);
   $(".chat").css({
       "width":"100vw",
       "height":"90vh",
       "background-color":"#fff",
   })
   $("#web-chat").css({
    "display":"none"
})
   $(".chat").fadeOut(1000);
   $(".chatIcon").fadeIn(1000);
})