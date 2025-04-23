// // Создание массива

// let arr1 = new Array();
// let arr2 = [];
// let cars = ["Lada Vesta", "BMW", "Ford"];
// console.log(cars);

// // Вызов, добавление и замена элементов массива

// console.log(cars[1]);
// cars[1] = "Vaz 2114";
// cars[3] = "Vaz 2111"
// console.log(cars);

// // Получить последний элемент массива

// console.log(cars.at(-1));

// // Добавление, удаление элемента массива

// console.log(cars.pop()); // Удаляет и возвращает первый элемент
// cars.push("Mustang"); // Вставить элемент в конец
// console.log(cars.shift()); // Удаляет и возвращает последний элемент
// cars.unshift("Camaro"); // Вставить элемент в начало
// cars.splice(1, 1); // Удаляет 1 элемент начиная с индекса 1
// cars.splice(0, 1, "Давай", "танцевать"); // Удалит первые 2 элемента и заменит 
// cars.splice(2, 0, "сложный", "язык"); // Добавит элементы в указанную позицию

// arr1.concat(arr1, arr2); // Объеденяет массивы

// // Перебор элементов массива

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }
// for (let car of cars) {
//     console.log(car);
// }
// cars.forEach((item, index, arrey) => {
//     console.log(`У элемента ${item} в массиве` + arrey + ` индекс = ${index}`)
// })

// // Многомерный массив

// let arrs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(arrs[1][1]);

// // Поиск элементов в масиве

// cars.includes('Ford');
// cars.indexOf('Mustang');

// let result = cars.find(function (item, index, array) { });// Перебор массива объектов возвращает элемент объекта
// let result2 = cars.findIndex((value, index, array) => { }) // Возвращает индекс элемента
// let result3 = cars.findLastIndex((value, index, array) => { }) // Возвращает последний индекс элемента
// let result4 = cars.filter(function (item, index, array) { }) // Возвращает массив всех подходящих элементов
// let result5 = cars.map(function (item, index, array) { }); // Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
// cars.sort(); // Сортирует массив как строки и изменяет его
// cars.reverse(); // Меняет порядок элементов
// // cars.split(); // Преобразует массив из строки по разделителю
// cars.join(";"); // Объеденяет массив в строку
// // cars.isArrey(); // Проверяет на массив 
// Array.from(); - создает массив из итерируемого объекта


// // Задачи

// let styles = ['Джаз', 'Блюз'];
// styles.push("Рок-н-рол");
// styles[((styles.length - 1) / 2).toFixed(0)] = "Классика";
// console.log(styles.shift());
// styles.unshift("Рэп", "Рэгги");

// function camelize(str) {
//     console.log(str
//         .split('-')
//         .map(
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join('')
//     );
// }

// camelize("background-color");
// camelize("-webkit-transition");
// camelize("list-style-image")

// function filterRange(arr, a, b) {
//     let filterArr = arr.filter(item => (a <= item && item <= b));
//     console.log(filterArr);
// }
// let arr = [5, 3, 8, 1];
// filterRange(arr, 1, 4);

// let arr3 = [5, 2, 1, -10, 8];

// arr3.sort((a, b) => b - a).reverse();
// console.log(arr3);

// function copySorted(array) {
//     let arrCopy = array.map((element) => element);
//     arrCopy.sort((a, b) => b - a);
//     console.log(arrCopy);
// }
// let array5 = ["HTML", "JavaScript", "CSS"];
// copySorted(array5);

// function calculate(str) {
//     let split = str.split(' ');
//         if (split[1] == '+') {
//             console.log(+split[0] + +split[2]);
//         } else if (split[1] == '-') {
//             console.log(+split[0] - +split[2]);
//         }
    
// }

// calculate('2 - 3');

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => ({
//     fullName : (item.name + ' ' + item.surname), 
//     id: users.id
// }));

// console.log( names[0].fullName );

// let vasya1 = { name: "Вася", age: 25 };
// let petya1 = { name: "Петя", age: 30 };
// let masha1 = { name: "Маша", age: 28 };

// let arrsen = [ vasya1, petya1, masha1 ];

// function sortByAge(ages) {
//     ages.sort((a, b) => a.age - b.age);
// }

// sortByAge(arrsen);
// console.log(arrsen[1].name);

// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2
// };

// let arr = Array.from(arrayLike); // создаёт новый массив и копирует туда все элементы.
// console.log(arr.pop());