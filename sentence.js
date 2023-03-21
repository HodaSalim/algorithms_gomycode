function countSentence(sentence) {
  var chars = 0;
  var words = 1;
  var vowels = 0;
  var lowerSentence = sentence.toLowerCase();

  for (var i = 0; i < lowerSentence.length; i++) {
    chars++;
    if (lowerSentence[i] == " ") {
      words++;
    } else if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      vowels++;
    }
  }
}
