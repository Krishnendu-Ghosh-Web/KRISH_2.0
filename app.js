const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}
function wishMe() {
    var day = new Date();
    var hour = day.getHours();
    try {
        if (hour >= 0 && hour < 12) {
            speak("Good Morning Boss...");
        } else if (hour >= 12 && hour < 17) {
            speak("Good Afternoon Master...");
        } else {
            speak("Good Evening Sir...");
        }
    } catch (error) {
        console.error("Error wishing:", error);
    }
}
window.addEventListener('load', () => {
    speak("Initializing KRISH 2.0...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir, How May I Help You?");
    } else if (message.includes("open google")) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } else if (message.includes("open youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Opening Youtube...");
    } else if (message.includes("open facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Opening Facebook...");
    } else if (message.includes("open coding")) {
        window.open("https://leetcode.com", "_blank");
        speak("Opening leetcode ...");  
    } else if (message.includes("open linkedin")) {
        window.open("https://www.linkedin.com/feed", "_blank");
        speak("Opening linkedin ..."); 
    } else if (message.includes("open github")) {
        window.open("https://github.com/Krishnendu-Ghosh-Web", "_blank");  
        speak("Opening github ...");  
    } else if (message.includes("open whatsapp")) {
        window.open("https://web.whatsapp.com", "_blank");
        speak("Opening whatsapp ..."); 
    } else if (message.includes("open ai")) {
        window.open("https://chat.openai.com", "_blank");
        speak("Opening chatGPT ...");    
    } else if (message.includes("play music")) {
        window.open("https://wynk.in/music?ref=sub_header", "_blank");
        speak("Playing music...");  
    } else if (message.includes("open makaut erp")) {
        window.open("https://makaut.mastersofterp.in/iitmsv4eGq0RuNHb0G5WbhLmTKLmTO7YBcJ4RHuXxCNPvuIw=?enc=iF6gEp4ArHiXP7jJ9QlgUyiC5t8GbTA5A/9xbk1Vtqk=", "_blank");
        speak("Opening makaut ...");           
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on the internet regarding " + message;
        speak(finalText);
    } else if (message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "_blank");
        const finalText = "This is what I found on Wikipedia regarding " + message;
        speak(finalText);
    } else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "The current time is " + time;
        speak(finalText);
    } else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "Today's date is " + date;
        speak(finalText);
    } else if (message.includes('calculator')) {
        window.open('Calculator:///');
        const finalText = "Opening Calculator";
        speak(finalText);
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on Google";
        speak(finalText);
    }
}