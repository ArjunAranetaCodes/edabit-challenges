https://edabit.com/challenge/p5xNwq2v9ZX7vo3mb

Little Dictionary

Create a function that takes in an initial word and filters out an array which contains words that start with the same letters as the initial word.

Examples
dictionary("bu", ["button", "breakfast", "border"]) ➞ ["button"]

dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]) ➞ ["triplet", "tries", trip"]

dictionary("beau", ["pastry", "delicious", "name", "boring"]) ➞ []
Notes
If none of the words match, return an empty array.
Keep the filtered array in the same relative order as the original array of words.