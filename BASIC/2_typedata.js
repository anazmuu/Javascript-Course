let n = 10;
let nama = "mulki";

console.log(typeof(nama));
console.log(typeof(n));

/* output: 
string
number */

//increment dan decrement

let a = 10;
console.log(a++);
console.log(a);
/* 
output : 
10
11
*/

//penggunaan bigInt untuk nilai yang sangat panjang
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);

/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

//pemakaian string
const pahlawan = '"ki hajar dewantara"';
console.log(pahlawan);
/* output
"ki hajar dewantara"
*/

let firstname = "mulki ";
let midname = "anaz ";
let lastname = "aliza";
let nama_lengkap = firstname + midname + lastname;
console.log(nama_lengkap);
/* output : 
mulki anaz aliza
*/

//string template
//untuk menggunakan string template wajib menggunakan back ticks (`)
const nama1 = "Mulki Anaz";
console.log(`Hello, nama saya ${nama1}`);
/* output :
Hello, nama saya Mulki Anaz
*/

let na = true;
let nb = false;

console.log(typeof(na));
console.log(typeof(nb));
/*output :
boolean
boolean
*/

let nia = 4;
let nib = 10;

let nilai = nia > nib;
console.log(nilai);

/*output :
false
karena 4 > 10 itu salah
*/
