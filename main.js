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


//BONUS
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
let nuovaAutomobile = new Automobile('Opel', 2020, 'nera', 4, 'benzina', '1.2i 16V ECOTEC', 1.229);
console.log(nuovaAutomobile);


//seleziono l'elemento con la classe opelNera nell'HTML
let opelNeraEl = document.querySelector('.opelNera');

//creo una funzione che generi il markup
function generateMarkup() {
    const markup = `la Opel nera del 2020 ha ${nuovaAutomobile.porte} porte ed è alimentata a ${nuovaAutomobile.carburante}`;
    return markup
}

//stampo il numero di porte e il tipo di carburante.
opelNeraEl.innerHTML = generateMarkup();

