/* Cada função para ocultar ou mostrar os itens de sua lista*/

const container1 = document.querySelector('ul.html'); //lista html
const container2 = document.querySelector('ul.css'); //lista css
const container3 = document.querySelector('ul.js'); //lista js
const container4 = document.querySelector('ul.git'); //lista git
const container5 = document.querySelector('ul.java'); //lista java
const container6 = document.querySelector('ul.react'); //lista react

//Mostrar ou ocultar itens da lista de html
function mostrar1() {
    if (container1.style.display === 'block') {
        container1.style.display = 'none';
    } else {
        container1.style.display = 'block';
    }
}
//Mostrar ou ocultar itens da lista de css
function mostrar2() {
    if (container2.style.display === 'block') {
        container2.style.display = 'none';
    } else {
        container2.style.display = 'block';
    }
}
//Mostrar ou ocultar itens da lista de js
function mostrar3() {
    if (container3.style.display === 'block') {
        container3.style.display = 'none';
    } else {
        container3.style.display = 'block';
    }
}
//Mostrar ou ocultar itens da lista de git-github
function mostrar4() {
    if (container4.style.display === 'block') {
        container4.style.display = 'none';
    } else {
        container4.style.display = 'block';
    }
}
//Mostrar ou ocultar itens da lista de java
function mostrar5() {
    if (container5.style.display === 'block') {
        container5.style.display = 'none';
    } else {
        container5.style.display = 'block';
    }
}
//Mostrar ou ocultar itens da lista de reactJS
function mostrar6() {
    if (container6.style.display === 'block') {
        container6.style.display = 'none';
    } else {
        container6.style.display = 'block';
    }
}

//Acrescentar mais itens a lista de HTML
var informacoesH = JSON.parse(localStorage.getItem("itensH"));

function htmlBtn() {
    if (informacoesH === null) informacoesH = [];

    const notaH = document.querySelector('input#notahtml').value;
    const mylistH = document.querySelector('ul.html');
    const frase = document.createElement("li");
    frase.setAttribute('class', 'li');

    frase.innerText = notaH;
    mylistH.appendChild(frase);
    informacoesH.push(notaH);

    localStorage.setItem("itensH", JSON.stringify(informacoesH));
    document.getElementById('notahtml').value = '';
    document.getElementById('notahtml').focus();
}

//Acrescentar mais itens a lista de CSS
var informacoesC = JSON.parse(localStorage.getItem("itensC"));

function cssBtn() {
    if (informacoesC === null) informacoesC = [];

    const notaC = document.querySelector('input#notacss').value;
    const mylistC = document.querySelector('ul.css');
    const frase = document.createElement("li");
    frase.setAttribute('class', 'li');

    frase.innerText = notaC;
    mylistC.appendChild(frase);
    informacoesC.push(notaC);

    localStorage.setItem("itensC", JSON.stringify(informacoesC));
    document.getElementById('notacss').value = '';
    document.getElementById('notacss').focus();
}

//Acrescentar mais itens a lista de JS
var informacoesJ = JSON.parse(localStorage.getItem("itensJ"));

function jsBtn() {
    if (informacoesJ === null) informacoesJ = [];

    const notaJ = document.querySelector('input#notajs').value;
    const mylistJ = document.querySelector('ul.js');
    const frase = document.createElement("li");
    frase.setAttribute('class', 'li');

    frase.innerText = notaJ;
    mylistJ.appendChild(frase);
    informacoesJ.push(notaJ);

    localStorage.setItem("itensJ", JSON.stringify(informacoesJ));
    document.getElementById('notajs').value = '';
    document.getElementById('notajs').focus();
}

//Acrescentar mais itens a lista de GIT-GITHUB
var informacoesG = JSON.parse(localStorage.getItem("itensG"));

function gitBtn() {
    if (informacoesG === null) informacoesG = [];

    const notaG = document.querySelector('input#notagit').value;
    const mylistG = document.querySelector('ul.git');
    const frase = document.createElement("li");
    frase.setAttribute('class', 'li');

    frase.innerText = notaG;
    mylistG.appendChild(frase);
    informacoesG.push(notaG);

    localStorage.setItem("itensG", JSON.stringify(informacoesG));
    document.getElementById('notagit').value = '';
    document.getElementById('notagit').focus();
}

//Acrescentar mais itens a lista de JAVA
var informacoesJAVA = JSON.parse(localStorage.getItem("itensJAVA"));

