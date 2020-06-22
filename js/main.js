var validar = 0;   // aqui "validar" é uma variável global

function validaIdade(idade){
//    var validar; // aqui "validar" é uma variável local
    if (idade >=18){
        validar = true;
    }else{
        validar = false;
    }
}

var idade = prompt("Qual a sua idade ?")
validaIdade(idade);
console.log(validar); // só funciona quando "validar" é uma variável global