//Crie seu código abaixo dessa linha:
let botaoUm = $('.botao1');
let botaoDois = $('.botao2');
let botoes = $a('button');
let caixaUm = $('.caixa1')

console.log($('.caixa-texto').value) ;
function $(cssSelector){
    return document.querySelector(cssSelector);  
  }
function $a(tagOrClass) {
    return document.querySelectorAll(tagOrClass);
}


 /* ao inves de adicionar uma funçao diretamente no parametro de declaraçao  de addEventListener,
    declare  a funçao anteriormente e chame dentro da funçao anonima, dessa forma , conseguira reaproveitar o codigo */ 
    
function findEvenBox(btnClass){
    for(i in btnClass){
        if(btnClass[i] == Number){
            let numero = btnClass[i]
        }
    }

    return '.caixa'+ toString(numero);
}    
  
function trocaCor(param1, param2, param3, ) {      
    param3.style.color = param2;    
}

function trocaTexto(param1, param2, param3, ) {
    param3.innerText = param2.value;

}





function add(triggerObj,triggerType,action,attr,obj){
    triggerObj.addEventListener(triggerType,function(event){        
        let objetos = obj;
        if(objetos.length == undefined){ 
            action(event, attr,objetos);
        } else {            
            for(let i in objetos){
                action(event, attr,objetos[i]);
    }}})
}


add(botaoUm,'click', trocaCor,'green',botaoDois);

// botaoUm.addEventListener('click', function (event) {    
//     trocaCor(event, 'green', botaoDois);
// });
add(botaoDois,'mouseover',trocaCor,'red',botaoUm);

// botaoDois.addEventListener('mouseover', function (event) {
//     trocaCor(event, 'red', botaoUm);
// });

let objetos = [botaoUm,botaoDois];
add(botaoUm,'mouseout',trocaCor,'black',objetos);

add(botaoUm,'click',trocaTexto,$('.caixa-texto'),caixaUm);

// botaoUm.addEventListener('mouseout', function (event) {
//     let param3 = [botaoUm,botaoDois];
//     for(let i in param3) {
//         trocaCor(event, 'black', param3[i]);
// }});




  
  
  