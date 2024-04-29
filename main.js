var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
//colocar o textbox com T minúsculo
var Textbox = document.getElementById("textbox");

function start() {
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    if (Content == "selfie") {
        console.log("tirando selfie--- ");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Tirando selfie em 5 segundos";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function () {
        take_selfie();
        save();
    }, 5000);
}
