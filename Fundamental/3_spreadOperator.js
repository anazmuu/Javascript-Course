const seafood = ["Udang", "lobster", "kepiting", "kakap"];
const padang = ["rendang", "kikil", "cincang", "ayam pop"];

console.log(...seafood);
/*
Udang lobster kepiting kakap
output bisa keluar dari array
*/

const makanan = [seafood, padang];
console.log(makanan);
/*
[
  [ 'Udang', 'lobster', 'kepiting', 'kakap' ],
  [ 'rendang', 'kikil', 'cincang', 'ayam pop' ]
]
tidak tergabung karena tidak memakai spread operator
*/

const makanan2 = [...seafood, ...padang];
console.log(makanan2);
/*
[
  'Udang',    'lobster',
  'kepiting', 'kakap',
  'rendang',  'kikil',
  'cincang',  'ayam pop'
]
bersatu menjadi satu array karena menggunakan spread
*/

const obj1 = {nama : 'mulki anaz', umur : 25};
const obj2 = {nama2 : 'dini karlina', umur2 : 25};

const gabungan = {...obj1, ...obj2};
console.log(gabungan);

/*
{ nama: 'mulki anaz', umur: 25, nama2: 'dini karlina', umur2: 25 }
*/