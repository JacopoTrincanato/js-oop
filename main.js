console.log('hello');
/*In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
Successivamente:
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()*/

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

let infoMacchina = fiatBlu.informazioni();
console.log(infoMacchina);

let etaMacchina = fiatBlu.calcolaEta();
console.log(etaMacchina);
