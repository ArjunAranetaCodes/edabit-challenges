https://edabit.com/challenge/CstPAznqLdPSPYyAC

Promises VI: Catch

We handle resolve callbacks with then, but what about reject callbacks? We have a catch function that we can use to handle errors or rejected promises. It is generally a good idea to have an error handler at the end of your promises.

Challenge
Write an error handler for the provided promise. Re-assign errorLog to the error inside your error handler.
The error handler must be added to the original promise. So you can't do promise.catch(/error handling/). See the Comments for more details.
Notes
Check the Resources tab for more info on promises.