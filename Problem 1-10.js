export const multiple3or5 = () => {
   const allMultiples = [...Array(1000).keys()].filter(index => index % 3 === 0 || index % 5 === 0);
   return allMultiples.reduce((sum, currentMultiple) => sum + currentMultiple, 0);
};

export const sumEvenFibonacci = () => {
   let prevVal = 1, val = 2, sum = 0, newTerm;
   while (val < 4000000) {
      newTerm = prevVal + val;
      if (newTerm % 2 == 0) {
         sum += newTerm;
         console.log(`Adding ${newTerm} to sum`);
      }
      prevVal = val;
      val = newTerm;
   }
   return sum;
}

export const findLargestPrimeFactor = (num) => {
   let largestPrime = null;
   let factor = 2;
   while (factor * factor <= num) {
      if (num % factor === 0) {
         largestPrime = factor;
         num /= factor;
      } else {
         factor++;
      }
   }
   if (num > 1) {
      largestPrime = num;
   }
   return largestPrime;
}

export const largestPalindromeProduct = () => {
   let largestPalindrome = 0;
   for (let firstFactor = 999; firstFactor >= 100; firstFactor--) {
      for (let secondFactor = firstFactor; secondFactor >= 100; secondFactor--){
         const possiblePalindrome = `${firstFactor * secondFactor}`;
         if (possiblePalindrome === [...possiblePalindrome].reverse().join('') && (firstFactor * secondFactor) > largestPalindrome) {
            largestPalindrome = firstFactor * secondFactor;
         }
      }
   }
   return largestPalindrome;
}

export const smallestMultiple = () => {
   const allUpToTwenty = Array.from(Array(21).keys()).filter(num => num >= 11);
   let possibleMultiple = 20;
   while (true) {
      if (allUpToTwenty.every((val) => possibleMultiple % val === 0)) {
         return possibleMultiple;
      }
      else {
         possibleMultiple+=20;
      }
   }
};

export const sumSquareDiff = () => {
   const [sumSquares, squareSum] = Array.from(Array(101).keys()).reduce(([squares, sum], _, index) => [squares + (index**2), sum + index], [0, 0]);
   return squareSum**2 -  sumSquares;
};

