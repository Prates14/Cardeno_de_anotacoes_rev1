/* Cada função para ocultar ou mostrar os itens de sua lista*/

var container1 = document.querySelector('ul.html'); //lista html
var container2 = document.querySelector('ul.css'); //lista css
var container3 = document.querySelector('ul.js'); //lista js
var container4 = document.querySelector('ul.git'); //lista git
var container5 = document.querySelector('ul.java'); //lista java

//Mostrar ou ocultar itens da lista de html
function mostrar1() {
    if(container1.style.display === 'block') {
        container1.style.display = 'none';
    } else {
        container1.style.display = 'block';
    }
}
//Mostrar ou ocultar itens da lista de css
function mostrar2() {
    if(container2.style.display === 'block') {
        container2.style.display = 'none';
    } else {
        container2.style.display = 'block';
    }
}
//Mostrar ou ocultar itens da lista de js
function mostrar3() {
    if(container3.style.display === 'block') {
        container3.style.display = 'none';
    } else {
        container3.style.display = 'block';
    }
}
//Mostrar ou ocultar itens da lista de git-github
function mostrar4() {
    if(container4.style.display === 'block') {
        container4.style.display = 'none';
    } else {
        container4.style.display = 'block';
    }
}
//Mostrar ou ocultar itens da lista de java
function mostrar5() {
    if(container5.style.display === 'block') {
        container5.style.display = 'none';
    } else {
        container5.style.display = 'block';
    }
}

//Acrescentar mais itens a lista de HTML
var informacoesH = [];
var armazenarH = [];

function HtmlBtn() {
    var notaH = document.querySelector('input#notahtml').value;
    var mylistH = document.querySelector('ul.html');
    var frase = document.createElement("li");
    frase.setAttribute('class', 'li')

    if(localStorage.key(0) != null){
        informacoesH = armazenarH
    }

    frase.innerText = notaH;
    mylistH.appendChild(frase);
    informacoesH.push(notaH);
    
    localStorage.setItem("itensH", JSON.stringify(informacoesH));
}

//Acrescentar mais itens a lista de CSS
var informacoesC = [];
var armazenarC = [];

function CssBtn() {
    var notaC = document.querySelector('input#notacss').value;
    var mylistC = document.querySelector('ul.css');
    var frase = document.createElement("li");
    frase.setAttribute('class', 'li')

    if(localStorage.key(1) != null){
        informacoesC = armazenarC
    }

    frase.innerText = notaC;
    mylistC.appendChild(frase);
    informacoesC.push(notaC);
    
    localStorage.setItem("itensC", JSON.stringify(informacoesC));
}

//Acrescentar mais itens a lista de JS
var informacoesJ = [];
var armazenarJ = [];

function JsBtn() {
    var notaJ = document.querySelector('input#notajs').value;
    var mylistJ = document.querySelector('ul.js');
    var frase = document.createElement("li");
    frase.setAttribute('class', 'li')

    if(localStorage.key(2) != null){
        informacoesJ = armazenarJ
    }

    frase.innerText = notaJ;
    mylistJ.appendChild(frase);
    informacoesJ.push(notaJ);
    
    localStorage.setItem("itensJ", JSON.stringify(informacoesJ));
}

//Acrescentar mais itens a lista de GIT-GITHUB
var informacoesG = [];
var armazenarG = [];

function GitBtn() {
    var notaG = document.querySelector('input#notagit').value;
    var mylistG = document.querySelector('ul.git');
    var frase = document.createElement("li");
    frase.setAttribute('class', 'li')

    if(localStorage.key(3) != null){
        informacoesG = armazenarG
    }

    frase.innerText = notaG;
    mylistG.appendChild(frase);
    informacoesG.push(notaG);
    
    localStorage.setItem("itensG", JSON.stringify(informacoesG));
}

//Acrescentar mais itens a lista de JAVA
var informacoesJAVA = [];
var armazenarJAVA = [];

function JavaBtn() {
    var notaJAVA = document.querySelector('input#notajava').value;
    var mylistJAVA = document.querySelector('ul.java');
    var frase = document.createElement("li");
    frase.setAttribute('class', 'li')

    if(localStorage.key(4) != null){
        informacoesJAVA = armazenarJAVA
    }

    frase.innerText = notaJAVA;
    mylistJAVA.appendChild(frase);
    informacoesJAVA.push(notaJAVA);
    
    localStorage.setItem("itensJAVA", JSON.stringify(informacoesJAVA));
}

//Função que retorna as informações ('li') armazenadas em localStorage para o site
function safe() {
    var mylistH = document.querySelector('ul.html');
    var mylistC = document.querySelector('ul.css');
    var mylistJ = document.querySelector('ul.js');
    var mylistG = document.querySelector('ul.git');
    var mylistJAVA = document.querySelector('ul.java');

//Retornar a lista de HTML
    if(informacoesH !== null) {
        var informacoesH = JSON.parse(localStorage.getItem("itensH"));
        if(!informacoesH) informacoesH = []
        informacoesH.forEach(function(informacaoH) {
        
            var frase = document.createElement("li");
            frase.setAttribute('class', 'li')
            mylistH.appendChild(frase);
            frase.innerText = informacaoH;
            armazenarH.push(informacaoH);
            
        });
    }
//Retornar a lista de CSS
    if(informacoesC !== null) {
        var informacoesC = JSON.parse(localStorage.getItem("itensC"));
        if(!informacoesC) informacoesC = []
        informacoesC.forEach(function(informacaoC) {
        
            var frase = document.createElement("li");
            frase.setAttribute('class', 'li')
            mylistC.appendChild(frase);
            frase.innerText = informacaoC;
            armazenarC.push(informacaoC);
            
        });
    }
//Retornar a lista de JS
    if(informacoesJ !== null) {
        var informacoesJ = JSON.parse(localStorage.getItem("itensJ"));
        if(!informacoesJ) informacoesJ = []
        informacoesJ.forEach(function(informacaoJ) {
        
            var frase = document.createElement("li");
            frase.setAttribute('class', 'li')
            mylistJ.appendChild(frase);
            frase.innerText = informacaoJ;
            armazenarJ.push(informacaoJ);
            
        });
    }
//Retornar a lista de GIT_GITHUB
    if(informacoesG !== null) {
        var informacoesG = JSON.parse(localStorage.getItem("itensG"));
        if(!informacoesG) informacoesG = []
        informacoesG.forEach(function(informacaoG) {
        
            var frase = document.createElement("li");
            frase.setAttribute('class', 'li')
            mylistG.appendChild(frase);
            frase.innerText = informacaoG;
            armazenarG.push(informacaoG);
            
        });
    }
//Retornar a lista de JAVA
    if(informacoesJAVA !== null) {
        var informacoesJAVA = JSON.parse(localStorage.getItem("itensJAVA"));
        if(!informacoesJAVA) informacoesJAVA = []
        informacoesJAVA.forEach(function(informacaoJAVA) {
        
            var frase = document.createElement("li");
            frase.setAttribute('class', 'li')
            mylistJAVA.appendChild(frase);
            frase.innerText = informacaoJAVA;
            armazenarJAVA.push(informacaoJAVA);
            
        });
    }
}

