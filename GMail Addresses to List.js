function pre(str) {
  const reverseMailRegex = /"(.+), (.+)"+?/g;
  fixed = str.replace(reverseMailRegex, "$2 $1");
  const commaRegex = /, +?/g;
  return fixed.replace(commaRegex, "\n");
}

// Remove Line Numbers.js
function perLine(str) {
  const regex = /<.+>/;
  return str.replace(regex, "") + "\n";
}
