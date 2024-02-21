const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Inertia");
    speak("Going online");
    wishMe();
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
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello') || message.includes('jessica')) {
        const finalText = "Hallo, wie kann ich helfen";
        speech.text = finalText;
    }

    else if(message.includes('wie geht es dir')) {
        const finalText = "Mir geht es gut, danke";
        speech.text = finalText;
    }

    else if(message.includes('name') || ('Wie ist dein Name')) {
        const finalText = "Ich bin Jessica ein nützlicher Assistent";
        speech.text = finalText;
    }

    else if(message.includes('öffne Google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Google wird geöffnet";
        speech.text = finalText;
    }

    else if(message.includes('öffne Instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Instagram wird geöffnet";
        speech.text = finalText;
    }

    else if(message.includes('Was ist') || message.includes('Wer ist') || message.includes('Was sind') || message.includes('Wo ist')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Ich habe folgendes zu " + message + "gefunden:";
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "Ich bin auf folgendes gestossen zu: " + message;
        speech.text = finalText;
    }

    else if(message.includes('Zeit') || message.includes('Was ist die Zeit')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = "Es ist" + time;
        speech.text = finalText;
    }

    else if(message.includes('Datum') || message.includes('Was ist das heutige Datum')) {
        const date = new Date().toLocaleString(undefined, {day: "numeric", month: "short"})
        const finalText = "Wir haben den " + date;
        speech.text = finalText;
    }

    else if(message.includes('Rechnen') ||message.includes('Taschenrechner') || message.includes('Rechnung')) {
        window.open('Calculator:///')
        const finalText = "Der Taschenrechner wird geöffnet";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Ich habe folgendes zu " + message + " auf google gefunden";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}