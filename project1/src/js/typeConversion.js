let value = 15;

// Преобразование числа в строку
value = value + '';
value = `${value}`;
value = toString(value);
value = String(value);

// Строку в число
value = Number(value);
value = +value;
value = parseInt(value); // Цулые числа
value = parseFloat(value); // С плавающей точкой

// К булевому значению
value = !!value;
value = Boolean(value);

// Объект к массиву
newArr = [...obj];

// Массив к объекту
newObj = {...obj};

// Из DOM элемента Form в объект
dataObject = Object.fromEntries(dataElement);