const mainContainer = document.createElement('div');
const h1 = document.createElement('h1');
const h2 = document.createElement('h2');
        

h1.innerHTML = 'Welcome! This text is coming from JavaScript'
h2.innerHTML = 'Wait 3 seconds to see the background change color'

document.body.append(mainContainer);
mainContainer.append(h1, h2);

let interval = setInterval(colorChange, 3000);

function colorChange() {
    let x = document.body;
     x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "#457b9d" : "yellow";
}