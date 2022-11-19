/*
Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. 
Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun
dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
*/
const biodata = new Map([
 ['1', 'Mulki Anaz'],
 ['alamat', 'sumedang']
]);

console.log(biodata);

/*output

Map(2) { '1' => 'Mulki Anaz', 'alamat' => 'sumedang' }

*/

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

/* output
3
England
4
India
 */