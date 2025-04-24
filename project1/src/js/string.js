let singleQuote = 'quote';
let doubleQuote = "quotes";

let cars = "BMW \nMersedes \n";
console.log(cars);

console.log(`I'm Dima\\`);
console.log('Dima'.length);

const name = "Vasia";
console.log(name[2]);
console.log(name.at(3));

for (let char of name) {
    console.log(char)
}

console.log(name[2].toUpperCase());
console.log(name.indexOf('ia'));
console.log(name.includes('si'));
console.log(name.slice(0, 3));
console.log(name.codePointAt(1));

let str = "";
for (let i = 65; i <= 220; i++) {
    str += String.fromCodePoint(i);
}
console.log(str);

const str1 = 'DIma';
const str2 = 'Vasia'
console.log(str1.localeCompare(str2));


 //Переводит первую букву в строке в верхний регистр

function ucFirst(str) {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
};
console.log(ucFirst("home alone"));

// Проверяет строку на наличие спам слов

function checkSpam(str) {
    let str2 = str.toLowerCase();
    if (str2.includes('viagra') || str2.includes('xxx')) {
        console.log(true);
    } else {
        console.log(false);
    }
};
checkSpam('free xxxxx');
checkSpam('buy ViAgRA now');
checkSpam("innocent rabbit");

// Обрезает строку до определенной длинны

function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        console.log(str);
    }else {
        let shortCut = str.slice(0, (maxlength - 1)) + "…";
        console.log(shortCut);
    }
};
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
truncate("Всем привет!", 20);

// Выводит число из строки

function extractCurrencyValue(str) {
    let number = '';
    for (let i of str) {
        if ( !isNaN(i)) {
            number += i;
        }else{
            continue;
        }
    }
    console.log(+number);
}
extractCurrencyValue('$120');
extractCurrencyValue('ghjfhk34kdfkld');
