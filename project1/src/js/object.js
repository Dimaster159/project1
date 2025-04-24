const user = {}; // Объявление объекта
user.age = 35; // Добавление элемента в объект
user.name = 'Dima';
user.prof = 'frontend';

delete user.prof; // Удаление объекта

const city = 'myCity';
user[city] = 'Ufa';
user['hasCar'] = true;

const house = {
    floors: 2,
    square: 102.5,
}
user['house'] = house;

const car = 'Lada';
const model = 'Vesta';

const cars = {
    car,
    model,
    myCar: function () {         // Функция в объекте
        console.log(this.car);
    },
    myModel() {                  // Короткая запись функции
        console.log(this.model)
    }
}

// Копирование объекта

const copyUser1 = Object.assign({}, user); // Ссылки на вложенные объекты сохраняються
const copyUser2 = {...user}; // Ссылки на вложенные объекты сохраняються
const copyUser3 = JSON.parse(JSON.stringify(user));

// globalThis - глобальный объект

console.log(copyUser1)
console.log(user);
console.log(user.age);
console.log(user.house.floors);
cars.myCar();
cars.myModel();