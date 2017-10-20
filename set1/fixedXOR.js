function fixedXOR(string1, string2) {
  let array1Buffer = Buffer.from(string1, "hex");
  let array2Buffer = Buffer.from(string2, "hex");
  let result = array1Buffer.map((element, index) => {
    return element ^ array2Buffer[index];
  });
  return result.toString("hex");
}
console.log(
  fixedXOR(
    "1c0111001f010100061a024b53535009181c",
    "686974207468652062756c6c277320657965"
  )
);
