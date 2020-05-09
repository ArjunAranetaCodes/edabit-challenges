const correctStream = (answers, solutions) =>
  answers.map((answer, i) => (answer === solutions[i] ? 1 : -1));