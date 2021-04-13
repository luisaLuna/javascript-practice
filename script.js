const mainContainer = document.createElement('div');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const h2Time = document.createElement('h2');
const date = document.createElement('p');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
let today = new Date();
        

h1.innerHTML = 'Welcome! This text is coming from JavaScript'
h2.innerHTML = 'Click the button to see the current date and time'
btn1.innerHTML = 'Click me'
btn2.innerHTML = 'Delete'
h2Time.innerHTML = 'The current date and time is:'

document.body.append(mainContainer);
mainContainer.append(h1, h2, btn1);

mainContainer.classList.add('mainContainer');
btn1.classList.add('btn');
btn2.classList.add('btn');
date.classList.add('paragraph');

btn1.addEventListener('click', () => {
    h1.remove()
    btn1.remove()
    h2.remove()
    date.innerHTML = `${today}`
    mainContainer.append(h2Time, date, btn2);
})


btn2.addEventListener('click', () => {
    date.remove()
    mainContainer.append(h1,h2,btn1);
    btn2.remove()
    h2Time.remove()
})
