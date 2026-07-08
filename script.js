const typing = document.getElementById("typing");
const startBtn = document.getElementById("startBtn");
const doors = document.getElementById("doors");
const welcomeScreen = document.getElementById("welcomeScreen");
const albumScreen=document.getElementById("albumScreen");

const albumImage=document.getElementById("albumImage");

const photoTitle=document.getElementById("photoTitle");

const photoText=document.getElementById("photoText");

const nextPhoto=document.getElementById("nextPhoto");
const letterScreen=document.getElementById("letterScreen");
const openLetter=document.getElementById("openLetter");
const bgMusic = document.getElementById("bgMusic");
const intro = document.getElementById("intro");
const passwordScreen = document.getElementById("passwordScreen");
const passwordInput = document.getElementById("passwordInput");
const checkPassword = document.getElementById("checkPassword");
const passwordError = document.getElementById("passwordError");
const letterPaper = document.getElementById("letterPaper");
const letterText = document.getElementById("letterText");
const finishBtn = document.getElementById("finishBtn");
const finalScreen = document.getElementById("finalScreen");

const fullLetter = `
محسن عزیزم...

امروز که وارد ۲۲ سالگی میشی...
...
با تمام عشق
مهدیس ❤️
`;

const introTexts = [
    "سلام محسن...",
    "اگر این صفحه را باز کردی...",
    "یعنی یک نفر، مدت‌ها برای این لحظه ذوق داشته...",
    "امروز فقط یک روز معمولی نیست...",
    "تولدت مبارک ❤️",
    "حاضری سفرمون رو شروع کنیم؟"
];

let textIndex = 0;
let charIndex = 0;

startBtn.style.display = "none";

function typeWriter() {

    if (textIndex >= introTexts.length) {

        startBtn.style.display = "inline-block";

        setTimeout(() => {
            startBtn.style.opacity = "1";
        }, 100);

        return;
    }

    const current = introTexts[textIndex];

    if (charIndex < current.length) {

        typing.textContent += current.charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter, 70);

    } else {

        setTimeout(() => {

            typing.textContent = "";

            charIndex = 0;

            textIndex++;

            typeWriter();

        }, 1800);

    }

}

window.onload = () => {

    setTimeout(typeWriter,1000);

};

function goToPassword(){

    bgMusic.play().catch(()=>{});

    intro.classList.remove("active");

    setTimeout(()=>{

        passwordScreen.classList.add("active");

    },600);

}


checkPassword.onclick=function(){

    if(passwordInput.value==="1384"){

        passwordError.innerHTML="";

        doors.classList.add("open");

setTimeout(()=>{

    doors.classList.add("hide");

    passwordScreen.classList.remove("active");

    welcomeScreen.classList.add("active");

setTimeout(()=>{

    welcomeScreen.classList.remove("active");

    albumScreen.classList.add("active");

},3000);

},1800);

    }

    else{

        passwordError.innerHTML="رمز اشتباهه... یه خاطره آشناتر رو امتحان کن 😉";

    }

}
const photos=[

{
image:"images/1.jpg",

title:"اولین قرار",

text:"بعضی روزها فقط توی تقویم ثبت میشن... اما بعضی روزها مسیر زندگی آدم رو عوض می‌کنن... اون روز برای من از همون روزها بود. ❤️"
},

{
image:"images/2.jpg",

title:"کنار دریا",

text:"همیشه فکر می‌کردم دریا قشنگ‌ترین منظره دنیاست... تا وقتی که تو رو کنار دریا دیدم..."
},

{
image:"images/3.jpg",

title:"توچال",

text:"نه سرمای زمستون یادم مونده... نه برف... فقط یادمه کنار تو بودم."
},

{
image:"images/4.jpg",

title:"طبیعت",

text:"کنار تو انگار زمان آروم‌تر حرکت می‌کنه..."
},

{
image:"images/5.jpg",

title:"آخرین دیدار",

text:"اون رز آبی، هر بار یادم میندازه بعضی آدم‌ها واقعاً تکرارنشدنی‌ان. 💙"
}

];

let currentPhoto=0;
nextPhoto.onclick = function(){

    document.querySelector(".polaroid").classList.add("fadeOut");

    setTimeout(()=>{

        currentPhoto++;

        if(currentPhoto>=photos.length){

    albumScreen.classList.remove("active");

    letterScreen.classList.add("active");

    return;

}

        albumImage.src=photos[currentPhoto].image;

        photoTitle.innerHTML=photos[currentPhoto].title;

        photoText.innerHTML=photos[currentPhoto].text;

        const card=document.querySelector(".polaroid");

        card.classList.remove("fadeOut");

        card.classList.add("fadeIn");

        setTimeout(()=>{

            card.classList.remove("fadeIn");

        },500);

    },350);

}
openLetter.onclick = function(){

    document.getElementById("envelope").style.display="none";

    openLetter.style.display="none";

    letterPaper.style.display="block";
	letterText.innerHTML = "";

    let i=0;

    function typeLetter(){

       if(i < fullLetter.length){

    letterText.innerHTML += fullLetter.charAt(i);

    i++;

    setTimeout(typeLetter,35);

}
else{

    finishBtn.style.display = "inline-block";

}

    }

    typeLetter();

}
finishBtn.onclick=function(){

    letterScreen.classList.remove("active");

    finalScreen.classList.add("active");

    setInterval(createHeart,350);

}

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

   const hearts = [
    "&#10084;",   
    "&#129293;",  
    "&#128155;"   
];

heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*28)+"px";

    heart.style.animationDuration=(5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,500);