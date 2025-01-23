let prefixes = {};

/**
 * Processes each line of input. Increments any occurrence of [XXX 00],
 * where XXX is three letters, with a unique count for each distinct prefix.
 *
 * @param {string} line - One line of text from the input.
 * @returns {string} - The transformed line.
 */
function perLine(line) {
  // We'll look for [prefix 00] repeatedly until none remain in the line.
  const pattern = /\[([A-Za-z]{3}) 00\]/; // Non-global pattern for a while-loop approach
  let match;

  // Repeatedly search within the line until there are no more [XXX 00] matches
  while ((match = pattern.exec(line)) !== null) {
    // match[1] is the three-letter prefix from the capturing group
    const prefix = match[1];

    // Initialize a counter for this prefix if we haven't seen it before
    if (!prefixes[prefix]) {
      prefixes[prefix] = 1;
    }

    // Build the replacement string, e.g. [abc 01], [abc 02], etc.
    const replacement =
      "[" + prefix + " " + String(prefixes[prefix]).padStart(2, "0") + "]";

    // Update the prefix's count
    prefixes[prefix]++;

    // Rebuild the line around the matched substring
    // match.index is where the match begins, match[0] is the entire matched text
    line =
      line.substring(0, match.index) +
      replacement +
      line.substring(match.index + match[0].length);
  }

  return line + "\n";
}
