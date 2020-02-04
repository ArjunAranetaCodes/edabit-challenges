let errorLog = {}

let promise = new Promise((resolve, reject) => {
    throw new Error('Something failed');
}).catch(e => errorLog = e);