const mainContainer = document.createElement('div');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const p = document.createElement('p');

        

h1.innerHTML = 'Welcome! This text is coming from JavaScript'
h2.innerHTML = 'Click the button to change the page to dark mode'
p.innerHTML = 'Click the button to change the page to light mode'
btn1.innerHTML = 'Dark mode'
btn2.innerHTML = 'Light mode'



document.body.append(mainContainer);
mainContainer.append(h1, h2, btn1);

mainContainer.classList.add('mainContainer');
btn1.classList.add('btn');
btn2.classList.add('btn2');


btn1.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    html.classList.add('dark');
    
    mainContainer.append(p, btn2);
    btn1.remove()
    h2.remove()
})


btn2.addEventListener('click', (e) => {
    const html = document.querySelector('html');
    html.classList.remove('dark');
    
    mainContainer.append(h2, btn1);
    btn2.remove()
    p.remove()
})

