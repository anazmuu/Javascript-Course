let kendaraan = ["Honda", "Brio", 2000, 150000000];

console.log(kendaraan);

/*output
[ 'Honda', 'Brio', 2000, 150000000 ]
*/

//indexing
console.log(kendaraan[1]);
/*output
Brio
*/

//push, metode untuk menambahkan data pada array di bagian belakang atau akhir
kendaraan.push("Orange");
console.log(kendaraan);
/*output
[ 'Honda', 'Brio', 2000, 150000000, 'Orange' ]
*/

//pop, metode untuk mengahapus data pada array di bagian akhir
kendaraan.pop();
console.log(kendaraan);
/*output
[ 'Honda', 'Brio', 2000, 150000000 ]
*/

//metode shift dan unshift
kendaraan.shift(); //mengeluarkan data di awal
kendaraan.unshift("Yaris"); //menambahkan data di awal
console.log(kendaraan);
/*
[ 'Yaris', 'Brio', 2000, 150000000 ]
*/

//delete, hanya menghapus data. tidak menghapus index
delete kendaraan[0];
console.log(kendaraan);

//slice, menghapus data dengan index.
kendaraan.splice(0,1); //array ke 0, mengahpus 1 
console.log(kendaraan);
/*
output :
[ 'Brio', 2000, 150000000 ]
*/


