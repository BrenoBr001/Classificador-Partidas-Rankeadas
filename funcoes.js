let userName = "Orochimaro";
let vitorias;
let derrotas;
var saldo;
var nivel;

//calculo de viorias e derrotas
function calculoNivel(vitorias, derrotas){
         saldo = vitorias - derrotas
        
}
calculoNivel(250,150)

//classificador de nível
if(saldo <= 10){
    nivel = "FERRO"
}else if(saldo >= 10 && saldo <= 20){
    nivel = "BRONZE"
}else if(saldo>= 20 && saldo <= 50){
    nivel = "PRATA"
}else if(saldo >= 50 && saldo <= 80){
    nivel = "OURO"
}else if(saldo >= 80 && saldo <= 90){
    nivel = "DIAMANTE"
}else if(saldo >= 90 && saldo <= 100){
    nivel = "LENDÁRIO"
}else if(saldo > 100){
    nivel = "IMORTAL"
}

//retorno
console.log("O Herói: "+ userName +" tem o saldo total de vitórias de: " + saldo + " e está no nível: " + nivel + "!");