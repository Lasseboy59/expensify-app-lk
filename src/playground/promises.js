const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');
        // resolve({
        //     name: 'Lasse',
        //     age: 45
        // })
        reject('Something went wrong');
    }, 2500)
});
console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error', error);
});

console.log('after');