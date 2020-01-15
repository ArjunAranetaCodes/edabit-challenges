function countOnes(i) {
  return i.toString(2).split('').filter((c)=>c==1).length
}