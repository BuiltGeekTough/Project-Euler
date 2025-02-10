export const multiple3or5 = () => {
   const allMultiples = [...Array(1000).keys()].filter(index => index % 3 === 0 || index % 5 === 0);
   return allMultiples.reduce((sum, currentMultiple) => sum + currentMultiple, 0);
};

export const sumEvenFibonacci = () => {
   let prevVal = 1, val = 2, sum = 0, newTerm;
   while (val < 4000000) {
      newTerm = prevVal + val;
      console.log(newTerm);
      if (newTerm % 2 == 0) {
         sum += newTerm;
         console.log(`Adding ${newTerm} to sum`);
      }
      prevVal = val;
      val = newTerm;
   }
   return sum;
}