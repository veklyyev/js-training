// task 1

function getSmth() {
    return Promise.resolve(new Promise((resolve) => {
        setTimeout(() => resolve("Hello World"), 2000);
    }));
}

console.log("start");
getSmth().then(result => console.log(result));


// task 2
function isEven(num) {
    if (typeof num != 'number' || num === 0)
        return Promise.reject('should be greater then 0 or number');
    return Promise.resolve(num % 2 === 0);
}

isEven(0)
    .then(result => console.log(result))
    .catch(error => console.error(error));
// Output: should be greater then 0 or number

isEven(3)
    .then(result => console.log(result))
    .catch(error => console.error(error));
// Output: false

// task 3
test = () => {
    return Promise.resolve('Yurii')
        .then(data => {
            return data;
        })
        .then(data => {
            return data.charAt(0);
        })
        .then(data => {
            return data.charCodeAt();
        })
        .then(data => {
            return data - 40;
        })
        .then(data => {
            return Math.sqrt(data);
        });
};

test().then(result => console.log(result)); // Output: 7


// task 4
function getProducts(productsFn) {
    let products = ['Bread', 'Butter', 'Water'];
    setTimeout(() => productsFn(products), 2000);
}

function getPrices(pricesFn) {
    let prices = [10, 20, 15];
    setTimeout(() => pricesFn(prices), 1000);
}

getProducts(products => console.log(products));
getPrices(prices => console.log(prices));

Promise.all([
    new Promise((resolve) => getProducts(resolve)),
    new Promise((resolve) => getPrices(resolve)),
])
    .then(([products, prices]) => {
        const result = products.map((product, index) => ({
            product,
            price: prices[index],
        }));
        console.log(result);
    })
    .catch((error) => console.error(error));
    
// Output:
// [
//     { product: 'Bread', price: 10 },
//     { product: 'Butter', price: 20 },
//     { product: 'Water', price: 15 }
//   ]

function getProductsPromise() {
    return new Promise((resolve) => {
        getProducts(resolve);
    });
}

function getPricesPromise() {
    return new Promise((resolve) => {
        getPrices(resolve);
    });
}

