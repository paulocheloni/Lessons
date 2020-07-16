function squares(n){
    let character = "*";
    let word = [];
    for(x=0;x<n;x++){
        word.push(character);            
    }
    for(i=0;i<n;i++){
        console.log(word.join('',','));        
    }
    
}

squares(4)

function triangle(n){
    let character = '*'
    let word = [];
    for(let i=0;i<n;i+=1){
        word.push(character)
        console.log(word.join('',','))
    }  
}

triangle(4);

function InvertedTriangle(n){
    space = ' '   
    character = '*';
    word = [];
    for (x=0;x<n;x+=1){
        word.push(space);
    }

    
    for (i=0;i<n;i+=1){
        word.push(character);
        word.shift(' ')
        console.log(word.join('',','));
    }
}
InvertedTriangle(4);

function piramid(n){
    space = " ";
    character = "/";
    word = []

    for(x=Math.ceil(n/2);x>1;x-=1){
        word.push(space);            
    }

    for(i=n;i>=0;i-=2){        
        word.push(character);
        if(i<n){
            word.shift();
            word.push(character);   
        }             
        console.log(word.join('',','))        
    }
}  
 

 function piramidWithSpace(n){
    let space = " ";
    let character = "*";
    let line = [];
    let secondLine = [];
    const totem= Math.ceil(n/2);
    // fazendo a  ultima linha e armazenando em Array
    for(let j=1;j<=n;j+=1){
        secondLine.push(character);
        secondLine.join('',',');
    }
    // calculando o meio do valor n e adicionando espaços iguais a esse valor na primeira linha
    for(i=1;i<totem;i+=1){
        line.push(space);
    }
    //primeira linha
    // adicionando primeiro caracter
    line.push(character);
    for(x=1;x<totem;x+=1){
        
        if(x==2){
            //segunda linha
            // adicionando primeiro espaço
            line.push(space);
            //adiciona segundo caracter
            line.push(character);
        }
        if(x>=3 && x<=totem-1){
            //terceira linha até a penultima
            //antes de adicionar pares de espaços, remove o segundo caracter
            line.pop()
            for(y=1;y<=2;y+=1){
                line.push(space);
            }
            // readiciona o segundo caracter anteriormente removido para adiçao de espaços
            line.push(character);          
        }    
        //removendo um espaço por linha até imediatamente antes da linha "totem-1"
        if(x < totem){
            console.log(line.join('',','))
            
            line.shift(); 
        }
        //adicionando ultima linha
        if(x == totem-1){
            console.log(secondLine.join('',','));
        }                 
    }                                             
  }  
 piramidWithSpace(13);

 function ISPRIME(n){
     //lista de numeros contando de 2 em diante até o valor do de "n"
     let divisiveis = [];
     let resto ;
     
     for(let i=2;i<n;i+=1){
         resto = n % i;
         if( resto === 0){
            console.log(`não é primo ${i}`);
            
            break;
        }        
     }
     console.log(divisiveis);
     if(divisiveis[0] == null){
        console.log(`é primo `)
     }
 }
 ISPRIME(5);