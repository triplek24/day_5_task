//Task are done by the Arrow functions
//Print odd number in an array 
     const num=[1,8,88,77,25,99,445];

            console.log(num.filter((val)=>(val%2)!==0))
             //output [1,77,25,99,445]
//Convert all the strings to title caps in a string array

             var words =["life","is","a","circle","win","guy","lose","lose guy win"];
             const uppercased = words.map(letters => letters.toUpperCase());
             console.log(uppercased);
 //output [ 'LIFE', 'IS', 'A', 'CIRCLE', 'WIN', 'GUY', 'LOSE', 'LOSE GUY WIN' ]
             //Sum of all numbers in an array
	
	var sum = [150,52,45,56,443,426];	
//Sum of all numbers in an array
	var sum = sum.reduce((acc,cur)=>{
		acc = acc+cur;
		return acc;//return the sum of first and second value
	})
console.log(sum);
//Return all the prime numbers in an array
	
const newArray = [1, 3, 2, 5, 10];
const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
const myPrimeArray = newArray.filter(isPrime);
console.log(myPrimeArray);

//Return all the palindromes in an array 

		var pal = ["karthi","venketsh","senthil","nandha gopalu","MYAMMA","MYSOUL"]

		var palindromes = pal.filter((val)=>val.split("").reverse().join("")===val)

		console.log(palindromes);
		/*expected ouput
		print odd number : [ 1, 77, 25, 99, 445 ]
		
		Convert all the strings to title caps in a string array:
		[ 'LIFE', 'IS', 'A', 'CIRCLE', 'WIN', 'GUY', 'LOSE', 'LOSE GUY WIN' ]
		
		Sum of all numbers in an array: 1172
		 
		Return all the prime numbers in an array: [ 3, 2, 5 ]
		
		Return all the palindromes in an array :[]
		*/
		
		
		
		
