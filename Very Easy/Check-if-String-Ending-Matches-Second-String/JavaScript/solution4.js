function checkEnding(str1, str2) {
  return str2 === str1.substr(str1.length - str2.length, str2.length);
}