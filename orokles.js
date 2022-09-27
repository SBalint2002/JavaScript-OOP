class Allat{
    #labakSzama;
    #nev;

    constructor(labakSzama, nev){
        this.#nev = nev;
        this.#labakSzama = labakSzama;
    }

    hangotAd(){
        throw new Error('A hangotAd függvény absztrakt.');
    }
}

class Aranyhal extends Allat{
    constructor(nev){
        //super meghívja az ős constructorját.
        super(nev, 0);
    }

    hangotAd(){

    }
}

class Kutya extends Allat{
    constructor(nev){
        super(nev, 4);
    }

    hangotAd(){
        console.log('Vau');
    }
}

let kutya = new Kutya('Bodri');
let hal = new Aranyhal('Nemo');
kutya.hangotAd();
hal.hangotAd();