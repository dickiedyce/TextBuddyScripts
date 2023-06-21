// Remove Line Numbers.js
function perLine(str) {
  const regex = /^[0-9]+\. +?/;
  return str.replace(regex, "") + "\n";
}
