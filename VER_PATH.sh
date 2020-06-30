#!/bin/bash

# eu sou tryber e...
=======
# Vou ter muito sucesso em programaçao 

VAR=$*

if [ -f $VAR ]
then
   echo "o caminho  $VAR esta habilitado (arquivo) "
   ls -l $VAR
   if [ -w $VAR ]
       then 
            echo "voce tem permissao de escrita no arquivo $VAR"
       else
    echo "voce nao foi autorizado para alterar o arquivo $VAR"
    fi  
elif [ -d $VAR ]
then
    echo "o caminho  $VAR e (diretorio) "
    ls -l $VAR
    if [ -w $VAR ]
       then 
       echo "voce tem permissao de escrita no diretorio contido no caminho $VAR"
    else
       echo "voce nao foi autorizado para alterar o diretorio no caminho $VAR"
    fi
else 
    echo "o caminho $VAR nao existe"
fi


