document.addEventListener('contextmenu', function(event){
    event.preventDefault();
});

document.addEventListener("keydown", function(event){
  if (event.ctrlKey === true){
    event.preventDefault();
  }
})



const links = [
  {B: 'img/isaiah_53-3.jpg', T: "Isaiah 53:3", H: "Isaiah 53", V: "<sup>1</sup>Who has believed our message and to whom has the arm of the Lord been revealed? <sup>2</sup>He grew up before him like a tender shoot, and like a root out of dry ground. He had no beauty or majesty to attract us to him, nothing in his appearance that we should desire him. <mark><sup>3</sup>He was despised and rejected by mankind, a man of suffering, and familiar with pain. Like one from whom people hide their faces he was despised, and we held him in low esteem. </mark><sup>4</sup>Surely he took up our pain and bore our suffering, yet we considered him punished by God, stricken by him, and afflicted.", L: "https://www.bibleserver.com/KJV/Isaiah53"}, 
  {B:'img/Matthew_28_6.jpg', T: "Matthew 28:6", H: "Matthew 28", V: "<sup>3</sup>His appearance was like lightning, and his clothes were white as snow. <sup>4</sup>The guards were so afraid of him that they shook and became like dead men. <sup>5</sup>The angel said to the women, &ldquo;Do not be afraid, for I know that you are looking for Jesus, who was crucified. <sup>6</sup>He is not here; he has risen, just as he said. Come and see the place where he lay. <sup>7</sup>Then go quickly and tell his disciples: <mark>&ldquo;He has risen from the dead and is going ahead of you into Galilee</mark>. There you will see him.&rdquo; Now I have told you.", L: "https://www.bibleserver.com/NIV/Matthew28"},
  {B:'img/Romans_6_23.jpg', T: "Romans 6:23", H: "Romans 6", V: "<sup>20/sup>When you were slaves to sin, you were free from the control of righteousness. <sup>21</sup>What benefit did you reap at that time from the things you are now ashamed of? Those things result in death! <sup>22</sup>But now that you have been set free from sin and have become slaves of God, the benefit you reap leads to holiness, and the result is eternal life. <mark><sup>23</sup>For the wages of sin is death, but the gift of God is eternal life in[2] Christ Jesus our Lord.</mark>", L: "https://www.bibleserver.com/NIV/Romans6%3A23"}, 
  {B:'img/Romans_8_39.jpg', T: "Romans 8:39", H: "Romans 8", V: "<sup>36</sup>As it is written: &ldquo;For your sake we face death all day long; we are considered as sheep to be slaughtered.&rdquo; <sup>37</sup>No, in all these things we are more than conquerors through him who loved us. <sup>38</sup>For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, <mark><sup>39</sup>neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.</mark>", L: "https://www.bibleserver.com/NIV/Romans8%3A39"}, 
  {B:'img/Psalm_56_4.jpg', T: "Psalm 56:4", H: "Psalm 56", V: "<sup>2</sup>My adversaries pursue me all day long; in their pride many are attacking me. <sup>3</sup>When I am afraid, I put my trust in you. <mark><sup>4</sup>In God, whose word I praise - in God I trust and am not afraid. What can mere mortals do to me? </mark><sup>5</sup>All day long they twist my words; all their schemes are for my ruin.", L: "https://www.bibleserver.com/NIV/Psalm56%3A4"},
  {B:'img/Romans_8_35.jpg', T: "Romans 8:35", H: "Romans 8", V: "<mark><sup>35</sup>Who shall separate us from the love of Christ? Shall trouble or hardship or persecution or famine or nakedness or danger or sword? </mark><sup>36</sup>As it is written: &ldquo;For your sake we face death all day long; we are considered as sheep to be slaughtered.&rdquo;", L: "https://www.bibleserver.com/NIV/Romans8%3A35"}, 
  {B:'img/Romans_8_28.jpg', T: "Romans 8:28", H: "Romans 8", V: "<sup>27</sup>And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God's people in accordance with the will of God. <mark><sup>28</sup>And we know that in all things God works for the good of those who love him, who have been called according to his purpose.</mark>", L: "https://www.bibleserver.com/NIV/Romans8%3A28"}, 
  {B:'img/Isaiah_53_5.jpg', T: "Isaiah:53:5", H: "Isaiah 53", V: "<sup>4</sup>Surely he took up our pain and bore our suffering, yet we considered him punished by God, stricken by him, and afflicted. <mark><sup>5</sup>But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed. </mark><sup>6</sup>We all, like sheep, have gone astray, each of us has turned to our own way; and the Lord has laid on him the iniquity of us all.", L: "https://www.bibleserver.com/NIV/Isaiah53%3A5"}, 
  {B:'img/Romans_15_13.jpg', T: "Romans 15:13", H: "Romans 15", V: "<sup>12</sup>And again, Isaiah says, &ldquo;The Root of Jesse will spring up, one who will arise to rule over the nations; in him the Gentiles will hope.&rdquo; <mark><sup>13</sup>May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.</mark>", L: "https://www.bibleserver.com/NIV/Romans15%3A13"}, 
  {B:'img/Joshua_1_9.jpg', T: "Joshua 1:9", H: "Joshua 1", V: "<sup>8</sup>Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful. <mark><sup>9</sup>Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.</mark>", L: "https://www.bibleserver.com/NIV/Joshua1%3A9"}, 
  {B:'img/John_11_25-26.jpg', T: "John 11:25-26", H: "John 11", V: "<sup>24</sup>Martha answered, &ldquo;I know he will rise again in the resurrection at the last day.&rdquo; <mark><sup>25</sup>Jesus said to her, &ldquo;I am the resurrection and the life. The one who believes in me will live, even though they die; </mark><sup>26</sup>and whoever lives by believing in me will never die. Do you believe this?&rdquo; <sup>27</sup> &ldquo;Yes, Lord,&rdquo; she replied, &ldquo;I believe that you are the Messiah, the Son of God, who is to come into the world.&rdquo;", L: "https://www.bibleserver.com/NIV/John11%3A25"},
  {B:'img/Deuteronomy_31_8.jpg', T: "Deuteronomy 31:8", H: "Deuteronomy 31", V: "<sup>7</sup>Then Moses summoned Joshua and said to him in the presence of all Israel, &ldquo;Be strong and courageous, for you must go with this people into the land that the Lord swore to their ancestors to give them, and you must divide it among them as their inheritance. <mark><sup>8</sup>The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.&rdquo;</mark>", L: "https://www.bibleserver.com/NIV/Deuteronomy31%3A8"}, 
  {B:'img/Colossians_1_28.jpg', T: "Colossians 1:28", H: "Colossians 1", V: "<sup>26</sup> the mystery that has been kept hidden for ages and generations, but is now disclosed to the Lord's people. <sup>27</sup> To them God has chosen to make known among the Gentiles the glorious riches of this mystery, which is Christ in you, the hope of glory. <mark><sup>28</sup>He is the one we proclaim, admonishing and teaching everyone with all wisdom, so that we may present everyone fully mature in Christ. </mark><sup>29</sup>To this end I strenuously contend with all the energy Christ so powerfully works in me.", L: "https://www.bibleserver.com/NIV/Colossians1%3A28"}, 
  {B:'img/Ecclesiastes_3_1.jpg', T: "Ecclesiastes 3:1", H: "Ecclesiastes 3", V: "<mark><sup>1</sup>There is a time for everything, and a season for every activity under the heavens: </mark><sup>2</sup>a time to be born and a time to die, a time to plant and a time to uproot", L: "https://www.bibleserver.com/NIV/Ecclesiastes3%3A1"},
  {B: 'img/Corinthians_1_4.jpg', T: '2 Corinthians 1:4', H:'2 Corinthians 1', V: '<sup>3</sup>Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, <mark><sup>4</sup>who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.<mark> <sup>5</sup>For just as we share abundantly in the sufferings of Christ, so also our comfort abounds through Christ.', L: 'https://www.bibleserver.com/NIV/2%20Corinthians1%3A4'},
  {B: 'img/Psalm_118_24.jpg', T: 'Psalm 118:24', H:'Psalm 118', V: '<sup>22</sup>The stone the builders rejected has become the cornerstone; <sup>23</sup>the Lord has done this, and it is marvellous in our eyes. <mark><sup>24</sup>The Lord has done it this very day; let us rejoice today and be glad.</mark>', L: 'https://www.bibleserver.com/NIV/Psalm118%3A24'},
  {B: 'img/Ephesians_4_26.jpg', T: 'Ephesians 4:26', H:'Ephesians 4', V: '<mark><sup>26</sup> &lsquo;In your anger do not sin&rsquo;: do not let the sun go down while you are still angry,</mark> <sup>27</sup> and do not give the devil a foothold.', L: 'https://www.bibleserver.com/NIV/Ephesians4%3A26'},
  {B: 'img/Galatians_5_14.jpg', T: 'Galatians 5:14', H:'Galatians 5', V: '<sup>13</sup>You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love. <mark><sup>14</sup>For the entire law is fulfilled in keeping this one command: &lsquo;Love your neighbour as yourself.&rsquo;</mark> <sup>15</sup>If you bite and devour each other, watch out or you will be destroyed by each other.', L: 'https://www.bibleserver.com/NIV/Galatians5%3A14'}
];

