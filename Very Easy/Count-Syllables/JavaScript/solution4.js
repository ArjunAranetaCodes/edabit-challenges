const monthName = month =>
  new Date(`1970 ${month} 01`).toLocaleString('en', { month: 'long' });