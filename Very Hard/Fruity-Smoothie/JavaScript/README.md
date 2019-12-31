https://edabit.com/challenge/7ytmgtAXGAccwpvJN

Fruity Smoothie

Create a class Smoothie and do the following:

Create a constructor property called ingredients.
Create a getCost method which calculates the total cost of the ingredients used to make the smoothie.
Create a getPrice method which returns the number from getCost plus the number from getCost multiplied by 1.5. Round to 2 decimal places.
Create a getName method which gets the ingredients and puts them in alphabetical order into a nice descriptive sentence. If there are multiple ingredients, add the word 'Fusion' to the end but otherwise, add 'Smoothie'. Remember to change '-berries to '-berry'. See the examples below.
Ingredient	Price
Strawberries	$1.50
Banana	$0.50
Mango	$2.50
Blueberries	$1.00
Raspberries	$1.00
Apples	$1.75
Pineapple	$3.50
Examples
s1 = new Smoothie(["Banana"])

s1.ingredients ➞ ["Banana"]

s1.getCost() ➞ "$0.50"

s1.getPrice() ➞ "$1.25"

s1.getName() ➞ "Banana Smoothie"
s2 = Smoothie(["Raspberries", "Strawberries", "Blueberries"])

s2.ingredients ➞ ["Raspberries", "Strawberries", "Blueberries"]

s2.getCost() ➞ "$3.50"

s2.getPrice() ➞ "$8.75"

s2.getName() ➞ "Blueberry Raspberry Strawberry Fusion"
Notes
Feel free to check out the Resources tab for a refresher on classes.