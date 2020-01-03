https://edabit.com/challenge/9wL6dXj2tKNCe5pFz

CMS Selector Based on a Given String

Create a function that takes an array and a string as arguments and returns the list of CMSs that include the given string. Return the names in an array in alphabetical order.

Examples
cmsSelector(["WordPress", "Joomla", "Drupal" ], "w") ➞ ["WordPress"]

cmsSelector(["WordPress", "Joomla", "Drupal", "Magento" ], "ru") ➞ ["Drupal"]

cmsSelector(["WordPress", "Joomla", "Drupal", "Magento" ], "") ➞ ["Drupal", "Joomla", "Magento", "WordPress"]
Notes
The given letter(s) are case sensitive and can be more than one.
In case the of an empty string, return the entire array.
A CMS is a Content Management System.