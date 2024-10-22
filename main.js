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
const fiatBlu = new Veicolo('Fiat', 2019, 'blu', 5, 'benzina');
console.log(fiatBlu);

//creo una variabile che mi dia le info sulla macchina fiatBlu
let infoMacchina = fiatBlu.informazioni();
console.log(infoMacchina);

//creo una variabile che mi dia l'età della macchina fiatBlu
let etaMacchina = fiatBlu.calcolaEta();
console.log(etaMacchina);
