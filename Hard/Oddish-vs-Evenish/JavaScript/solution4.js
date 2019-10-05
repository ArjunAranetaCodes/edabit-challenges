function oddishOrEvenish(num) {
 return `${num}`.split('').reduce((a, b)=>a*1+b*1)%2==0?'Evenish':'Oddish'
}