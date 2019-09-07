const nSidedShape = n => ',circle,semi-circle,triangle,square'
  .split`,`[n] || 'pent,hex,hept,oct,non,dec'.split`,`[n - 5] + 'agon'