
// setTimeout
// setTimeout(() => {
//     console.log("Hello setTimeout")
// }, 3000);

// setInterval
let count = 0;
const clockId =  setInterval(()=>{
    count++;
    // count = count + 1;
    console.log(count)

    if(count >= 5){
        clearInterval(clockId)
    }
    
}, 3000)

// console.log(clockId);
