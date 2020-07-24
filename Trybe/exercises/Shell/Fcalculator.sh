#!/bin/bash
function calculator(){
    echo "You entered the function calculator:"
    echo "------------------------------------"
    echo "choose a option"
    echo "----------"
    echo "1. Sum"
    echo "2. minus"
    echo "3. mult"
    echo "4. division"
    echo "5. exit "
    read option
    case $option in
        1) Sum
        ;;
        2) Minus
        ;;
        3) Mult
        ;;
        4) Division
        ;;
        5) exit
        ;;
        *) "opcao desconhecida."; echo ; calculator;;
    esac
    

}



Sum() {
    echo "Type the first term"
    read number_1
    echo "Type the second term"
    read number_2
    echo ------------------------
    echo "o resultado e" 
    echo 
    RESULT= expr $number_1 + $number_2
    calculator
    

}

Minus() {
    echo "Type the first term"
    read number_1
    echo "Type the second term"
    read number_2
    echo ------------------------
    echo "o resultado e" 
    echo 
    RESULT= expr $number_1 - $number_2   
    calculator

}

Mult() {
    echo "Type the first term"
    read number_1
    echo "Type the second term"
    read number_2
    echo ------------------------
    echo "o resultado e" 
    echo 
    RESULT= expr $number_1 * $number_2
    calculator

}

Division() {
    echo "Type the first term"
    read number_1
    echo "Type the second term"
    read number_2
    echo ------------------------
    echo "o resultado e" 
    echo 
    RESULT= expr $number_1 / $number_2
    calculator


}

calculator
