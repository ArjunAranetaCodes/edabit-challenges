const mdFormat = (w,s) =>
  `${c = { b: '**', i: '_', c: '`', s: '~~' }[s]}${w}${c}`