const numbers =[19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30 ];

function isPrime(numbers){

if (numbers <= 1) return false ;

for (let i = 2 ; i < math.sqrt(numbers) ; i++){

    if (numbers % i === 0 )return false;

    }
return true;
}
console.log("Prime Numbers")

 let primeArray = [];

 for (let i = 0 ;  i <= numbers.length ; i++ ){
    if (isprime (numbers[i]))
        primeArray.push(numbers[i]);
 }
 let maxPrime = primeArray;

 let minPrime = primeArray;
 
 let sumPrime = 0;

 for (let i =o ; i <= primeArray.length ; i++){

    if (primeArray[i]>maxPrime){

        maxPrime= primeArray[i];

    }
    console.log("Maximum Prime")

    if (primeArray[i]>minPrime){

        minPrime=primeArray[i];

    }
    console.log("Minimum Prime")

    sumPrime += primeArray[i]
}
console.log("sum prime")
