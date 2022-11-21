let chilometri= parseInt(prompt('inserisci chilometri'));
let anni= parseInt(prompt('anni'));
const prezzo= 0.21;
let costo= prezzo * chilometri;
console.log(costo)

document.getElementById('output').innerHTML= costo;

if (anni < 18){
    costo= costo*0.8;
}else{
    costo= costo;
}
document.getElementById('output-min').innerHTML= costo;

if (anni > 60){
    costo= costo*0.6;
}else{
    costo= costo;
}

document.getElementById('output-max').innerHTML= costo;