const container = document.getElementById("container");
var img = document.getElementById('img');
var a = document.getElementById("adwnld");
var divdwn = document.getElementById("dwnld");
var fileName;
var randImg;
var filename2;
var randImg2;
var finalHeight;
var finalWidth;
var verse = document.querySelector(".verseWrapper");
let verseH = document.querySelector(".verseWrapper h2");
let verseP = document.querySelector(".verseWrapper p");
let verseA = document.querySelector(".verseWrapper a");
let returnImg = true;
const like = document.querySelector("#like");
const likePage = document.querySelector("#likePage");
const home = document.querySelector("#home");
const showFav = document.getElementById("showFav");
let likePageBool = false;
let lastImg;
var usedArr;
let favouriteMain = document.querySelector(".favouriteMain");
let likeArr;

img.addEventListener("click", function(){
  img.style.transform = `translateX(${finalWidth+50}px)`;
  setTimeout(() => {
    img.style.zIndex  = '0';
    verse.style.zIndex = '10';
  }, 1000);
  setTimeout(() =>{
    img.style.transform = 'translateX(0%)';
  }, 1000);
});

verse.addEventListener("click", function(){
  if (returnImg == true){
    verse.style.transform = `translateX(-${finalWidth+50}px)`;
    setTimeout(() => {
      img.style.zIndex = '10';
      verse.style.zIndex = '-1';
    }, 1000);
    setTimeout(() =>{
      verse.style.transform = 'translateX(0%)';
    }, 1000);
  }
})


