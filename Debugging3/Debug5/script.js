//Fix the code to return the Prime numbers

//Modern mathematicians define a number as prime if it is divided by exactly two numbers.
//1 can only be divided by one number, 1 itself, so with this definition 1 is not a prime number.

const newArray=[1,3,2,5,10];

const myPrime = newArray.filter(num=>{

        let count = 0;

        for(let i=2;i<=num;i++){

            if(num%i === 0)
            {
                count++;
              //return true;
            }

        }

        if(count === 1) return true;

       // return num === 1;

});


console.log(myPrime);