function hexTo64(string) {
  let base64String = string;
  base64String = Buffer.from(base64String, 'hex');
  return base64String.toString('base64');
}
console.log(
  hexTo64(
    '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d'
  );
