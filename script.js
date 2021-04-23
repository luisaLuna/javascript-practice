const container = document.querySelector('.container');
const h1 = document.createElement('h1');
const button = document.createElement('button');
const buttonExtra = document.createElement('button');
const image = document.createElement('img');

h1.innerHTML = 'Hola! Esto es sólo una práctica';
button.innerHTML = 'Click aquí';
buttonExtra.innerHTML = 'Regresar';
image.src = 'https://images.unsplash.com/photo-1585507252242-11fe632c26e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80';


container.append(h1, button);

button.addEventListener('click', () => {
    container.append(image, buttonExtra);
    button.remove()
    h1.innerHTML = 'Esta mi imagen favorita:';
})

buttonExtra.addEventListener('click', () => {
    container.append(button);
    h1.innerHTML = 'Hola! Esto es sólo una práctica';
    image.remove()
    buttonExtra.remove()
})