function javaBtn() {
    if (informacoesJAVA === null) informacoesJAVA = [];

    const notaJAVA = document.querySelector('input#notajava').value;
    const mylistJAVA = document.querySelector('ul.java');
    const frase = document.createElement("li");
    frase.setAttribute('class', 'li');

    frase.innerText = notaJAVA;
    mylistJAVA.appendChild(frase);
    informacoesJAVA.push(notaJAVA);

    localStorage.setItem("itensJAVA", JSON.stringify(informacoesJAVA));
    document.getElementById('notajava').value = '';
    document.getElementById('notajava').focus();
}

//Acrescentar mais itens a lista de REACTjs
var informacoesR = JSON.parse(localStorage.getItem("itensR"));

function reactBtn() {
    if (informacoesR === null) informacoesR = [];

    const notaR = document.querySelector('input#notareact').value;
    const mylistR = document.querySelector('ul.react');
    const frase = document.createElement("li");
    frase.setAttribute('class', 'li');

    frase.innerText = notaR;
    mylistR.appendChild(frase);
    informacoesR.push(notaR);

    localStorage.setItem("itensR", JSON.stringify(informacoesR));
    document.getElementById('notareact').value = '';
    document.getElementById('notareact').focus();
}

//Função que retorna as informações ('li') armazenadas em localStorage para o site
function safe() {
    const mylistH = document.querySelector('ul.html');
    const mylistC = document.querySelector('ul.css');
    const mylistJ = document.querySelector('ul.js');
    const mylistG = document.querySelector('ul.git');
    const mylistJAVA = document.querySelector('ul.java');
    const mylistR = document.querySelector('ul.react');

    //Retornar a lista de HTML
    var informacoesH = JSON.parse(localStorage.getItem("itensH"));
    if (!informacoesH) var informacoesH = [];

    if (informacoesH.length !== '') {
        informacoesH.forEach(function (informacaoH) {

            var frase = document.createElement("li");
            frase.setAttribute('class', 'li')
            mylistH.appendChild(frase);
            frase.innerText = informacaoH;

        });
    }

    //Retornar a lista de CSS
    var informacoesC = JSON.parse(localStorage.getItem("itensC"));
    if (!informacoesC) var informacoesC = [];

    if (informacoesC.length !== '') {
        informacoesC.forEach(function (informacaoC) {

            var frase = document.createElement("li");
            frase.setAttribute('class', 'li')
            mylistC.appendChild(frase);
            frase.innerText = informacaoC;

        });
    }

    //Retornar a lista de JS
    var informacoesJ = JSON.parse(localStorage.getItem("itensJ"));
    if (!informacoesJ) var informacoesJ = [];

    if (informacoesJ.length !== '') {
        informacoesJ.forEach(function (informacaoJ) {

            var frase = document.createElement("li");
            frase.setAttribute('class', 'li')
            mylistJ.appendChild(frase);
            frase.innerText = informacaoJ;

        });
    }

    //Retornar a lista de GIT_GITHUB
    var informacoesG = JSON.parse(localStorage.getItem("itensG"));
    if (!informacoesG) var informacoesG = [];

    if (informacoesG.length !== '') {
        informacoesG.forEach(function (informacaoG) {

            var frase = document.createElement("li");
            frase.setAttribute('class', 'li')
            mylistG.appendChild(frase);
            frase.innerText = informacaoG;

        });
    }

    //Retornar a lista de JAVA
    var informacoesJAVA = JSON.parse(localStorage.getItem("itensJAVA"));
    if (!informacoesJAVA) var informacoesJAVA = [];

    if (informacoesJAVA.length !== '') {
        informacoesJAVA.forEach(function (informacaoJAVA) {

            var frase = document.createElement("li");
            frase.setAttribute('class', 'li')
            mylistJAVA.appendChild(frase);
            frase.innerText = informacaoJAVA;

        });
    }

    //Retornar a lista de REACTjs
    var informacoesR = JSON.parse(localStorage.getItem("itensR"));
    if (!informacoesR) var informacoesR = [];

    if (informacoesR.length !== '') {
        informacoesR.forEach(function (informacaoR) {

            var frase = document.createElement("li");
            frase.setAttribute('class', 'li')
            mylistR.appendChild(frase);
            frase.innerText = informacaoR;

        });
    }

}

