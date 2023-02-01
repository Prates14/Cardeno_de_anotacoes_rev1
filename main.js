/* Cada função para ocultar ou mostrar os itens de sua lista*/

var container1 = document.querySelector('ul.html');//lista html
var container2 = document.querySelector('ul.css');//lista css
var container3 = document.querySelector('ul.js');//lista js

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

//Acrescentar mais itens a lista de HTML
var informacoes_H = [];
var armazenar_H = [];

function HTMLbtn() {
    var nota_H = document.querySelector('input#notahtml').value;
    var mylist_H = document.querySelector('ul.html');
    var frase = document.createElement("li");

    if(localStorage.key(0) != null){
        informacoes_H = armazenar_H
    }

    frase.innerText = nota_H;
    mylist_H.appendChild(frase);
    informacoes_H.push(nota_H);
    
    localStorage.setItem("itensH", JSON.stringify(informacoes_H));
}

//Acrescentar mais itens a lista de CSS
var informacoes_C = [];
var armazenar_C = [];

function CSSbtn() {
    var nota_C = document.querySelector('input#notacss').value;
    var mylist_C = document.querySelector('ul.css');
    var frase = document.createElement("li");

    if(localStorage.key(1) != null){
        informacoes_C = armazenar_C
    }

    frase.innerText = nota_C;
    mylist_C.appendChild(frase);
    informacoes_C.push(nota_C);
    
    localStorage.setItem("itensC", JSON.stringify(informacoes_C));
}

//Acrescentar mais itens a lista de JS
var informacoes_J = [];
var armazenar_J = [];

function JSbtn() {
    var nota_J = document.querySelector('input#notajs').value;
    var mylist_J = document.querySelector('ul.js');
    var frase = document.createElement("li");

    if(localStorage.key(2) != null){
        informacoes_J = armazenar_J
    }

    frase.innerText = nota_J;
    mylist_J.appendChild(frase);
    informacoes_J.push(nota_J);
    
    localStorage.setItem("itensJ", JSON.stringify(informacoes_J));
}

//Função que retorna as informações ('li') armazenadas em localStorage para o site
function safe() {
    var mylist_H = document.querySelector('ul.html');
    var mylist_C = document.querySelector('ul.css');
    var mylist_J = document.querySelector('ul.js');

//Retornar a lista de HTML
    if(informacoes_H !== null) {
        var informacoes_H = JSON.parse(localStorage.getItem("itensH"));
        informacoes_H.forEach(function(informacaoH) {
        
            var frase = document.createElement("li");
            mylist_H.appendChild(frase);
            frase.innerText = informacaoH;
            armazenar_H.push(informacaoH);
            
        });
    }
//Retornar a lista de CSS
    if(informacoes_C !== null) {
        var informacoes_C = JSON.parse(localStorage.getItem("itensC"));
        informacoes_C.forEach(function(informacaoC) {
        
            var frase = document.createElement("li");
            mylist_C.appendChild(frase);
            frase.innerText = informacaoC;
            armazenar_C.push(informacaoC);
            
        });
    }
//Retornar a lista de JS
    if(informacoes_J !== null) {
        var informacoes_J = JSON.parse(localStorage.getItem("itensJ"));
        informacoes_J.forEach(function(informacaoJ) {
        
            var frase = document.createElement("li");
            mylist_J.appendChild(frase);
            frase.innerText = informacaoJ;
            armazenar_J.push(informacaoJ);
            
        });
    }
    
}

