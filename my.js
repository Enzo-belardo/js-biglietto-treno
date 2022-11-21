let chilometri= parseInt(prompt('Inserisci chilometri'));
let anni= parseInt(prompt('Anni'));
const prezzo= ('0.21')
let costo= prezzo * chilometri;
console.log(costo)

document.getElementById('output').innerHTML= costo;