function lcm(n1, n2) {
  let lar = Math.max(n1, n2);
  let small = Math.min(n1, n2);
  
  let i = lar;
  while(i % small !== 0){
    i += lar;
  }
  
  return i;
}