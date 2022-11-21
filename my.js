let chilometri= parseInt(prompt('inserisci chilometri'));
let anni= parseInt(prompt('anni'));
const prezzo= 0.21;
let costo= prezzo * chilometri;
console.log(costo)


if (anni < 18){
    costo= costo*0.8;
}else if (anni > 65){
    costo= costo*0.6;
}

document.getElementById('output').innerHTML= costo;
