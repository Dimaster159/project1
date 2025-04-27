// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {
//         console.log(response);
//         return response.json();
//       })
//       .then(json => console.log(json));

const getData = (url) =>
    new Promise((resolve, reject) =>
        fetch(url)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(error => reject(error))
    )

getData('https://jsonplaceholder.typicode.com/todos/67')
    .then(data => console.log(data))
    .catch(error => console.log(error.massage))

const asyncFn = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

asyncFn('https://jsonplaceholder.typicode.com/todos/2')
    .then(data => console.log(data))
    .catch(error => console.log(error.massage));