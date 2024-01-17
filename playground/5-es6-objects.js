// -------Object property shorthand--------

const userName = 'Alejo'
const userAge = 35

const user = {
    userName,
    age: userAge,
    location: 'Buenos Aires'
}

console.log(user);

// --------Object destructuring---------

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.5 + ' stars'
}

// const label = product.label
// const stock = product.stock

// const { label:productLabel, stock, rating = 5 } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock);
}

transaction('order', product)