document.querySelector(".verseWrapper a").addEventListener("click", function(){
    returnImg = false;
    setTimeout(() => {
        returnImg = true;
        verse.scrollTop = 0;
    }, 3000);
})


document.addEventListener("DOMContentLoaded", function() {
  scheduleDailyRun();
  checkVisited();
  checkLike();

  if (!localStorage.getItem("likeArr")){
    likeArr = [];
    localStorage.setItem("likeArr", JSON.stringify(likeArr));
  }
  else{
    likeArr = JSON.parse(localStorage.getItem("likeArr"));
  }
})

window.addEventListener("resize", function(){ 
  checkWindowSize();
})



function scheduleDailyRun() {
    const lastRun = localStorage.getItem('lastRun');
    const lastNum = localStorage.getItem('Number');
    const usedArr = localStorage.getItem('Array');
    const i = localStorage.getItem('i');
    const now = new Date();
  
    if (!lastRun || new Date(lastRun).getDate() !== now.getDate() || !lastNum || !usedArr) {
      localStorage.setItem('lastRun', now);
      localStorage.setItem('i', 0);
      localStorage.setItem('Array', '[]');
      newVerse();
    }

    showImg();

    const nextRun = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const delay = nextRun - now;
  
    setTimeout(() => {
      newVerse();
      localStorage.setItem('lastRun', new Date());
      scheduleDailyRun();
    }, delay);
  }
  
 



