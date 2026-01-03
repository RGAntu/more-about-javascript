async function AsyncFunc(){
 try{
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
    const data = await res.json();
    console.log(data.joke)

 }
 catch(error){
    console.error(error)
 }
}

AsyncFunc()