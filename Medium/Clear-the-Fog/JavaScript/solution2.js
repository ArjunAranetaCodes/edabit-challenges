const clearFog = s => !/[fog]/g.test(s) ? "It's a clear day!" :
 s.replace(/[fog]/g, '');