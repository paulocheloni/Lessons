//inicio ex 1


    function sum(num1,num2) {
        return num1 + num2
    }

    function sub(num1,num2) {
        return  num1-num2
    }

    function mult(num1,num2) {
        return num1*num2
    }

    function div(num1,num2) {
        return num1/num2
    }

    function mod(num1,num2){
        return (num1%num2)
    }

    // fim ex1 ---- init ex2

    function maior(num1,num2){
        return num1 > num2 ?  num1 :  num2 
    }

    // fim ex2 --- init ex3

    function maiorTres(num1,num2,num3){
        let candidate = num1 > num2 ? num1 : num2;
        candidate = candidate > num3 ? candidate : num3;
        return candidate
    }

    // fim ex3 ---- init ex4

    function isPositive(num){
        if(num > 0){
            return "positive"   
        }
        else if(num < 0){
            return  "negative"
        }
        else{
            return "0"
        }
    }

    // fim ex4 ---- init ex5

    function isTri(ang1,ang2,ang3){
    let answer = sum(sum(ang1,ang2),ang3) === 180 ? "e triangulo" : "nao e triangulo";
    return answer           
    }

//console.log(isTri(60,50,60));

   // fim ex5 ---- init ex6
   
   function chessMoves(piece){
       let pieceLower=piece.toLowerCase()
       switch (pieceLower) {
           case 'tower':return 'linha'
           break;
           case 'bishop': return 'diag'
           break;
           case 'queen':return 'n-any-line'
           break;
           case 'pawn':return 'front-diag'
           break;
           case 'king':return '1-any-line'
           break;
           case 'horse':return 'l-movement'
           break;                
           default: return 'erro peça nao existe'
           break;               
       }
   }
  console.log(chessMoves('quEEn'));
  //fim ex6 ---- init ex7

  function GradeConversor(percent){
      switch (true) {
         case(100 > percent && percent >= 90 ):
            return "A"
            break;
         case(90 > percent && percent >= 80):
            return "B"
            break;
                
         case(80 > percent && percent >= 70):
            return "C"
            break;
         case(70 > percent && percent >= 60):
            return "D"  
              break;
         case(60 > percent && percent >= 50):
              return "E"
              break;
         case( 0 < percent && percent<50):
              return "F"
              break;
          default:
              return "nota incorreta"
              break;
      }      
  }

  console.log(GradeConversor(-5))
// fim ex 7 --- init ex 8

function ContainEven(num1,num2,num3){
    let result = (num1+num2+num3) % 2 === 0 ? true : false;
    return result
    }
    console.log(ContainEven(1,3,3));

// fim ex 8 --- init ex 9

function ContainNotEven(){
    let count = 0;
    for(i in arguments){
        count += arguments[i];
    }
    let answer = count % 2 !== 0 ? true : false;
    return answer
    }  
   console.log(ContainNotEven(2,1,2));

function CalculaLucro(valorVenda,custoProduto){
    if(valorVenda < 0 || custoProduto < 0){
        return "erro , valor invalido"
    }
    else{
        custoReal = custoProduto * 1.2;
        return 1000*(valorVenda-custoReal)
    } 
}

console.log(CalculaLucro(1000,800));

    function CalcSalarioBase(salarioBruto){
        let salarioBase;
        let aliquotaReducao;
        switch (true) {
            case salarioBruto > 5189.82: salarioBase = salarioBruto - 570.88
            break;

            case salarioBruto >= 2594.93 && salarioBruto <= 5189.82: salarioBase = salarioBruto *0.89 
            break;

            case salarioBruto >= 1556.95 && salarioBruto <= 2594.92: salarioBase = salarioBruto * 0.91
            break;

            case salarioBruto <= 1556.94 : salarioBase = salarioBruto * 0.92
            break;
        }
        return salarioBase
    }

    function CalcSalarioLiquido(salarioBase) {
        let salarioLiquido;
        let aliquotaReducao;
        switch (true) {
            case salarioBase <= 1903.98 :
                salarioLiquido = salarioBase                
            break;

            case salarioBase >=1903.99 && salarioBase <= 2826.65 :
                aliquotaReducao = (salarioBase *0.075) - 142.8                 
            break;
            
            case salarioBase >= 2826.66 && salarioBase <= 3751.05 : 
                aliquotaReducao = (salarioBase * 0.15) - 354.8                
            break;

            case salarioBase >= 3751.06 && salarioBase <= 4664.68 : 
                aliquotaReducao = (salarioBase * 0.225) - 636.13                
            break;

            case salarioBase > 4664.68 : 
                aliquotaReducao =  (salarioBase * 0.275) - 869.36                
            break;
            
            default:
                break;           
        }
        salarioLiquido = salarioBase - aliquotaReducao;
        return salarioLiquido
    }

console.log(CalcSalarioLiquido(CalcSalarioBase(3000)))
