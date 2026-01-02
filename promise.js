// const handleData = () => {
//  fetch("https://jsonplaceholder.typicode.com/todos/1")
//  .then(res => res.json())
//  .then( data => console.log(data))
//  .catch(error => console.log("Error",error))
// }


// handleData()



// const fetchData = () =>{
//     return new Promise((resolve, reject)=> {
//         const status = true;
//         // const status = false;

//         if(status){
//             resolve({name: "antu"});
//         }
//         else{
//             reject("server error")
//         }
//     })
// }

// fetchData()
// .then(res => console.log(res))
// .catch(error => console.log(error))


// const fetchData = () =>{
//     return new Promise((resolve, reject)=> {
//         const status = true;
//         // const status = false;

//         if(status){
//             const mockData = {
//                 json:() => Promise.resolve({name: "antu"})
//             }
//             resolve(mockData)
//         }
//         else{
//             reject("server error")
//         }
//     })
// }

// fetchData()
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))



const urls = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/photos',
    'https://jsonplaceholder.typicode.com/todos',
    'https://jsonplaceholder.typicode.com/users'

]

Promise.all(urls.map(url =>{
    return fetch(url).then(res => res.json()).then(data => data)
}))
.then(res => res)
.then(data => console.log(data))
.catch(err => console.log(err))