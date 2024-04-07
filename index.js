document.addEventListener('contextmenu', event => {
    event.preventDefault();
});



const links = ['img/isaiah_53-3.jpg', 'img/Matthew_28_6.jpg', 'img/Romans_6_23.jpg', 'img/Romans_8_39.jpg'];

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
    const now = new Date();
  
    if (!lastRun || new Date(lastRun).getDate() !== now.getDate() || !lastNum) {
      newVerse();
      localStorage.setItem('lastRun', now);
      localStorage.setItem('Number', randImg2);
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

container.appendChild(img);


function newVerse() {
    var randImg = Math.floor(Math.random() * links.length);
    randImg2 = randImg;
    a.className = "link";
    a.href = links[randImg];
    fileName = links[randImg].replace("img/", '');
    filename2 = fileName;
    a.download = fileName;
    img.src = links[randImg];   
    container.appendChild(img);
}


