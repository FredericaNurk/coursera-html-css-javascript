
(function () {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", 
                 "Frank", "Larry", "Paula", "Laura", "Jim"];

    for (var n = 0; n < names.length; n++) {

        if (names[n][0].toLowerCase() != 'j') {
            helloSpeaker.speak(names[n]);
        }   else {
                byeSpeaker.speak(names[n]);
            }
    }
})();