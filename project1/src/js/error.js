const error = () => {
    throw new Error('Some error')
}

try{
error();
} catch(error) {
    console.log(error);
    console.log(error.message)
}

console.log('some thing')