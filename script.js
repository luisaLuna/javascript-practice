const mainContainer = document.createElement('div');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const image = document.createElement('img');
        

h1.innerHTML = 'Welcome! This text is coming from JavaScript'
h2.innerHTML = 'Click the button below and you will see my favorite image after 3 seconds'
btn1.innerHTML = 'Click me'
btn2.innerHTML = 'Delete image';

image.src = 'https://images.unsplash.com/photo-1494913148647-353ae514b35e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';

document.body.append(mainContainer);
mainContainer.append(h1, h2, btn1);


btn1.addEventListener('click', () => {
    setTimeout(function () {
        mainContainer.append(image, btn2);
        btn1.remove()
    }, 3000)
});


btn2.addEventListener('click', () => {
    btn2.remove();
    image.remove();
    mainContainer.append(btn1);
})