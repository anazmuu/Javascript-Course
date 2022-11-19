//destructuring array

const seafood = ["lobster", "kakap", "kerang laut"];

const[makanan1, makanan2, makanan3] = seafood;

console.log(makanan1);
console.log(makanan2);
console.log(makanan3);


/*output :
lobster
kakap
kerang laut
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [, , thirdFood ] = favorites;
 
console.log(thirdFood);
 
/* output:
Nugget
*/

var a = 1;
var b = 2;
var temp;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
temp = a;
a = b;
b = temp;
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/