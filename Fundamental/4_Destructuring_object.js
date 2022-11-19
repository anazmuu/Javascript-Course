//tanpa destructuring object
const biodata2 = {
    nama : "dini karlina",
    alamat : "sumedang",
    umur : 25
}

console.log(biodata2);

//dengan destructuring object
const biodata = {
    nama : "mulki anaz",
    alamat : "garut",
    umur : 26
}

const{nama, alamat, umur} = biodata;

console.log(nama, alamat, umur);

//fungsi dari destrukturisasi adalah memisahkan objek dari variable

//destructuring assignment

const biodata3 = {
    nama3 : "kinanti",
    alamat3 : "garut",
    umur3 : 1
}

let nama3 = "Jennaira";
let umur3 = 2;

({nama3, umur3} = biodata3);

console.log(nama3);
console.log(umur3);

