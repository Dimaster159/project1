// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 3) {
//     console.log(i);
//     i++;
// }

// let j = 10;
// do {
//     console.log(j);
// } while (j < 5);

// const myArray = ['firs', 'second', 'third']; // Перебор массива
// myArray.forEach((e, i) => {
//     console.log(e, i);
// });

// const obj = {           // Перебор объекта/массива
//     x: 1,
//     y: 'string',
//     z: true,
// }
// for (const k in obj) {
//     console.log(obj[k]);
// }

// const str = 'Dima';         // Перебор строки/массива
// for (const letter of str) {
//     console.log(letter);
// }

// let num = 2 + 5;

// switch (true) {
//     case num > 2:
//         console.log('не то');
//         break;
//     case 5:
//         console.log('опять не то');
//         break
//     case 7:
//         console.log('вот это то');
//         break;
//     default:
//         console.log('нет ответа');
// }

// const seyHello = (name) => {
//     console.log(`Hello ${name}`);
// }

// setTimeout(seyHello, 2000, "Dima");

const loadPostFormElement = document.querySelector('.load-post-form');
const resultElement = document.querySelector('.result');
const postIdInputElement = document.querySelector('#post-id');
const createPostFormElement = document.querySelector('.create-post-form');
const searchPostFormElement = document.querySelector('.search-post-form');
const postViewsInputElement = document.querySelector('#post-views');

loadPostFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/posts/${postIdInputElement.value}`)
        .then((response) => {

            if (!response.ok) {
                const errorMessage = response.status == 404
                    ? "Пост по указанному ID нет"
                    : "Что-то пошло не так :("

                throw new Error(errorMessage);
            }

            return response.json()
        })
        .then((json) => {
            console.log(json);

            const { title, views } = json;

            resultElement.innerHTML = `
                <p>${title}, просмотров: ${views}</p>
            `
        })
        .catch((error) => {
            resultElement.innerHTML = error.message;
        })
})

createPostFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(createPostFormElement);
    const formDataObject = Object.fromEntries(formData);

    fetch('http://localhost:3000/posts', {
        method: 'post',
        body: JSON.stringify({
            ...formDataObject,
            views: 0,
        })
    })
        .then((response) => {
            console.log('response', response)
            return response.json()
        })
        .then((json) => {
            console.log('json:', json)
        })
})

searchPostFormElement.addEventListener('submit', (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/posts?views_gte=${postViewsInputElement.value}`)
    .then((response) => response.json())
    .then((json) => {
        console.log(json)

        resultElement.innerHTML = json
        .map(({title, views}) => `<p>${title}, просмотров: ${views}</p>`)
        .join('');
    })
})