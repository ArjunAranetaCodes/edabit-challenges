const numberOfRepeats = str => str.length / str.match(/^(.+?)\1*$/)[1].length;