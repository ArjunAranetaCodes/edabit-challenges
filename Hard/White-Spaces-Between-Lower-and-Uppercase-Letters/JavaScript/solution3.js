const insertWhitespace = str =>
  str.replace(/([a-z][A-Z])/g, ([lower, upper]) => `${lower} ${upper}`);