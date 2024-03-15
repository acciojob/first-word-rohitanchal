function firstWord(s) {
  // If the string is empty or doesn't contain any space, return the entire string
  if (s === '' || !s.includes(' ')) {
    return s;
  }

  // Find the index of the first space
  const spaceIndex = s.indexOf(' ');

  // Extract the substring up to the first space
  const first = s.substring(0, spaceIndex);

  return first;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
