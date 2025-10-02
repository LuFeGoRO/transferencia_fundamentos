alert("calcule su consumo por kilometro");
let kilometros_recoridos=parseInt(prompt("Ingrese los kilometros recoridos: "));
let consumo_litros=parseFloat(prompt("Ingrese su consumo por kilometro en litros"));

let consumo_por_kilometro = kilometros_recoridos*consumo_litros;
alert("Su consumo por kilometro es:"+" "+consumo_por_kilometro +" "+"Litros");