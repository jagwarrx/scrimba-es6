/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

const myData = new Promise((resolve, reject) => {
    setTimeout(() => {
    const found = true
    if(found){
        resolve({city: "Seattle", temperature: 27});
    }
    else{
        reject("data not found");    
    }
    }, 3000)
});


myData
.then( (success) => console.log(success))
.catch( (error) => console.log(error))

