CAMINHO=$*
if [ -e $CAMINHO ]
    then
        if [ -d $CAMINHO ]
        then
            LISTAGEM=`ls $CAMINHO`
            COUNT=0
            for ARG in $LISTAGEM;
            do
                COUNT=` expr $COUNT + 1`
            done
            echo "o diretorio  $CAMINHO tem $COUNT arquivos"

        else 
            echo "o caminho $CAMINHO nao 'e diretorio"
        fi
else 
    echo "o caminho $CAMINHO nao existe"
fi    