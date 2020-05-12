https://edabit.com/challenge/WBdjg7zgiqi6L5zsL

Strange Pair

A pair of strings form a strange pair if both of the following are true:

The 1st string's first letter = 2nd string's last letter.
The 1st string's last letter = 2nd string's first letter.
Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

Examples
isStrangePair("ratio", "orator") ➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".

isStrangePair("sparkling", "groups") ➞ true

isStrangePair("bush", "hubris") ➞ false

isStrangePair("", "") ➞ true
Notes
It should work on a pair of empty strings (they trivially share nothing).