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

const buttonElement = document.querySelector('[data-button]');

buttonElement.addEventListener('mouseover', () => {
    console.log('курсор навели на кнопку')
})