// 1. 1 den 100 e qeder edeleri ekrana cixarin hem for ile hem while ile
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// let i = 1;
// while (i <= 100) {
//   console.log(i++);
// }

// 2. bir array yazin ve o array daki en kicik ededi tapan program yazin
// first method O(nlogn)
// const arr = [1, 2, 3, -4, 5, 6, -999];
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr[0]);

// second method O(n)
// const arr1 = [1, 2, 3, -4, 5, 6, -999, -9999];
// let min = arr1[0];
// for (let i = 0; i < arr1.length; i++) {
//     min = min > arr1[i] ? arr1[i] : min;
// }
// console.log(min);

// 3. bir array yazin ve o arraydaki en boyuk ededi tapan program yazin
// first method O(nlogn)
// const arr = [1, 2, 3, -4, 5, 6, -999, 999];
// arr.sort(function (a, b) {
//   return a - b;
// });
// console.log(arr[arr.length-1]);
// // second method O(n)
// const arr1 = [1, 2, 3, -4, 5, 6, -999, -9999, 999];
// let max = arr1[0];
// for (let i = 0; i < arr1.length; i++) {
//     max = max > arr1[i] ? max : arr1[i];
// }
// console.log(max);

// 4. bir eded secin ve o ededin sade mi murekkeb mi oldugunu tapan program yazin ( sade eded sadece ozune ve 1 e bolunen ededir 11,13 ornek)
// let n = 29;

// backtracking method O(n)
// function isPrime(number) {
//     if (n <= 1) return false;
//     if (number === 1) {
//         return true;
//       }
//   if (n % number === 0) {
//     return false;
//   }
//   return isPrime(number - 1);
// }
// console.log("if the number is prime then log is 'true', otherwise 'false' : " , isPrime(n-1));

// loop implementation method O(sqrt(n)) => O(n)
// function isPrime(n) {
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(n));

// the most efficient way, O(sqrt(n)) => O(n),
// but we can check the divisions only by odd numbers, it will
// be enough:

// function isPrime(n) {
//     if (n <= 1) return false;
//     if (n <= 3) return true;
//     if (n % 2 === 0 || n % 3 === 0) return false;

//     for (let i = 5; i * i <= n; i += 6) {
//         if (n % i === 0 || n % (i + 2) === 0) return false;
//     }
//     return true;
// }

// 5.  bir array  yazin qarmasiq olsun o arrayi artan sira ile duzen program yazin
// sorting algorithms:

// built-in function (quick-sort O(nlogn)):
// const arr = [1, 2, 3, -4, 5, 6, -999, 999];
// arr.sort(function (a, b) {
//   return a - b;
// });
// bubble sort O(n^2)
// const arr = [1, 2, 3, -4, 5, 6, -999, 999];
// for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < arr.length-1; j++) {
//         if (arr[j]>arr[j+1]) {
//             [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
//         }
//     }
// }
// console.log(arr);

// quick sort O(nlogn)
// const arr = [1, 2, 3, -4, 5, 6, -999, 999];
// function pivoting(n) {
//   if (arr.length <= 1) return arr;
//   const pivot = arr[arr.length - 1];
//   const left = [];
//   const right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// 6. 1  den n e qeder ededlerin icindeki sade  ededleri tapan program yazin
// (ornek 1 den 20 e kimi sade ededler  2,3,5,7,11,13,17,19)

    // function primesUntilN(n) {
    //     const primes =[];
    //     for (let i = 2; i <= n; i++) {
    //         let isPrime = true;
    //         for (let j = 2; j <= Math.sqrt(i); j++) {
    //             if (i%j===0) {
    //                 isPrime = false;
    //                 break;
    //             }
    //         }
    //         if (isPrime) {
    //             primes.push(i)
    //         }
    //     }
    //     return primes;
    // }
    // console.log(primesUntilN(100));
    
