const biodata = {
    nama : "mulki anaz",
    keahlian : "Komputer",
    pekerjaan : "Guru",
    umur : 26,
    "alamat" : "sumedang"
};

console.log(`Hallo Nama saya ${biodata.nama}`);
console.log(`keahlian saya yaitu ${biodata.keahlian} dan pekerjaan saya adalah ${biodata.pekerjaan}`);
console.log(`umur saya ${biodata.umur} dan alamat saya di ${biodata["alamat"]}`);

/*output
Hallo Nama saya mulki anaz
keahlian saya yaitu Komputer dan pekerjaan saya adalah Guru
umur saya 26 dan alamat saya di sumedang
*/


//Asignment Operator
biodata.pekerjaan = "programmer";
biodata["status"] = "menikah";
console.log(biodata);
/*output
{
  nama: 'mulki anaz',
  keahlian: 'Komputer',
  pekerjaan: 'programmer',
  umur: 26,
  alamat: 'sumedang',
  status: 'menikah'
}
*/

//delete suatu data di object
delete biodata.status;
console.log(biodata);

/*Output :
{
  nama: 'mulki anaz',
  keahlian: 'Komputer',
  pekerjaan: 'programmer',
  umur: 26,
  alamat: 'sumedang'
}
*/