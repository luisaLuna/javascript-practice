const mainContainer = document.createElement('div');
const secondContainer = document.createElement('div');
const buttonsContainer = document.createElement('div');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const p = document.createElement('p');

        

h1.innerHTML = 'Welcome! This text is coming from JavaScript'
h2.innerHTML = 'Click the button to show 10 buttons!'
p.innerHTML = 'Click the below button to delete the buttons'
btn1.innerHTML = 'Click me'
btn2.innerHTML = 'Click me'



document.body.append(mainContainer, buttonsContainer, secondContainer);
mainContainer.append(h1, h2, btn1);

mainContainer.classList.add('mainContainer');
secondContainer.classList.add('mainContainer');
buttonsContainer.classList.add('buttonsContainer');
btn1.classList.add('btn');
btn2.classList.add('btn2');


btn1.addEventListener('click', () => {
    for (let i = 0; i < 11; i++) {
        let button = document.createElement('button');
        button.innerText =`Button ${i+1}` ;
        button.classList.add('buttons');
        buttonsContainer.append(button);
        secondContainer.append( p, btn2);
    }
    btn1.remove()
    h2.remove()
    h1.remove()
})

btn2.addEventListener('click', (e) => {
    buttonsContainer.remove()
    mainContainer.append(h1, h2, btn1);
    btn2.remove()
    p.remove()
})




