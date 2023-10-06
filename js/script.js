const luckyNumber = 21;

let fname = prompt ('Ciao! Iniziamo col presentarci, qual è il tuo nome?');
console.log(fname);

let surname = prompt ('Bene, adesso dimmi qual è il tuo cognome');
console.log(surname);

let color = prompt ('Grande! qual è il tuo colore preferito?');
console.log(color);

let newpass = fname + surname + color + luckyNumber;
console.log(newpass);

let complete = `<h3>Complimenti</h3>
hai generato una nuova password super sicura:

<strong> ${newpass} </strong> `;

document.getElementById('generator').innerHTML = complete;
console.log(document.getElementById('generator'));

 

