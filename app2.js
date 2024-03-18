const btn = document.querySelector('.send');
const input = document.querySelector('input');
var message = null;
let person = "nicht bekannt";

btn.addEventListener('click', ()=>{
    if(input.value == ""){
        alert("Feld darf nicht leer sein");
    }
message = input.value.toLowerCase();
input.value = "";
element(message);
postthis(message);
});




let response = "Es gab einen Fehler. Probiere es erneut";

function postthis(message) {    

    
    

    if(message.includes('hey') || message.includes('hallo') || message.includes('jessica')) {
        const finalText = "Hallo, wie kann ich helfen?";
        response = finalText;
    }

    else if(message.includes('ändere meinen namen')) {
        message = message.replace("ändere meinen namen auf ", ""), message.replace(" ", "");
        const finalText = "Ok " + message;
        person = message;
        response = finalText;
    }
    
    else if(message.includes('nenne mich')) {
        message = message.replace("nenne mich ", ""); 
        const finalText = "Ok " + message;
        person = message;
        response = finalText;
    }

    else if(message.includes('ich heisse')) {
        message = message.replace("ich heisse ", ""); 
        const finalText = "Ok " + message;
        person = message;
        response = finalText;
    }

    else if(message.includes('wie geht es dir')) {
        const finalText = "Mir geht es gut, danke";
        response = finalText;
    }

    else if (message.includes('wie heisst du') || message == ('wer bist du')){
        const finalText = "Ich heisse Jessica. Ich bin ein Sprach und Chat basiertes Modell, entwickelt von Tim.";
        response = finalText;
    }
   

    else if(message.includes('öffne google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Google wird geöffnet";
        response = finalText;
    }

    else if(message.includes('öffne instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Instagram wird geöffnet";
        response = finalText;
    }

    else if(message.includes('was ist') || message.includes('wer ist') || message.includes('was sind')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Ich habe folgendes zu " + message + "gefunden:";
        response = finalText;
    }

    else if(message.includes('wo ist') || message.includes('wo befindet sich') || message.includes('wo liegt')){
        if (message.includes('?')){
            message = message.replace('wo ist ', ''); 
            message = message.replace('?', '');
        }else{
        message = message.replace('wo ist ', '');}
        window.open(`https://www.google.ch/maps/search/${message.replace(" ", "+")}`, "_blank");
        const finaltext = "Auf Google Maps habe ich folgenden Eintrag zu " + message + " gefunden";
        response = finaltext;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        message = message.replace("wikipedia", "");
        message = message.replace(" ", "");
        const finalText = "Ich bin habe folgendes zu " + message + " auf Wikipedia gefunden:" + "\n" + `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`;
        response = finalText;
    }

    else if(message.includes("zeit") || message == ("was ist die Zeit") || message == ("wie spät ist es") || message == ("wie viel uhr ist es")) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = "Es ist " + time + " Uhr";
        response = finalText;
    }

    else if(message.includes('datum') || message == ('was ist das heutige datum')) {
        const date = new Date().toLocaleString(undefined, {day: "numeric", month: "long"})
        const finalText = "Wir haben den " + date;
        response = finalText;
    }

    else if(message.includes('rechnen') ||message.includes('taschenrechner') || message.includes('rechnung') || message.includes('plus') || message.includes('minus') || message.includes('plus')) {
        window.open('Calculator:///')
        const finalText = "Der Taschenrechner wird geöffnet";
        response = finalText;
    }

    else if (message.includes('danke') || message == "danke"){
        const finalText = "Gern Geschehen :)";
        response = finalText;
    }


    else if (message.includes('mein name') || message.includes('wie heisse ich')){
        const finalText = "Dein Name ist " + person;
        response = finalText;
    }

    else if (message.includes('kalender') || message.includes('errinerung')){
        const finalText = "Kalender wird geöffnet";
        window.open(`https://calendar.google.com/calendar/`, "_blank");
        response = finalText;
    }

    else if(message.includes('halt dein maul') || message.includes('fresse')) {
        const finalText = "Komm 1 gegen 1 du huso";
        response = finalText;
    }

    else if(message == ('öffne youtube')) {
        window.open(`https://www.youtube.com`, "_blank");
        const finalText = "youtube wird geöffnet";
        response = finalText;
    }

    else if(message.includes('whatsapp') || message == ('öffne whatsapp')) {
        window.open(`https://www.web.whatsapp.com`, "_blank");
        const finalText = "WhatsApp wird geöffnet";
        response = finalText;
    }

    else if(message.includes('messi oder ronaldo') || message == ('messi oder ronaldo')) {
        const finalText = "messi ganz klar";
        response = finalText;
    }

    else if(message.includes('suche nach') && message.includes('auf youtube')) {
        message = message.replace('suche nach ', '');
        message = message.replace(' auf youtube', '');
        if (message.includes('"') && message > 0){
            message = message.replace('"', '');
        }
        window.open(`https://www.youtube.com/results?search_query=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Ich konnte folgendes zu" + message + " auf YouTube finden";
        response = finalText;
    }


    else if(message.includes('suche nach')) {
        message = message.replace('suche nach', '');
        if (message.includes('"') && message > 0){
            message = message.replace('"', '');
        }
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Ich konnte folgendes zu" + message + " finden";
        response = finalText;
    }

    
    else if(message.length < 2 ) {
        const finalText = "Entschuldigung, ich habe das leider nicht ganz verstanden, da ich noch in der Tesphase bin.\n Bitte entschuldige mich.";
        response = finalText;
    }


    else {
        const finalText = "Ich habe folgendes zu " + message + " auf Google gefunden";
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        response = finalText;
    }
    

    console.log("input " + "(" + person + ")" + ": " + message);
    console.log("output Jessica: " + response);
    resElement(response);    

}

var container = document.getElementById("ndiv");

function element(){
    var newElem = document.createElement('p');
    newElem.textContent = "Du: " +message;
    container.appendChild(newElem);
    //var hr = document.createElement('hr');
    //container.appendChild(hr);
}

function resElement(){
    var newElem2 = document.createElement('p');
    newElem2.classList.add('resp');
setTimeout(function(){
    newElem2.textContent = "Jessica: " + response;
    container.appendChild(newElem2);
},1000);
}








//Style

/*
document.getElementById('button').addEventListener('mouseover', function() {
document.getElementById('button').style.backgroundColor = '#ffffff';
document.getElementById('i1').style.color = 'rgb(0,0,0)';
document.getElementById('h11').style.color = 'rgb(0,0,0)';
});

document.getElementById('button').addEventListener('mouseout', function() {
    document.getElementById('button').style.backgroundColor = '';
    document.getElementById('i1').style.color = 'white';
    document.getElementById('h11').style.color = 'white';
    });
*/

    //Entertaste

    document.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
         btn.click();
        }})

    const cursor = document.querySelector(".cursor");
    
    document.addEventListener("mousemove", (e) => {
        let leftPosition = e.pageX + 4;
        let topPosition = e.pageY + 4;
    
        cursor.style.left = leftPosition + "px";
        cursor.style.top = topPosition + "px";
    })

   const header = document.querySelector("a");
   const headerA = document.querySelector(".active");
   

//input
    const body = document.querySelector("html");

   body.addEventListener("click", (event) => {
    cursor.style.border = '2px solid red';

    setTimeout(() => {
        cursor.style.border = '';
      }, 100);
   })




   const i = document.querySelector("i");

   btn.addEventListener("mouseover", function(){
    i.style.color = 'black';
   })

   btn.addEventListener("mouseout", function(){
    i.style.color = '';
   })


//NAV
   
function openMenu() {
    const nav = document.querySelector(".nav");
    nav.style.width = "100%";
  }
    
  
  
    function closeMenu() {
      document.getElementById("nav").style.width = "0";
    } 
  
