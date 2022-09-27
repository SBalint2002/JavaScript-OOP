let valami = {
    nev: 'Usernev',
    _eletkor:23,
    kiir(){
        console.log(this.nev);
    },
    get eletkor(){
        return this._eletkor;
    },
}

valami.kiir();

class User{
    #eletkor = 0;

    constructor(nev, eletkor) {
        this.nev = nev;
        this.#eletkor = eletkor;
    }

    get eletkor(){
        return this.#eletkor;
    }

    set eletkor(eletkor){
        if (typeof eletkor === 'Number' && eletkor <= 0) {
            this._eletkor = eletkor;
        }else{
            throw new Error("Eletkor nem negativ egész kell, hogy legyen.");
        }
    }

    kiir(){
        console.log(this, this.nev, this.eletkor);
    }

    login(usernev, pass){
        return false;
    }

    #privatMetodus(){

    }

    static atlagEletkor(users){
        let sum = 0;
        for (let u of users) {
            sum += u.eletkor;
        }
        return sum / users.length;
    }
}

let user = new User('User2', 1);

let userek = [
    user,
    new User('User5', 2),
    new User('User1', 3),
];

let atlag = User.atlagEletkor(userek);
console.log('Átlag: '+ atlag);


//Az elő false, mert nincs példányosítva
console.log(valami instanceof User);
console.log(user instanceof User);

//user.eletkor = "kutya";
user.kiir();

console.log(User);

console.log('-----------');
user.kiir();
let k = user.kiir();
let obj = {
    nev: 'nev',
    eletkor: 999,
    kiir: user.kiir,
}

obj.kiir();

function gombKattintas() {
    user.kiir();
}

//document.getElementById('gomb').addEventListener('click',gombKattintas);