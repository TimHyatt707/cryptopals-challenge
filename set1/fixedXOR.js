function fixedXOR(string) {
  let hexed = Buffer.from(string, "hex");
  hexed = hexed.toString("base64");
}
console.log(fixedXOR("1c0111001f010100061a024b53535009181c"));
