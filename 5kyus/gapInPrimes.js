// function gap(g, m, n) {
//   // your code
//   let count = 0;
//   const primes = [];
//   const them = [];
//   for (m; m <= n; m++) {
//     for (let i = 2; i <= m; i++) {
//       if (m % i == 0) {
//         count++;
//       }
//     }
//     count > 1 ? (count = 0) : primes.push(m);
//   }

//   for (let i = 0; i < primes.length; i++) {
//     if (primes[i + 1] - primes[i] == g) {
//       them.push(primes[i], primes[i + 1]);
//       if (them.length == 2) {
//         break;
//       }
//     }
//   }
//   return them.length != 0 ? them : null;
// }

// my first solution for codewars was not efficient
function gap(g, m, n) {
    // your code
  let count = 0;
  let catcher = [];
  for (m; m <= n; m++) {
      //   if(m+1 - m == g && catcher.length < 3){
          for (let i = 2; i <= m; i++) {
              if (m % i == 0) {
                  count++;
                }
            }
            if (count > 1) {
                count = 0;
            } else {
                catcher.push(m);
                if (catcher.length == 2) {
                    if (catcher[1] - catcher[0] === g) {
                        return catcher
                    } else {
                        catcher.shift();
                    }
      }
    }
    // getting there
}

if (catcher.length < 2) {
    catcher = null;
}

return catcher;
}

console.log(gap(6, 100, 110));
console.log(gap(2, 100, 110));
console.log(gap(8, 300, 400));
console.log(gap(4, 100, 110));


// ****************** most efficient way ************ //
function gapWRecursion(g, m, n) {
  let lastPrimeChecked = 0;

  const mIsPrime = (x) => {
    for (let i = 2; i * i <= x; i++) {
      if (x % i == 0) return false;
    }
      return true;
    }


  for (let i = m; i <= n; i++) {
    if (mIsPrime(i)) {
      if (i - lastPrimeChecked == g) {
        return [lastPrimeChecked, i];
      } else {
        lastPrimeChecked = i;
      }
    }
  }

  return null;
}

console.log(gapWRecursion(2, 100, 110));
console.log(gapWRecursion(6, 100, 110));
console.log(gapWRecursion(8, 300, 400));
console.log(gapWRecursion(4, 100, 110));