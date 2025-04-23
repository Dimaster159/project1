// let map = new Map(); // – создаёт коллекцию.
// map.set('key', 'value').set(1, "num1"); // – записывает по ключу key значение value.
// map.get("key"); // – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has("key"); //– возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete("key"); // – удаляет элемент (пару «ключ/значение») по ключу key.
// map.clear(); // – очищает коллекцию от всех элементов.
// map.size; // – возвращает текущее количество элементов.

// // Перебор Мар

// map.keys(); // – возвращает итерируемый объект по ключам
// for (let vegetable of map.keys()) {
//     console.log(vegetable);
// }
// map.values(); // – возвращает итерируемый объект по значениям
// for (let amount of map.values()) {
//     alert(amount);
// }
// map.entries(); // – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.
// for (let entry of map) { // то же самое, что и map.entries()
//     alert(entry);
// }
// // выполняем функцию для каждой пары (ключ, значение)
// map.forEach((value, key, map) => {
//     console.log(`${key}: ${value}`);
// });

// // Получение Мар из объекта и обратно

// let user = {
//     name: 'Dima',
//     age: 35,
// }
// let map1 = new Map(Object.entries(user));
// let obj1 = Object.fromEntries(map);