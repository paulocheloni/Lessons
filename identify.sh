Arguments=$*
N_Arg=$#

echo ${Arguments[@]}


if [ $N_Arg -gt 0 ]
then
    for VAR in ${Arguments[@]}; do 
        if [ -e $VAR ]
        then
            echo "existe"
            if [ -f $VAR ]
            then
                echo "Arquivo"
            elif [ -d $VAR ]
            then 
                echo "Dir"
            else 
                echo "???"
            fi
        else 
            echo "nao existe esse caminho"
        fi
    done
else
    echo "nao foi passado nenhum argumento, tente novamente"
fi

