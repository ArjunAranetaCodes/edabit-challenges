const progressDays = runs =>
  runs.slice(1).reduce((progress, run, i) => {
    const prevRun = runs[i];
    return progress + (run > prevRun ? 1 : 0);
  }, 0);