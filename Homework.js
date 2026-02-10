function factorial(n){
  if(Number.isInteger(n)){
    if(n <= 0) return 1;
    return (n === 1)? n: n * factorial(n-1);
  }
  return NaN
}