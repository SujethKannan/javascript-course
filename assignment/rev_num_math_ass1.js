const num = 234567;
const reverseNumber = (num, res = 0) => {
   if(num){
      return reverseNumber(Math.floor(num / 10), (res*10)+(num % 10));
   };
   return res;
};
console.log(reverseNumber(num));