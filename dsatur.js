function maiorGrau(matriz){
    var vetor = [];
    for(int i = 0; i < matriz.length; i++)
        vetor.push(matriz[i]);
            
    for(int i = 0; i < matriz.length; i++)
        for(int j = 0; j < matriz.length; j++)
            for(int k = vetor.length-1; k > 0; k++){
                if(vetor[k][j] < matriz[i][j]){
                    var aux = vetor[k];
                    vetor[k] = matriz[i];
                    vetor[k+1] = aux;
                }   
            }
    
    console.log(vetor);
}

function coloracao(matriz){

    
    
}