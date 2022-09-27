let a = 'asdf' / 45;
console.log(a);

try{
const c = 5;
c++;
} catch(e){
    if (e instanceof TypeError) {
        console.log('Típus Hiba!');
    }
}

console.log('try-catch után');

let uri = 'https://petrik.hu/?param=ő';
try {
    let kodolt = encodeURI(uri);
    console.log(kodolt);
} catch (e) {
    //Felhasználói input, ezért muszáj ellenőrizni
    if (e instanceof URIError) {
        console.error('Érvénytelen URI');
    }
}