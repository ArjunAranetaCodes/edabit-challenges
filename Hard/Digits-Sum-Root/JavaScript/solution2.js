const minSwaps = (s1, s2) =>
  ((parseInt(s1, 2) ^ parseInt(s2, 2)).toString(2).match(/1/g) || []).length / 2;