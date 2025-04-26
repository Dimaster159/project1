const obj1 = {
    color: 'red',
    color1: 'blue'
}
const obj2 = {
    color: 'green',
    stage: 2,
}

const spred = {
    ...obj1,
    ...obj2
}
console.log(spred);

function concatination(str1, str2) {
    return str1 + ' ' + str2;
}
console.log(concatination('Dima', 'Pastukhov'))

