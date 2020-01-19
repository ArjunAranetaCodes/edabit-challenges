const getHashTags = s => s.match(/\w+/g)
  .sort((a,b) => b.length - a.length).slice(0,3)
  .map(w => `#${w.toLowerCase()}`)