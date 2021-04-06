const mainContainer = document.createElement('div');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const button = document.createElement('button');
const button2 = document.createElement('button');

h1.innerHTML = 'This is an element created by JavaScript'
h2.innerHTML = 'Click the below button to delete everything'
button.innerHTML = 'Click me'
button2.innerHTML = 'Reverse Everything'

document.body.append(mainContainer);
mainContainer.append(h1, h2, button);

button.addEventListener('click', () => {
    h1.remove()
    h2.remove()
    button.remove()

    mainContainer.append(button2);
})

button2.addEventListener('click', () => {
    button2.remove()
    mainContainer.append(h1, h2, button);
})