// setTimeout(() =>{
//     console.log('Two seconds are up!');
// }, 2000);

// const names = ['Nati', 'Celine', 'Alejo'];
// const shortNames =  names.filter((name) => {
//     return name.length <= 4
// });

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }
    
//         callback(data)
//     }, 2000)
// };

// geocode('Philadelphia', (data) => {
//     console.log(data);
// });


// const add = ( a, b, callback ) => {
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum)
//     }, 2000)
// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error', undefined)
        callback(undefined, [1, 2, 3])
}, 2000)
}

doWorkCallback((error, result) => {
    if(error) {
        return console.log((error));
    }

    console.log(result);
})