//creo una classe "Veicolo"
class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor(marca, anno, colore, porte, carburante){
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }

    //Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
    informazioni(){
        let info = `${this.marca} ${this.anno} ${this.colore} ${this.porte} ${this.carburante}`
        return info
    }

    //Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()
    calcolaEta(){
        let data = new Date();
        let annoCorrente = data.getFullYear();
        let eta = annoCorrente - this.anno;
        return `La macchina ha ${eta} anni`;
        
    }
}

//creo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
const fiatBlu = new Veicolo('Fiat', 2019, 'blu', 5, 'diesel');
console.log(fiatBlu);

//creo una variabile che mi dia le info sulla macchina fiatBlu
let infoMacchina = fiatBlu.informazioni();
console.log(infoMacchina);

//creo una variabile che mi dia l'età della macchina fiatBlu
let etaMacchina = fiatBlu.calcolaEta();
console.log(etaMacchina);

/*In questo bonus, dovrai estendere la classe "Veicolo" con una nuova classe chiamata "Automobile". La classe "Automobile" eredita tutte le proprietà e i metodi della classe "Veicolo" e ne aggiunge alcuni specifici per le automobili.
Successivamente:
Istanziamo una nuova Automobile (Opel, 2020, nera, con 4 porte, a benzina)
Stampiamo il numero di porte e il tipo di carburante.*/

class Automobile extends Veicolo {
    constructor(marca, anno, colore, porte, carburante, motore, cilindrata){
        super(marca, anno, colore, porte, carburante);
        
        this.motore = motore;
        this.cilindrata = cilindrata;
    }

    //Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
    informazioni(){
        let info = `${this.marca} ${this.anno} ${this.colore} ${this.porte} ${this.carburante}`
        return info
    }

    //Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()
    calcolaEta(){
        let data = new Date();
        let annoCorrente = data.getFullYear();
        let eta = annoCorrente - this.anno;
        return `La macchina ha ${eta} anni`;
        
    }
}

//creo una nuova istanza di veicolo che rappresenti una Opel 2020 nera.
let nuovaAutomobile = new Automobile('Opel', 2020, 'nera', 4, 'benzina', '1.2i 16V ECOTEC', 1.229)
