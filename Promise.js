
'use strict'

const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Stuff Worked');
    } else {
        reject('Error, it broke!');
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Olá');
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Renan');
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Procurando por algo?')
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => {
        console.log(values);
    })

promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('error!'))
    .then(result3 => {
        console.log(result3 + '!');
    })
