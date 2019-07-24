 const multiplier = {
     numbers:[2,3,4],
     multiplyBy:8,
     multiply(){
         return this.numbers.map((number) => number* this.multiplyBy);
     }
 };
 console.log(multiplier.multiply());