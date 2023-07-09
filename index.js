//Coderbyte String Challenge in JavaScript

function StringChallenge(sen) {
  const words = sen.replace(/[^\w\s]|_/g, "").split(" ");
  let longestWord = "";

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  let finalOutput = longestWord
    .split("")
    .filter((char) => !/i|q|b|o|l|p|g|3|j|1|7|4/i.test(char))
    .join("");

  if (finalOutput === "") {
    return "EMPTY";
  } else {
    return finalOutput;
  }
}

console.log(StringChallenge("fun&!! time"));
// Output: time
// Final Output: tme

console.log(StringChallenge("I love dogs"));
// Output: love
// Final Output: ve
