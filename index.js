// Přestupný rok
// Napište program, který pozná, který rok je přestupný.
// Napište program, který po zadání kalendářního roku vypíše, zda jde o rok přestupný, či nikoliv. Letopočet je přestupný, pokud je dělitelný čtyřmi. Pozor však, že roky, které jsou dělitelné 100 jsou přestupné pouze tehdy, jsou-li zároveň dělitelné 400.
document.title = 'Přestupný rok';
const year = Number(prompt('Zadejte rok, např.1995.'));
let result = '';

if (year % 100 === 0) {
  if (year % 400 === 0) {
    result = 'Přestupný rok';
  } else {
    result = 'Nepřestupný rok';
  }
} else if (year % 4 === 0) {
  result = 'Přestupný rok';
} else {
  result = 'Nřestupný rok';
}
document.body.innerHTML += `<h1>${result}</h1>`;
