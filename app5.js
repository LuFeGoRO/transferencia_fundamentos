alert("calcule su tiempo de viaje en horas");
let kilometros_de_distancia= parseint(prompt("ingrese la distancia que va a recorrer en su viaje:"));
let velocidad_promedio=parseInt(prompt("ingrese la velocidad promedio en Km/h: "));
let tiempo_de_viaje = kilometros_de_distancia/velocidad_promedio;

alert("el tiempo de viaje estimado es:"+" "+tiempo_de_viaje+" "+ "horas");
