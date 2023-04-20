(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  function speakNames() {
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  }

  // Expose the speakNames function to the global scope.
  window.speakNames = speakNames;

  // Add an event listener to the button.
  document.addEventListener('DOMContentLoaded', function() {
    var speakButton = document.getElementById('speakButton');
    speakButton.addEventListener('click', speakNames);
  });

})();

