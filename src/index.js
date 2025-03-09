//Desafio de projeto #2 - Calculadora de partidas rankeadas

let rankedELO = getWinAndLost(120 , 25);

function getWinAndLost(wins , losts){
    let userName = "Levityy";
    let saldo = wins - losts;
    let ELO = "";

if(saldo < 10){
    ELO = "Ferro";
}else if(saldo <= 20){
    ELO = "Bronze";
}else if(saldo <= 50){
    ELO = "Prata";
}else if(saldo <= 80){
    ELO = "Ouro";
}else if(saldo <= 90){
    ELO = "Platina";
}else if(saldo <= 100){
    ELO = "Diamante";
}else{
    ELO = "Desafiante";
}

console.log("Parabéns " + userName + "! Você está com um saldo de " + saldo + " de vitórias para derrotas e está no ELO " + ELO + "!")

}