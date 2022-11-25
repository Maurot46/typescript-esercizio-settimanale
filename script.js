var PrimoUtente = /** @class */ (function () {
    function PrimoUtente(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    PrimoUtente.prototype.ricarica = function (valore) {
        return this.credito + valore;
    };
    ;
    PrimoUtente.prototype.chiamata = function (valore1) {
        return valore1;
    };
    ;
    PrimoUtente.prototype.numero404 = function (valore3) {
        return valore3;
    };
    ;
    PrimoUtente.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    ;
    PrimoUtente.prototype.azzeraChiamate = function () {
        return 0;
    };
    return PrimoUtente;
}());
var costoChiamata = 0.20;
var utente1 = new PrimoUtente(50, 3);
var ricarica = utente1.ricarica(10);
var minuti = utente1.numero404(10);
var numeroChiamate = utente1.numeroChiamate;
console.log('Primo Utente:');
console.log("Credito Iniziale ".concat(utente1.credito, "\u20AC"));
console.log("Credito dopo ricarica: ".concat(ricarica, " \u20AC"));
console.log("La chiamata \u00E8 durata ".concat(minuti, " minuti"));
console.log("Credito residuo dopo chiamata ".concat(ricarica - ((minuti * costoChiamata) * numeroChiamate), " \u20AC"));
console.log("Chiamate effettuate ".concat(numeroChiamate));
console.log("Chiamate azzerate ".concat(utente1.azzeraChiamate()));
console.log('------------------------------------------------------');
var utente2 = new PrimoUtente(25, 1);
var ricarica = utente2.ricarica(10);
var minuti2 = utente2.numero404(5);
var numeroChiamate2 = utente2.numeroChiamate;
console.log('Secondo Utente:');
console.log("Credito Iniziale ".concat(utente2.credito, "\u20AC"));
console.log("Credito dopo ricarica: ".concat(ricarica, " \u20AC"));
console.log("La chiamata \u00E8 durata ".concat(utente2.chiamata(10), " minuti"));
console.log("Credito residuo dopo chiamata ".concat(ricarica - ((minuti2 * costoChiamata) * numeroChiamate2), " \u20AC"));
console.log("Chiamate effettuate ".concat(numeroChiamate2));
console.log("Chiamate azzerate ".concat(utente2.azzeraChiamate()));
console.log('------------------------------------------------------');
var utente3 = new PrimoUtente(100, 4);
var ricarica = utente3.ricarica(50);
var minuti3 = utente3.numero404(20);
var numeroChiamate3 = utente3.numeroChiamate;
console.log('Terzo Utente:');
console.log("Credito Iniziale ".concat(utente3.credito, "\u20AC"));
console.log("Credito dopo ricarica: ".concat(ricarica, " \u20AC"));
console.log("La chiamata \u00E8 durata ".concat(minuti3, " minuti"));
console.log("Credito residuo dopo chiamata ".concat(ricarica - ((minuti3 * costoChiamata) * numeroChiamate3), " \u20AC"));
console.log("Chiamate effettuate ".concat(numeroChiamate3));
console.log("Chiamate azzerate ".concat(utente3.azzeraChiamate()));
