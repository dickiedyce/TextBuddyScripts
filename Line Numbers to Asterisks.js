// Line Numbers to dashes.js
function perLine(str) {
  const regex = /^[0-9]+\. +/;
  return str.replace(regex, "* ") + "\n";
}
