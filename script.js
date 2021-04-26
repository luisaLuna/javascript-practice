const container = document.querySelector('.container');
const h1 = document.createElement('h1');
const textProducts = document.createElement('p');
const text = document.createElement('p');
const h2 = document.createElement('h2');
const button = document.createElement('button');
const textFinalPrice = document.createElement('p');
const products = ["orange", "apple", "water"];
const prices = ["6", "7", "8"];

h1.innerHTML = 'Welcome! We have discounts!';
textProducts.innerHTML = `The products that we have are:<br></br> ${products[0]} ${prices[0]}USD, ${products[1]} ${prices[1]}USD, and ${products[2]} ${prices[2]}USD.`;
text.innerHTML = 'We have 12% of discount!';
h2.innerHTML = 'Click the button below to calculate prices with discount!';
button.innerHTML = 'Click me';

container.append(h1, textProducts, text, h2, button);

button.addEventListener('click', () => {
    let finalPrice = prices.map(function (price) {
        let discounts = price * 0.12;
        return price - discounts;
    })

    textFinalPrice.innerHTML = `The prices with discount are: <br></br> ${products[0]}: ${finalPrice[0]}USD,<br></br> ${products[1]}: ${finalPrice[1]}USD, <br></br> ${products[2]}: ${finalPrice[2]}USD.`;
    container.append(textFinalPrice);
})
