  const SEQ = {};
  function fib(n) {
    if (SEQ[n]) return SEQ[n]
    if (n == 1 || n == 0) {
      return BigInt(1);
    } else {
      SEQ[n] = fib(n-BigInt(1)) + fib(n-BigInt(2));
      return SEQ[n];
    }
  }
  let n = BigInt(0);
  while(true) {
    const val = fib(n).toString();
    if ( val.length>= 1000) {
      break;
    }
    n += BigInt(1);
  }
  console.log( {n});
