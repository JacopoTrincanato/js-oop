console.log('hello');
/*In questo esercizio, dovrai creare una classe in JavaScript chiamata "Veicolo" con alcune proprietà e metodi.
Successivamente:
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
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
}

//creo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
const fiatBlu = new Veicolo('Fiat', 2019, 'blu', 5, 'benzina');
console.log(fiatBlu);
