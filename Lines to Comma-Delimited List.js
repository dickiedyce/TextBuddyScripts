function pre(str) {
  const commaRegex = / *\n/g;
  return str.replace(commaRegex, ", ");
}

function post(str) {
  const trailingRegex = /,\s*$/;
  return str.replace(trailingRegex, "");
}
