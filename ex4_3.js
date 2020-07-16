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
    // fazendoa  ultima linha e armazenando em variavel
    for(let j=1;j<=n;j+=1){
        secondLine.push(character);
        secondLine.join('',',');
    }

    // calculando o meio do valor n
    for(i=1;i<totem;i+=1){
        line.push(space);
    }
    line.push(character);
    for(x=1;x<totem;x+=1){
        // adicionando primeiro espaço
        if(x==2){
            line.push(space);
            //adicionando pares de espaços a cada linha
            line.push(character);
        }
            if(x==3){
                //antes de adicionar espaços remove o ultimo elemento
                line.pop()
                for(y=1;y<=2;y+=1){
                    line.push(space);
                }
                line.push(character);          
            }
        
        if(x < totem){
            console.log(line.join('',','))
            line.shift(); 
        }
        if(x == totem-1){
            console.log(secondLine.join('',','));
        }                     
                
    }                      
                               
  }
 
 
 piramidWithSpace(7);