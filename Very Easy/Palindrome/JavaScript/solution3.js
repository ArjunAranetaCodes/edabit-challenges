function checkPalindrome(str) {
  for (i = 0; i < str.length; i++) {
		if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
return true;
}