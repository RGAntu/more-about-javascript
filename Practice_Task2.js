function tellJoke(){
    console.log("why don't scientists trust atoms? Becuse they make up everything!");
}

const jokeInterval = setInterval(()=>{
tellJoke()
}, 2000)

setTimeout(() =>{
clearInterval(jokeInterval)
},10000)