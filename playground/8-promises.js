const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([1, 4, 3])
        reject('Things went wrong')
        resolve([1, 4, 3])
    }, 2000)
});

doWorkPromise.then((result) => {
    console.log('Success!', result);
}).catch((error) => {
    console.log('Error!', error);
});