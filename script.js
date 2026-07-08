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
محسن عزیزم... ❤️

شاید این فقط یه صفحه روی گوشیت باشه...
ولی برای من،
هر خطش یه ذره ذوق بود،
هر عکسش یه خاطره،
و هر ثانیه‌ای که براش وقت گذاشتم،
فقط به این فکر می‌کردم که موقع دیدنش لبخند بزنی.

امروز روز تولدته...
روزی که دنیا یکی از قشنگ‌ترین آدم‌هاش رو هدیه گرفت.
و من، خوش‌شانس‌ترین آدم دنیا شدم که یه جایی از مسیر زندگیم،
به تو رسیدم.

ممنونم برای همه‌ی خنده‌ها،
برای همه‌ی دلگرمی‌هات،
برای تمام لحظه‌هایی که کنارم بودی،
و حتی برای روزهایی که از دور،
فقط بودنت آرومم می‌کرد.

آرزو می‌کنم هر چیزی که ته دلت آرزوش رو داری،
یه روز با قشنگ‌ترین شکل ممکن برات اتفاق بیفته.
دلت همیشه آروم باشه،
چشمهات همیشه بخندن
و هیچ‌وقت امید از قلبت دور نشه.

این هدیه شاید نتونه اندازه‌ی ارزشی که برام داری باشه...
ولی مطمئن باش،
با تمام عشق ساخته شده.

تولدت مبارک،
عشق قشنگ من... ❤️

تا وقتی که قلبم می‌تپه،
یه گوشه‌ش همیشه برای توئه...

با تمام عشق
مهدیس 🌹
`;
const introTexts = [
    "سلام عشقِ قشنگم... ❤️",
    "اگر الان این صفحه روبه‌روته، یعنی بالاخره لحظه‌ای که مدت‌ها منتظرش بودم رسیده...",
    "از مدت‌ها قبل دلم می‌خواست برای تولدت یه هدیه بسازم که فقط مال خودمون باشه...",
    "هدیه‌ای که هر صفحه‌ش یه تیکه از خاطره‌هامون رو زنده کنه...",
    "می‌خوام امروز، برای چند دقیقه، دوباره با هم تمام اون لحظه‌های قشنگ رو زندگی کنیم...",
    "تولدت مبارک محسنِ دوست‌داشتنیِ من... ❤️",
    "حاضری دستمو بگیری و سفرمون رو شروع کنیم؟ ✨"
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

        passwordError.innerHTML="Ø±Ù…Ø² Ø§Ø´ØªØ¨Ø§Ù‡Ù‡... ÛŒÙ‡ Ø®Ø§Ø·Ø±Ù‡ Ø¢Ø´Ù†Ø§ØªØ± Ø±Ùˆ Ø§Ù…ØªØ­Ø§Ù† Ú©Ù† ðŸ˜‰";

    }

}
const photos=[

{
image:"images/1.jpg",

title:"Ø§ÙˆÙ„ÛŒÙ† Ù‚Ø±Ø§Ø±",

text:"Ø¨Ø¹Ø¶ÛŒ Ø±ÙˆØ²Ù‡Ø§ ÙÙ‚Ø· ØªÙˆÛŒ ØªÙ‚ÙˆÛŒÙ… Ø«Ø¨Øª Ù…ÛŒØ´Ù†... Ø§Ù…Ø§ Ø¨Ø¹Ø¶ÛŒ Ø±ÙˆØ²Ù‡Ø§ Ù…Ø³ÛŒØ± Ø²Ù†Ø¯Ú¯ÛŒ Ø¢Ø¯Ù… Ø±Ùˆ Ø¹ÙˆØ¶ Ù…ÛŒâ€ŒÚ©Ù†Ù†... Ø§ÙˆÙ† Ø±ÙˆØ² Ø¨Ø±Ø§ÛŒ Ù…Ù† Ø§Ø² Ù‡Ù…ÙˆÙ† Ø±ÙˆØ²Ù‡Ø§ Ø¨ÙˆØ¯. â¤ï¸"
},

{
image:"images/2.jpg",

title:"پسر خوشگله کنار دریا",

text:"بعضی وقتا فقط نگات می‌کنم و با خودم میگم: عجب پسر خوشگلی گیرم اومده! 😌❤️"
},

{
image:"images/3.jpg",

title:"توچال",

text:"میگن زمستون فصل سرماست... ولی برای من، زمستونی که کنار تو گذشت، گرم‌ترین خاطره‌ایه که توی دلمه. ❄️❤️"
},

{
image:"images/4.jpg",

title:"طبیعت",

text:"اگه قرار باشه یه خاطره رو بارها و بارها زندگی کنم، بدون شک یکی از همون لحظه‌هاییه که کنار تو، وسط این همه سبزی و آرامش بودم. 🌱🤍"},

{
image:"images/5.jpg",

title:"رز آبی",

text:"این رز آبی هنوز یادم میندازه که بعضی لحظه‌ها، هرچقدر هم کوتاه باشن، تا همیشه توی قلب آدم می‌مونن. 💙"}

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


const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    star.style.animationDelay=Math.random()*5+"s";

    star.style.width=(2+Math.random()*3)+"px";

    star.style.height=star.style.width;

    stars.appendChild(star);

}
finishBtn.onclick=function(){

    letterScreen.classList.remove("active");

    finalScreen.classList.add("active");

    const colors=[

        "#FFD700",
        "#ff4d6d",
        "#7B68EE",
        "#00E5FF",
        "#ffffff"

    ];

    for(let i=0;i<180;i++){

        const c=document.createElement("div");

        c.className="confetti";

        c.style.left=Math.random()*100+"vw";

        c.style.background=colors[Math.floor(Math.random()*colors.length)];

        c.style.animationDuration=(3+Math.random()*3)+"s";

        c.style.width=(6+Math.random()*8)+"px";

        c.style.height=(10+Math.random()*10)+"px";

        document.body.appendChild(c);

        setTimeout(()=>{

            c.remove();

        },7000);

    }
	

}