//Create an index.html and linked app.js file.

console.log("is this linked?"); 

//In your app.js file, declare a variable that's value is an array that has at least 10 values in it.

var noodles = [1,2,3,4,5,6,7,8,9,10];
console.log(noodles);

//Create a function that takes two arguments. The first argument should an array, the second argument can be any value. The function should use the push method on the array in the first argument, and push the value from the second argument. Finally this function should return the array that the push method was used on.

var anArray = "a string";

function poodles(argOne, argTwo) {
    argOne.push(argTwo);
    return argOne;
}

//Once you have created the function, call it inside a console.log method. For the two arguments, use your array from step 4 as the first value, and a value of your choosing for the second.

console.log(poodles(noodles, anArray));

//Create a function that takes an array as an argument uses the splice method on that array and then returns that array. You may choose what values to use in the second and third parameter of the splice method.

function doodles(argFive) {
return argFive.splice(2,3,"cow");
}
    
    //Once you have created that function, call it inside a console.log() with the array from step 4 as your argument.
    
    console.log(doodles(noodles));
    
    // Create a function that takes an array as an argument uses the SLICEmethod on that array and assigns that value to a new variable. Your function should then return that variable. You may choose what values to use in the second and third parameter of the splice method.
    
    function newestFunction (argOne) {
        var aWildVariable = argOne.slice(0,4); 
        return aWildVariable;
    }
console.log(newestFunction(noodles)); 

//Once you have created that function, call it inside a console.log() with the array from step 4 as your argument.

