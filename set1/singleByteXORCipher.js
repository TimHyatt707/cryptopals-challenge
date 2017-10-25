function singleByteXORCipher(string) {
  let count = 0;
  let arrayOfResults = [];
  while (count !== 255) {
    arrayOfResults.push(decipher(string, count));
    count++;
  }
  let scoredResults = arrayOfResults.map(result => {
    return score(result);
  });
  scoredResults = scoredResults.sort((a, b) => {
    return a.score - b.score;
  });
  return scoredResults[254];
}

function decipher(string, index) {
  let stringBuffer = Buffer.from(string, "hex");
  let result = stringBuffer.map(element => {
    return element ^ index;
  });
  return result.toString("utf8");
}

function score(string) {
  let score = 100;
  let result = string;
  for (let i = 0; i < result.length; i++) {
    if (result[i].search(/\w/) === -1) score -= 5;
    if (result[i].search(/\d/) !== -1) score -= 5;
  }
  return { text: result, score };
}

console.log(
  singleByteXORCipher(
    "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736"
  )
);
