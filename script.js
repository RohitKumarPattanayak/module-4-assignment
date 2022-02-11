/*
Solution of assignment 4:

Expected output:

Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/



(function() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    console.log(names)
    for (var i = 0; i < names.length; i++) {
        if (names[i][0] == 'J') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
console.log(window.byeSpeaker)
console.log(window.helloSpeaker)