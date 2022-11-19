/*
Set sederhananya merupakan kumpulan nilai (set of values).
Hal yang membedakan Set dengan struktur data yang lain
adalah data pada Set tidak berurutan dan juga tidak diindeks.
*/

const numberSet = new Set([1, 4, 6, 4, 1]);
//nilai yang duplikat akan di buang
console.log(numberSet);
/* output
Set(3) { 1, 4, 6 }
*/

numberSet.add(9); //untuk menambah data
console.log(numberSet);
/* output
Set(3) { 1, 4, 6 , 9}
*/

numberSet.delete(1);
console.log(numberSet);
/* output
Set(3) { 4, 6 , 9}
*/
