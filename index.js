// Přestupný rok
// Napište program, který pozná, který rok je přestupný.
// Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv. Letopočet je přestupný, pokud je dělitelný čtyřmi. Pozor však, že roky, které jsou dělitelné 100 jsou přestupné pouze tehdy, jsou-li zároveň dělitelné 400.
document.title = 'Přestupný rok';
const year = Number(prompt('Zadejte rok, např.1995.'));
let result = '';

// if (year % 100 === 0) {
//   if (year % 400 === 0) {
//     result = 'Přestupný rok';
//   } else {
//     result = 'Nepřestupný rok';
//   }
// } else if (year % 4 === 0) {
//   result = 'Přestupný rok';
// } else {
//   result = 'Nepřestupný rok';
// }

// Přestupný rok 2
// Těžší zadání přestupného roku.
// Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv. Rozhodnutí v programu proveďte pouze pomocí jedné podmínky se dvěma větvemi. Nesmíte použít vnořené ani žádné další pomocné podmínky.
// if (
//   (year % 100 === 0 && year % 400 === 0) ||
//   (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) ||
//   (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0)
// ) {
//   result = 'Přestupný rok';
// } else {
//   result = 'Nepřestupný rok';
// }

// Přestupný rok 3
// Ještě o kus těžší zadání přestupného roku.
// Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv.
// Rozhodnutí v programu proveďte pouze pomocí jedné pomínky se dvěma větvemi. Nesmíte použít vnořené ani žádné další pomocné podmínky.
// V celém programu smíte použít pouze dvě logické operace.

if ((year % 100 === 0 && year % 400 !== 0) || year % 4 !== 0) {
  result = 'Nepřestupný rok';
} else {
  result = 'Přestupný rok';
}

document.body.innerHTML += `<h1>${result}</h1>`;

//ŠPATNĚ
//-----------------------------------------------------------------------------------------
// if ((year % 100 === 0 && year % 400 === 0) || year % 4 === 0) { 2024- FUNGOVAT BUDE, X NEPŘESTUPNÝ 1700 bude přestupný
//   result = 'Přestupný rok';
// } else {
//   result = 'Nepřestupný rok';
// }
//-----------------------------------------------------------------

// if ((year % 100 !== 0 && year % 400 === 0) || year % 4 === 0) { PŘESTUPNÝ 2024 bude nepřestupný, nepřestupný 1700 bude nepřestupný
//   result = 'Nepřestupný rok';
// } else {
//   result = 'Přestupný rok';
// }
