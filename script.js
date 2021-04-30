const container = document.querySelector('.container');
const h1 = document.createElement('h1');
const textProducts = document.createElement('p');
const text = document.createElement('p');
const h2 = document.createElement('h2');
const button = document.createElement('button');
const textResult = document.createElement('p');
const products = ["Car", "TV", "Cell Phone"];
const prices = ["10000", "3000", "2000"];


h1.innerHTML = 'Welcome! We have discounts!';
textProducts.innerHTML = `The products that we have are:<br></br> ${products[0]} ${prices[0]}USD, <br></br> ${products[1]} ${prices[1]}USD, <br></br> ${products[2]} ${prices[2]}USD.`;
text.innerHTML = 'We have discount only in certain products.';
h2.innerHTML = 'Click the button below to see the products with discount!';
button.innerHTML = 'Click me';

container.append(h1, textProducts, text, h2, button);

button.addEventListener('click', () => {
   
    products.length = 1;
    const result = products.filter(product => product.length > 1);

    textResult.innerHTML = `The only product with discount is the ${result}!`;
    container.append(textResult);
})