function newVerse() {
  usedArr = JSON.parse(localStorage.getItem('Array') || "[]");
  var randImg = Math.floor(Math.random() * links.length);
  do {
    randImg = Math.floor(Math.random() * links.length);
  }
  while (usedArr.includes(randImg));
  randImg2 = randImg;
  usedArr.push(randImg);
  localStorage.setItem('Number', randImg2);
  localStorage.setItem('Array', JSON.stringify(usedArr));

  if (usedArr.length === links.length) {
    localStorage.clear();
    usedArr = [];
  }
}

function showImg(){
  lastImg = parseInt(localStorage.getItem('Number'));
  img.src = links[lastImg].B;
  a.href = links[lastImg].B;
  a.download = links[lastImg].B.replace("img/", '');
  verseH.innerHTML = links[lastImg].H;
  verseP.innerHTML = links[lastImg].V;
  verseA.href = links[lastImg].L;
  var i = localStorage.getItem('i');
  checkWindowSize();
}

container.appendChild(img);

var github = document.getElementById("github-pad");
var githubi = document.getElementById("github");

githubi.addEventListener("mouseover", function(){
  github.style.borderColor = 'black';
  githubi.style.color = 'white';
})

githubi.addEventListener("mouseout", function(){
  github.style.borderColor = '';
  githubi.style.color = '';
})

github.addEventListener("click", function(){
  window.open("https://www.github.com/TimmieBimmie");
})


function checkVisited(){
  if (!localStorage.getItem("visited")){
    showInfo();
    localStorage.setItem("visited", "true");
  }
}

function showInfo(){
  setTimeout(() => {
    img.style.transform = 'translateX(150px)';
        setTimeout(() => {
          img.style.transform = 'translateX(0px)';
        }, 2500);
  }, 3000);
}

function checkWindowSize(){
  setTimeout(() => {
  const img = document.getElementById('img');

  const originalWidth = img.naturalWidth;
  const originalHeight = img.naturalHeight;

  const containerWidth = img.clientWidth;
  const containerHeight = img.clientHeight;

  const imageAspectRatio = originalWidth / originalHeight;
  const containerAspectRatio = containerWidth / containerHeight;

  if (containerAspectRatio > imageAspectRatio) {
      finalHeight = containerHeight;
      finalWidth = containerHeight * imageAspectRatio;
  } else {
      finalWidth = containerWidth;
      finalHeight = containerWidth / imageAspectRatio;
  }

  console.log(finalWidth, finalHeight);
  setVerseDim(finalWidth, finalHeight)

  }, 400);
}

function setVerseDim(width, height){
  verse.style.width = `${width+1}px`;
  verse.style.height = `${height-1}px`;
  divdwn.style.maxWidth = `${width}px`
}

like.addEventListener("click", function(){
  let output;
  if (!localStorage.getItem(`${links[lastImg].B}`)){
    localStorage.setItem(`${links[lastImg].B}`, "true");
    like.style.fontWeight = '600';
    likeArr.push(lastImg);
    output = `Added ${links[lastImg].T} to favourites`
  }else{
    localStorage.removeItem(`${links[lastImg].B}`);
    like.style.fontWeight = '';
    const index = likeArr.indexOf(lastImg);
    if (index > -1) {
      likeArr.splice(index, 1);
    } 
    localStorage.removeItem(`${links[lastImg].B}`);
    output = `Removed ${links[lastImg].T} from favourites`;
    removeLikeImg();
  }
  localStorage.setItem("likeArr", JSON.stringify(likeArr));
  fillLikePage();
  document.querySelector(".showFav #showFavP").innerHTML = output;
  showFav.style.display = 'flex';
  setTimeout(() => {
    showFav.style.display = 'none';
  }, 4000);
})

home.addEventListener("click", function(){
  document.querySelector("main").style.display = 'flex';
  document.querySelector(".header h1").innerHTML = 'Your Daily Bible Verse';
  favouriteMain.style.display = 'none';
  changeToBold(home);
  changeToRegular(likePage);
  checkLike();
})

