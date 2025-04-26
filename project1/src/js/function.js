function sum(a, b) {
    let c = (a + b) * 5;
    return c;
}
let sum1 = sum(5, 26);
console.log(sum1);

// Колбэк функции

function sayMyAge() {
    console.log(35);
}
function collback(fn) {
    fn();
}
collback(sayMyAge);

function sayMyName() {
    console.log('Dima')
}
setTimeout(sayMyName, 1000);

const arrFn = (a, b) => {
    const c = a + b;
    return console.log(c);
}

arrFn(5, 97);

let b = a => a += 1;
console.log(b)

const multyByFactor = (value, multipli = 5) => {
    return value * multipli;
}

console.log(multyByFactor(25, 6));
console.log( Date());

const newPost = (post, addetAt = Date()) => {
    return {
        ...post,
        addetAt,
    }
}

const post1 = {
    id: 1,
    author: 'Dima',
}

console.log(newPost(post1));

const userProfile = {
    name: 'Dima',
    coments: 23,
}

const userInfo = ({name, coments}) => {
    if (!coments) {
        return `User ${name} has not comments`;
    }
    return `User ${name} has ${coments} comments`;
}

console.log(userInfo(userProfile));

const u = 5;
const y = 10;

function isTrue() {
    if (u > 10 || y <= 10){
        return console.log(true);
    }
}

isTrue();