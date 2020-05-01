// JS is single threaded! then everything operates on the main thread.

// Node has the event loop on the main thread and it takes care of the order of execution
// callbacks are a way to define a function that the event loop then takes care of calling at the right time

// a Promise is syntactic sugar for callbacks so we avoid callback hell (nested functions)

// We use then() for Promise so instead of:

function myFunc() {
    function another() {
        function yetAnother() {

        }
    }

}
//we get:
//myFunc.then().then();

// we use callbacks for async calls, like requests over the net or data from a db, so the app doesn't freeze
// the function should be non-blocking


// we can make the promises ourselves
// a promise can be in states: pending, fulfilled (resolved) and rejected
//it's pending when it's runnning, we need to set the resolve and rejected
new Promise((resolve, reject) => {
    try { setTimeout(() => {
        //resolve takes everything, objects, numbers, strings...
        //this is what happens if everything went well
        resolve("Everything went well");
    }, 4000);
    } catch {reject("something went wrong"); }

}).then(message => console.log(message))
.catch(message => console.log(message)); //the message is the message from resolve in then and from reject in catch


function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I kept my promise");
        }, 5000);

    });
}

// async/await is syntactic sugar for Promises:

const arrowFunction = async () => {
    //without await
   /* myPromise().then(message => {
        console.log(message);
    })*/

    //with await
    const message = await myPromise();
    console.log(message);
}

arrowFunction();