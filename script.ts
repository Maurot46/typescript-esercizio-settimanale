interface utente {
    credito: number,
    numeroChiamate: number,
    ricarica(valore:number): void,
    chiamata(valore1:number): void,
    numero404(valore3:number):number,
    getNumeroChiamate():number,
    azzeraChiamate():number

}

class PrimoUtente implements utente {
    public credito: number;
    public numeroChiamate: number;
    constructor(_credito:number, _numeroChiamate:number) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    public ricarica(valore): void {
        return this.credito + valore;
    };
    public chiamata(valore1): void {
        return valore1;
    };
    public numero404(valore3): number {
        return valore3;
    };
    public getNumeroChiamate(): number {
        return this.numeroChiamate;
    };
    public azzeraChiamate(): number {
        return 0;
    }

}

var costoChiamata = 0.20;
let utente1 = new PrimoUtente(50, 3);
var ricarica:any = utente1.ricarica(10)
var minuti:any = utente1.numero404(10)
var numeroChiamate = utente1.numeroChiamate;
console.log(`Credito Iniziale ${utente1.credito}€`);
console.log(`Credito dopo ricarica: ${ricarica} €`);
console.log(`La chiamata è durata ${minuti} minuti`);
console.log(`Credito residuo dopo chiamata ${ricarica - ((minuti * costoChiamata) * numeroChiamate)} €`);
console.log(`Chiamate effettuate ${numeroChiamate}`);
console.log(`Chiamate azzerate ${utente1.azzeraChiamate()}`);
console.log('------------------------------------------------------')
let utente2 = new PrimoUtente(25, 1);
var ricarica:any = utente2.ricarica(10)
var minuti2:any = utente2.numero404(5);
var numeroChiamate2 = utente2.numeroChiamate;
console.log(`Credito Iniziale ${utente2.credito}€`);
console.log(`Credito dopo ricarica: ${ricarica} €`);
console.log(`La chiamata è durata ${utente2.chiamata(10)} minuti`);
console.log(`Credito residuo dopo chiamata ${ricarica - ((minuti2 * costoChiamata) * numeroChiamate2)} €`);
console.log(`Chiamate effettuate ${numeroChiamate2}`);
console.log(`Chiamate azzerate ${utente2.azzeraChiamate()}`);
console.log('------------------------------------------------------')
let utente3 = new PrimoUtente(100, 4);
var ricarica:any = utente3.ricarica(50)
var minuti3:any = utente3.numero404(20);
var numeroChiamate3 = utente3.numeroChiamate;
console.log(`Credito Iniziale ${utente3.credito}€`);
console.log(`Credito dopo ricarica: ${ricarica} €`);
console.log(`La chiamata è durata ${minuti3} minuti`);
console.log(`Credito residuo dopo chiamata ${ricarica - ((minuti3 * costoChiamata) * numeroChiamate3)} €`);
console.log(`Chiamate effettuate ${numeroChiamate3}`);
console.log(`Chiamate azzerate ${utente3.azzeraChiamate()}`);
