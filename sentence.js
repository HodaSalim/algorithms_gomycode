function sentenceStats(sentence) {
  let vowels = 0;
  const lowerCaseSentence = sentence.toLowerCase();
  const chars = sentence.length;
  let words = 1;
  if (chars === 0) {
    console.log("this is an empty string");
    words = 0;
  }
  for (let i = 0; i < chars; i++) {
    let char = lowerCaseSentence[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      vowels++;
    } else if (lowerCaseSentence[i] == " ") {
      words++;
    }
  }
  console.log(
    `number of words is: ${words}, number of vowels: ${vowels}, and the number of characters is ${chars}`
  );
}

sentenceStats("Hello World");
