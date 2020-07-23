
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",    
  };

function ex1(info){
    console.log(`Bem-vinda ${info.personagem}`);
}

function ex2(info){
  info.recorrente = 'Sim';
  console.log(info);   
}

function ex3(info){
    for(let key in info){
        console.log(key);
    }    
}

function ex4(info){
    for(let key in info){
        console.log(info[key]);
    }
}

function ex5(info){
    let secondObject = {};
    let addElements = ['Tio patinhas', 'Christmas on Bear Mountain, Dells Four Color Comics #178','O ultimo MacPatinhas', 'Sim']
    let count = 0
    for (key in info){
        if( info[key] != addElements[count]){        
            secondObject[key] = info[key]  + ' e ' + addElements[count];
            count += 1;
        }     
    }    
    console.log(secondObject);
}

ex2(info);
console.log('ex3');
ex3(info);
console.log('ex4');
ex4(info);
console.log('ex5');
console.log('----')



function ex1_funcoes_palindrom(word){
    // separar a string em uma array com suas letras
    let letters = word.split();    
    //inverter a array
    //juntar a array invertida e printar    
    let palavraInvertida = InverteLista(letters);
    console.log(palavraInvertida);
    palavraInvertida === word ? console.log('é palindromo') : console.log('não é palindromo');    
}

function InverteLista(lista){
    listaInvertida = [];
    for(i in lista){
        listaInvertida.push(lista.pop());
    }    
    return listaInvertida.join('',',');
}

ex1_funcoes_palindrom('poop'); 

function ex_2(lista_inteiros){   
    //retorna o indice do maior valor dos numeros 
    return IndexOfGreater(lista_inteiros)     
}

function IndexOfGreater(arrayNumbers){
    let greater = -Infinity
    let index = 0
    for (i=0;i<arrayNumbers.length;i++){
        if(arrayNumbers[i] > greater){
            greater = arrayNumbers[i];
            index = i
        }
        
    }
    return index
}

ex_2([2,3,4,5,6,8,220,100])

function ex_3(lista_inteiros){
    return console.log(IndexOfLesser(lista_inteiros));
}

function IndexOfLesser(arrayOfNumbers){
    let array = [].concat(arrayOfNumbers);
    let lesser = Infinity
    let index = 0
    for (i=0;i<array.length;i++){
        if(array[i] < lesser){
            lesser = array[i];
            index = i
        }        
    }
    return index
}

ex_3([2,5,5,5,-5555,55]);

function ex_4(palavras){
    //copia de array
    let arrayPalavras = [].concat(palavras);
    let maiorNLetras = 0
    let maiorNome = '';
      //separa cada palavra      
    for (let palavra in arrayPalavras){
        //conta as letras em cada palavra        
        let qLetrasAtual = contaLetras(arrayPalavras[palavra]) 
         //se a quantidade de letras for a maior , ela é gravada em variavel  
        if(qLetrasAtual > maiorNLetras){
            maiorNLetras = qLetrasAtual;
            maiorNome = arrayPalavras[palavra];
        }        
    }
    // apos o loop retorna a maior palavra
    return console.log(maiorNLetras,maiorNome);      
     
}

let contaLetras  = function ContaLetras(palavra){    
   let letras = palavra ;
   let count = 0; 
   for (let i in letras){
       count+=1;              
   }
   return count 
}

function ex4_opcao2(listaNomes){
    //para cada nome contar quantas letras e comparar com as demais
    //utilizando 
    // fazendo uma cópia do array
    let nomes = [].concat(listaNomes);
    let maiorPalavra ;
    let maiorQLetras = 0;
    
    nomes.forEach((function (nome,index, nomes) {   
       let contadora = contaLetras(nome) ; 
       if(contadora > maiorQLetras){
           maiorQLetras = contadora;
           maiorPalavra = nomes[index];
       }
       if (index == nomes.length-1){
       return maiorPalavra
       }
    }))            
    return console.log(maiorPalavra);
}

function ex_5(listaInteiros){
    for (let numero in listaInteiros){
        for(i in listaInteiros){
            let contador
        }
    }
    //percorrer a lista / comparar e retornar o maior valor


}

ex_4(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

ex4_opcao2(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);





  
