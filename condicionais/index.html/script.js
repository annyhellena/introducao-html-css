function verificabtn(nome, idade){
    if(idade >= 18){
        return 'olá, ${nome}.você é maior de idade!';
    }else{
        return 'olá, ${nome}.você é menor de idade!';
    }
}