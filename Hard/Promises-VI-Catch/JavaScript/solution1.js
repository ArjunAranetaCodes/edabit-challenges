let errorLog = {}

let promise = new Promise((resolve, reject) => {
    throw new Error('Something failed');
}).catch(function(reason) {
	errorLog = reason;
   return  reason;
})