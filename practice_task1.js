// const setTimeOut = setTimeout(() => {
//     console.log("hello setTimeOut")
// }, 5000);


function delayGreeting(name, delay){
    setTimeout(() => {
        console.log("Hello,", name + "!")
    }, delay);
}

// delayGreeting("Alice", 2000)