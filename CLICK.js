const main = document.querySelector("main");


const button =  document.querySelector("#Foo");
const secondButton = document.querySelector("#Bar");
const thirdButton = document.querySelector("#FooBar");

button.addEventListener('click', responseToClick)

function responseToClick() {
    const hTag = document.createElement('h3');
    hTag.textContent = "Foo";
    main.appendChild(hTag);
}

secondButton.addEventListener('click', responseToClick2)

function responseToClick2() {
    const hTag = document.createElement('h3');
    hTag.textContent = "Bar";
    main.appendChild(hTag);
}

thirdButton.addEventListener('click', responseToClick3)

function responseToClick3(){
    const hTag2 = document.createElement('h2');
    hTag2.textContent = "FooBar";
    main.appendChild(hTag2);
}