const arrayNumeri = [];

// Funzione per creare le celle della tabella
const createCells = (numeroCelle) => {
  const tombolaContainer = document.getElementById("tombola");

  for (let i = 1; i <= numeroCelle; i++) {
    const cella = document.createElement("div");
    cella.classList.add("cella");
    cella.textContent = i;
    tombolaContainer.appendChild(cella);
    arrayNumeri.push(cella);
  }
};

// Funzione per estrarre un numero casuale da 1 a 76, escludendo i numeri già estratti
function estraiNumero() {
  console.log("Estrazione numero casuale");

  let numero;
  do {
    numero = Math.floor(Math.random() * 76) + 1;
  } while (arrayNumeri[numero - 1].classList.contains("estratto"));

  arrayNumeri[numero - 1].classList.add("estratto", "selected");

  return numero;
}

// Funzione per evidenziare la cella corrispondente al numero estratto
function evidenziaCella(numero) {
  console.log("Evidenzia cella corrispondente al numero " + numero);

  // Rimuovo la classe "selected" da tutte le celle
  arrayNumeri.forEach((cella) => {
    if (cella.textContent == numero) {
      cella.classList.add("selected");
    }
  });
}

// Funzione per il reset della tabella
function resetTabella() {
  console.log("Reset tabella");

  arrayNumeri.forEach((cella) => {
    cella.classList.remove("estratto", "selected");
  });
}

// Creazione della tabella al caricamento della pagina
document.addEventListener("DOMContentLoaded", function () {
  createCells(76); // Creiamo la tabella con 76 celle al caricamento della pagina
});

// Gestore dell'evento di click del bottone per l'estrazione di un numero
document.getElementById("estraiNumero").addEventListener("click", function () {
  let numeroEstratto = estraiNumero();
  console.log("Numero estratto: " + numeroEstratto);
  evidenziaCella(numeroEstratto);
});

// Gestore dell'evento di click del bottone di reset
document.getElementById("reset").addEventListener("click", function () {
  resetTabella();
});