document.addEventListener('contextmenu', event => {
    event.preventDefault();
});



const links = ['img/isaiah_53-3.jpg', 'img/Matthew_28_6.jpg', 'img/Romans_6_23.jpg', 'img/Romans_8_39.jpg', 'img/Psalm_56_4.jpg',
'img/Romans_8_35.jpg', 'img/Romans_8_28.jpg', 'img/Isaiah_53_5.jpg', 'img/Romans_15_13.jpg', 'img/Joshua_1_9.jpg', 'img/John_11_25-26.jpg',
'img/Deuteronomy_31_8.jpg', 'img/Colossians_1_28.jpg', 'img/Ecclesiastes.jpg'];

const container = document.getElementById("container");

var img = document.getElementById('img');

var a = document.getElementById("adwnld");

var divdwn = document.getElementById("dwnld");

var fileName;

var randImg;

var filename2;

var randImg2;


function scheduleDailyRun() {
    const lastRun = localStorage.getItem('lastRun');
    const lastNum = localStorage.getItem('Number');
    const usedArr = localStorage.getItem('Array');
    const i = localStorage.getItem('i');
    const now = new Date();
  
    if (!lastRun || new Date(lastRun).getDate() !== now.getDate() || !lastNum || !usedArr) {
      newVerse();
      localStorage.setItem('lastRun', now);
      localStorage.setItem('Number', randImg2);
      localStorage.setItem('i', 0);
      localStorage.setItem('Array', '[]');
    }

    const nextRun = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const delay = nextRun - now;
  
    setTimeout(() => {
      newVerse();
      localStorage.setItem('lastRun', new Date());
      scheduleDailyRun();
    }, delay);
  }
  
 
  scheduleDailyRun();


  const lastImg = localStorage.getItem('Number');
img.src = links[lastImg];
a.href = links[lastImg];
a.download = links[lastImg].replace("img/", '');


var i = localStorage.getItem('i');


container.appendChild(img);
var usedArr;


function newVerse() {
    usedArr = JSON.parse(localStorage.getItem('Array') || "[]");
    var randImg = Math.floor(Math.random() * links.length);
    do {
      randImg = Math.floor(Math.random() * links.length);
    }
    while (usedArr.includes(randImg));
    randImg2 = randImg;
    a.className = "link";
    a.href = links[randImg];
    fileName = links[randImg].replace("img/", '');
    filename2 = fileName;
    a.download = fileName;
    img.src = links[randImg];   
    container.appendChild(img);
    usedArr.push(randImg);
    localStorage.setItem('Array', JSON.stringify(usedArr));

    if (usedArr.length === links.length) {
      localStorage.clear();
      usedArr = [];
    }
}


