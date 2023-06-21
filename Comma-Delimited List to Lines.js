function pre(str) {
  const commaRegex = /,\s*/g;
  return str.replace(commaRegex, "\n");
}
