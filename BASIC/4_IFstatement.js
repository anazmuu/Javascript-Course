const Hujan = false;

console.log("persiapan sebelum berangkat");
if(Hujan){
    console.log("bawa payung");
}

console.log("berangkat");

// if dengan else
let x = 70;

if(x > 70){
    console.log("Nilai lebih dari 70");
}else if(x < 70){
    console.log("Nilai kurang dari 70");
}else if(x == 70){
    console.log("Nilai sama");
}else {
    console.log("Inputan salah");
}
/*
Output L=:
Nilai Sama
*/

let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);

/* output
Bonjour!
*/