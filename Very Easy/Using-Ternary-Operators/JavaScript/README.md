https://edabit.com/challenge/32rk4qSmtrB6oJGyn

Using Ternary Operators

The ternary operator (sometimes called Conditional Expressions) in JavaScript is an alternative to the if... else... statement.

It is written in the format:

condition ? condition_if_true : condition_if_false
Ternary operators are more readable than multi-line if statements, and allow us to quickly test a condition without having to use addtional lines and operations.

For example:

is_nice = true

// Using ternary operator.
state = is_nice ? "nice" : "not nice"

// Equivalent code using multi-line if statements.
if (is_nice)
	state = "nice"
else 
	state = "not nice"
Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.

Examples
yeah_nope(true) ➞ "yeah"

yeah_nope(false) ➞ "nope"
Notes
N/A