likePage.addEventListener("click", function(){
  likePageBool = true;
  document.querySelector("main").style.display = 'none';
  favouriteMain.style.display = 'grid';
  changeToBold(likePage);
  changeToRegular(home);
  switchLikePage();
})

document.getElementById("close").addEventListener("click", function(){
  showFav.style.display = 'none';
})

function checkLike(){
  if (localStorage.getItem(`${links[lastImg].B}`) == "true"){
    like.style.fontWeight = '600';
  }else{
    like.style.fontWeight = '';
  }
}

function changeToBold(element){
  element.classList.remove('fa-regular');
  element.classList.add('fa-solid');
}

function changeToRegular(element){
  element.classList.remove('fa-solid');
  element.classList.add('fa-regular');
}

function switchLikePage(){
  document.querySelector(".header h1").innerHTML = 'Your Favourites';
  var container = document.createElement("div");
  container.className = "likeWrapper";
  var num = updateLikePage();
  fillLikePage(num, num.length);
  removeLike();
}

function updateLikePage(){
  var locArr = JSON.parse(localStorage.getItem("likeArr"));
  favouriteMain.style.gridTemplateRows = `repeat(${locArr.length}, 50%)`;
  if (locArr.length == 0){
    favouriteMain.style.gridTemplateRows = `1fr`;
    document.querySelector(".noFavs").style.display = "flex";
  }else{
    document.querySelector(".noFavs").style.display = "none";
  }
  return locArr;
}

function fillLikePage(arr, num){
  if (num == 0){
    return;
  }
  removeLikeImg();
  for (let i = 0; i<num; i++){
    var nDiv = document.createElement("div");
    nDiv.className = "elemWrapper";
    nDiv.id = `i${arr[i]}`;
    var imgLike = document.createElement("img");
    imgLike.className = "imgLike";
    imgLike.src = links[arr[i]].B;
    var imgA = document.createElement("a");
    imgA.className = "dwnWrapper";
    imgA.href = links[arr[i]].B;
    imgA.download = links[arr[i]].B.replace("img/", '');
    var wrapperDiv = document.createElement("div");
    wrapperDiv.className = 'optionWrapper';
    var likeDown = document.createElement("a");
    likeDown.innerHTML = '<i class="fa-solid fa-file-arrow-down"></i>';
    likeDown.className = "likeDown";
    imgA.appendChild(likeDown);
    var heart = document.createElement("a");
    heart.className = "likeHeart";
    heart.id = `like${arr[i]}`;
    heart.innerHTML = '<i class="fa-solid fa-heart"></i>';
    var read = document.createElement("a");
    read.className = "read";
    read.href = links[arr[i]].L;
    read.innerHTML = "Read";
    nDiv.append(imgLike);
    wrapperDiv.appendChild(imgA);
    wrapperDiv.appendChild(heart);
    wrapperDiv.appendChild(read);
    nDiv.appendChild(wrapperDiv);
    favouriteMain.append(nDiv);
  }  
    removeLike();
}


function removeLikeImg(){
  Array.from(favouriteMain.children).forEach(child => {
    if (child.tagName === 'DIV') {
        favouriteMain.removeChild(child);
    }
});
}


function removeLike(){
  var likedImgs = document.querySelectorAll(".elemWrapper .optionWrapper .likeHeart");

likedImgs.forEach(like =>{
  like.addEventListener("click", function(){
    let id = like.id.replace("like", "");
    let numId = parseInt(id);
    const index = likeArr.indexOf(numId);
    if (index > -1) {
      likeArr.splice(index, 1);
    }
    localStorage.removeItem(`${links[numId].B}`);
    output = `Removed ${links[numId].T} from favourites`;
    removeLikeImg();
    localStorage.setItem("likeArr", JSON.stringify(likeArr));
    var num = updateLikePage();
    fillLikePage(num, num.length);
    document.querySelector(".showFav #showFavP").innerHTML = output;
    showFav.style.display = 'flex';
    setTimeout(() => {
    showFav.style.display = 'none';
  }, 4000);
  })
})
  checkLike();
}
