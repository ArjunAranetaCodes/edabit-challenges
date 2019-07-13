https://edabit.com/challenge/dq5bqbRnPwDxJyobL

The Empty Square Sequence

In the image below, squares are either empty or filled with a circle.

Steps vs Empty Squarest

Create a function that takes a number step (which equals HALF the width of a square) and returns the amount of empty squares. The image shows the squares with step 1, 2 and 3. The return value is the number of cells not on a diagonal, which is 0 for the first square, 8 for the second, and 24 for the third.

Examples
emptySq(1) ➞ 0

emptySq(3) ➞ 24

emptySq(10) ➞ 360

Notes
Test input will always be a positive integer.
The width of the square will always be even.