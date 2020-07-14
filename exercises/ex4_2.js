let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function Exercise1_print(numbers) {
    for(let i in numbers){
        console.log(numbers[i]);
    }
}

function Exercise2_sum(numbers) {
    let sum = 0;
    for(i in numbers){
        sum += numbers[i];
    }    
}

function Exercise3_(numbers) {
    let sum = 0;
    let count = 0;
    
    for(let i in numbers){
        sum += numbers[i];
        count += 1;
    }
    console.log(sum/count);
}


function Exercise4_(numbers) {
    let sum = 0;
    let count = 0;
    
    for(let i in numbers){
        sum += numbers[i];
        count += 1;
        if(numbers[i] > 20){
            console.log(numbers[i]);
        }
    }
    console.log(`media ${sum/count}`);
}

function Exercise4_comparison(numbers){
    let result = numbers.filter((number) => number > 20);
    console.log(result);
}
Exercise4_(numbers)
Exercise4_comparison(numbers)

function Exercise5_Maior(numbers){
    let maior = -Infinity;

    for (let i in numbers){
        maior < numbers[i] ? maior = numbers[i] : maior = maior;
    }
    return console.log(maior)
}

Exercise5_Maior(numbers);

function Exercise6_ContaImpar(numbers){
    let count = 0
    for (let i in numbers){
        numbers[i] % 2 !== 0 && numbers[i] > 1 ? count+=1 : count; 
          
    }
    count > 0 ? console.log(count) : console.log('nao exitem valores impares');
    
}

Exercise6_ContaImpar(numbers);

function Exercise7_Menor(numbers){
    let menor = Infinity;
    for(i in numbers){
        numbers[i] < menor ? menor = numbers[i] : menor = menor;
    }
    console.log(menor)
}

Exercise7_Menor(numbers);


function Exercise1_Bonus_Order(numbers){
    let position ;
    let orderedNumbers = [];
    for(i=1;i<numbers.length;i+=1){
        for(j in numbers){
            if(numbers[i]< numbers[j]){
                position = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = position;
            }       
        }
    }
    console.log(numbers) ;
}



function Exercise2_Bonus_Order(numbers){
    let position ;
    let orderedNumbers = [];
    for(i=1;i<numbers.length;i+=1){
        for(j in numbers){
            if(numbers[i]> numbers[j]){
                position = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = position;
            }       
        }
    }
    console.log(numbers) ;
}



function Exercise3_2Bonus_NewxOld(numbers){
    let multiplicador,newNumber;
    let newArray = [];    
    for (i=numbers.length-1;i>=-1;i-=1){
        numbers[i+1] === undefined ? multiplicador = 2:multiplicador = numbers[i+1];
        if(numbers[i] !== undefined){
            newNumber = numbers[i] *multiplicador;
            newArray.push(newNumber);
        }                
    }    
    return newArray
}
console.log(Exercise3_2Bonus_NewxOld(numbers));

function Exercise3_Bonus_NewxOld(numbers){
    let multiplicador, newNumber
    let newArray = [];
    for (i=0;i<numbers.length;i+=1){
        numbers[i+1] === undefined ? multiplicador = 2:multiplicador = numbers[i+1];
        if(numbers[i] !== undefined){
            newNumber = numbers[i] *multiplicador;
            newArray.push(newNumber);
        }                
    }    
    return newArray
}

console.log(Exercise3_Bonus_NewxOld(numbers));