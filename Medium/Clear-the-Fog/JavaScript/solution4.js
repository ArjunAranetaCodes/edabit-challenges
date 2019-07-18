const clearFog = str => 
RegExp(/[fog]/gi).test(str) ? str.replace(/[fog]/gi, "") : "It's a clear day!"