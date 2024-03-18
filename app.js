let speech = new SpeechSynthesisUtterance();


const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

let selectedVoice;

function speak(sentence) {
    const onVoicesChanged = () => {
        const voices = window.speechSynthesis.getVoices();
        const selectedVoice = voices[3];
        console.log(selectedVoice);

        const utterance = new SpeechSynthesisUtterance(sentence);
        utterance.voice = selectedVoice;
        utterance.rate = 1.1;
        utterance.pitch = 1.05;

        window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = onVoicesChanged;
    } else {
        onVoicesChanged(); 
    }
}


let person = prompt("Wie ist dein Name?");
if (person == null){
    person = "";
}

setTimeout(callWish, 1000);

function callWish(){
wishMe();
}



function wishMe() {
    var day = new Date();
    var hr = day.getHours();
    let greet = "Hallo, es gab ein Problem, bitte lade die Seite neu."

    if(hr >= 0 && hr < 12) {
        greet = ("Guten Morgen " + person + " .Ich bin Jessica dein virtueller Assistent. Wie kann ich behilflich sein?");
    }

    else if(hr >12 && hr < 13) {
        greet = ("Guten Mittag " + person + " .Ich bin Jessica dein virtueller Assistent. Wie kann ich behilflich sein?");
    }

    else if(hr > 13 && hr < 17) {
        greet = ("Guten Nachmittag " + person + " .Ich bin Jessica dein virtueller Assistent. Wie kann ich behilflich sein?");
    }

    else {
        greet = ("Guten Abend " + person + " .Ich bin Jessica dein virtueller Assistent. Wie kann ich behilflich sein?");
    }

    speak(greet);

}


/*function start(){window.addEventListener("load", function(){
    wishMe();
})}*/


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    //content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
});



function speakThis(message) {    

    
     let response = "Ich konnte dich leider nicht verstehen, bitte versuch es noch einmal";


    if(message.includes('hey') || message.includes('hallo') || message.includes('jessica')) {
        const finalText = "Hallo, wie kann ich helfen?";
        response = finalText;
    }

    else if(message.includes('wie geht es dir')) {
        const finalText = "Mir geht es gut, danke";
        response = finalText;
    }

    else if (message.includes('wie heisst du') || message == ('Wie heisst du')){
        const finalText = "Ich heisse Jessica";
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

    else if(message.includes('was ist') || message.includes('wer ist') || message.includes('was sind') || message.includes('wo ist')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Ich habe folgendes zu " + message + "gefunden:";
        response = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "Ich bin auf folgendes gestossen zu: " + message;
        response = finalText;
    }

    else if(message.includes("zeit") || message == ("was ist die Zeit") || message == ("wie spät ist es")) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = "Es ist" + time;
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

    else if(message.includes('youtube') || message == ('öffne youtube')) {
        window.open(`https://www.youtube.com`, "_blank");
        const finalText = "youtube wird geöffnet";
        response = finalText;
    }

    else if(message.includes('whatsapp') || message == ('öffne whatsapp')) {
        window.open(`https://www.web.whatsapp.com`, "_blank");
        const finalText = "whatsapp wird geöffnet";
        response = finalText;
    }

    else if(message.includes('messi oder ronaldo') || message == ('messi oder ronaldo')) {
        const finalText = "messi ganz klar";
        response = finalText;
    }

    else if(message.includes('suche nach')) {
        message = message.replace('suche nach', '');
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Ich konnte folgendes zu" + message + " finden";
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


    else {
        const finalText = "Ich habe folgendes zu " + message + " auf google gefunden";
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        response = finalText;
    }


    

    

    speak(response);


    console.log("input " + person + ": " + message);
    console.log("output Jessica: " + response);

}


//Style


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





    const cursor = document.querySelector(".cursor");
    const links = document.querySelectorAll("nav ul li a");
    const navlinks = document.querySelectorAll("nav ul li");
    
    document.addEventListener("mousemove", (e) => {
        let leftPosition = e.pageX + 4;
        let topPosition = e.pageY + 4;
    
        cursor.style.left = leftPosition + "px";
        cursor.style.top = topPosition + "px";
    })

    cursor.addEventListener("mouseover", function(){
        cursor.style.widht = '50px';
        cursor.style.height = '50px';
        cursor.style.color = 'red';

    })


    const header = document.querySelector("a");
    const headerA = document.querySelector(".active");
    

    const body = document.querySelector("html");

    body.addEventListener("click", (event) => {
     cursor.style.border = '2px solid red';
 
     setTimeout(() => {
         cursor.style.border = '';
       }, 100);
    })
 


    
function openMenu() {
    var nav = document.getElementById("nav");
    nav.style.width = "100%";
  }
    
  
  
    function closeMenu() {
      document.getElementById("nav").style.width = "0";
    } 
      
      
