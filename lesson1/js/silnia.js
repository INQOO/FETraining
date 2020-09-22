function silnia(n) {
  if ( n <= 1)
    return 1
  else {
    return (n * silnia(n-1) );
  }
}
console.log(silnia(5));

