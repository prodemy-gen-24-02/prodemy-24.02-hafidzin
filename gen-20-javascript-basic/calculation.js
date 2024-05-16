//kotak
function hitungLuasPersegi(){
    let s = 2;
    return s*s;
}
console.log(`nilai dari luas persegi adalah: ${hitungLuasPersegi()}`);

//lingkaran
function hitungLuasLingkaran(){
    let r = 4;
    return (Math.PI * Math.pow(r, 2)).toFixed(4);
}
console.log(`nilai dari luas lingkaran adalah: ${hitungLuasLingkaran()}`);

//segitiga
function luasSegitiga(){
    let a = 3
    let t = 2
    return (a * t) / 2;
}
console.log(`nilai dari luas segitiga adalah: ${luasSegitiga()}`);

//persegi panjang 
function luasPersegiPanjang(){
    let p = 3
    let l = 2
    if(p == l){return `nilai dari luas persegi adalah: ${p*l}`}
        else {
        return `nilai dari luas persegi panjang adalah: ${p*l}`
    }
}
console.log(luasPersegiPanjang());

//layang-layang
function luasLayang(){
    let d1 = 4
    let d2 = 3
    return (d1 * d2)/2
}
console.log(`nilai dari luas layang-layang adalah: ${luasLayang()}`)