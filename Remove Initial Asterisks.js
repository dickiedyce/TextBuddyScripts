// Remove Line Numbers.js
function perLine(str) {
  const regex = /^\* +?/;
  return str.replace(regex, "") + "\n";
}
