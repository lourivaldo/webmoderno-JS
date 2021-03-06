//Função em Js é First-Class Object (citizens)
// Higher-order function

//criar de forma literal
//bloco é obrigatório na função tradicional 
function fun1(){}

// Armazenar em uma variavel , ou seja, função anônima
const fun2 = function (){}

// Armazenar em um array 
const array = [function (a,b) { return a + b}, fun1, fun2]
console.log(array[0](2,3));

//Armazenar em um atributo de objeto 
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar função como parametro para outra função
function run(fun){
    fun()
}

run(function(){console.log('Executando')});


//Uma função pode retornar/conter uma função
function soma (a,b){
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(4);
// ou
const cincoMais = soma(2,3)
cincoMais(4);
