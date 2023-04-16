//exemple learning

const resolvePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Operation finished')
    }, 1000)
})


const rejectPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Operation failed')
    }, 1000)
})

resolvePromise.then((result) => {
    console.log(result);
});

rejectPromise.then((result) => {
    
}).catch((error) => {
    console.error(error)
})


const exemple = new Promise
