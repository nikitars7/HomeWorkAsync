
let waiting = prompt('Задайте кол-во задержки в мс', '');


const delay = ms => {
   return new Promise(res => setTimeout(()=> res(), ms))
}

const getData = async(url) => {
await delay(waiting)
.then(() => console.log(`After ${waiting} ms`))
const response = await fetch(url)
console.log('Get data from server' )
return response.json()
.then(responseData => console.log(responseData.filter(el => el.userId === 1)));
}

getData('https://jsonplaceholder.typicode.com/posts')

console.log('Get started')