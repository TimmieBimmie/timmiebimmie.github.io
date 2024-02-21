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
        utterance.rate = 1;
        utterance.pitch = 1;

        window.speechSynthesis.speak(utterance);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = onVoicesChanged;
    } else {
        onVoicesChanged(); // Direkt aufrufen, wenn Stimmen schon geladen sind
    }
}






/*function speak(sentence) {
    window.speechSynthesis.onvoiceschanged = () => {
        let voiceArr = window.speechSynthesis.getVoices();
        selectedVoice = voiceArr[2];
    
        var text_speak = new SpeechSynthesisUtterance(sentence);
       

        text_speak = voiceArr[2];

        text_speak.rate = 1;
        text_speak.pitch = 1;

        
    }
    window.speechSynthesis.speak(text_speak);
}*/

const person = prompt("Wie ist dein Name");



function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Guten Morgen " + person + " .Ich bin Jessica dein virtueller Assistent");
    }

    else if(hr >12 && hr < 13) {
        speak("Guten Mittag " + person + " .Ich bin Jessica dein virtueller Assistent");
    }

    else if(hr > 13 && hr <= 17) {
        speak("Guten Nachmittag " + person + " .Ich bin Jessica dein virtueller Assistent");
    }

    else {
        speak("Guten Abend " + person + " .Ich bin Jessica dein virtueller Assistent");
    }
}



window.addEventListener("load", function(){
    if (person != null){
    wishMe();
}
})



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})





function speakThis(message) {    

    var response = "Ich konnte dich leider nicht verstehen, bitte versuch es noch einmal";

    if(message.includes('hey') || message.includes('hallo') || message.includes('jessica')) {
        const finalText = "Hallo, wie kann ich helfen?";
        response = finalText;
    }

    else if(message.includes('wie geht es dir')) {
        const finalText = "Mir geht es gut, danke";
        response = finalText;
    }

    else if (message.includes('Wie heisst du') || message == ('Wie heisst du')){

    }
   

    else if(message.includes('öffne Google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Google wird geöffnet";
        response = finalText;
    }

    else if(message.includes('öffne Instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Instagram wird geöffnet";
        response = finalText;
    }

    else if(message.includes('Was ist') || message.includes('Wer ist') || message.includes('Was sind') || message.includes('Wo ist')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Ich habe folgendes zu " + message + "gefunden:";
        response = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "Ich bin auf folgendes gestossen zu: " + message;
        response = finalText;
    }

    else if(message.includes("Zeit") || message == ("Was ist die Zeit")) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = "Es ist" + time;
        response = finalText;
    }

    else if(message.includes('Datum') || message == ('Was ist das heutige Datum')) {
        const date = new Date().toLocaleString(undefined, {day: "numeric", month: "short"})
        const finalText = "Wir haben den " + date;
        response = finalText;
    }

    else if(message.includes('Rechnen') ||message.includes('Taschenrechner') || message.includes('Rechnung')) {
        window.open('Calculator:///')
        const finalText = "Der Taschenrechner wird geöffnet";
        response = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Ich habe folgendes zu " + message + " auf google gefunden";
        response = finalText;
    }

    speech.volume = 2;
    speech.pitch = 1;
    speech.rate = 2;

    window.speechSynthesis.speak(response);
}
