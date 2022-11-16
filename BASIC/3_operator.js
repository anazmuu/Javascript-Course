let a = 10;
let b = 5;

console.log("hasil pertamabahan adalah : " + (a + b));
console.log("hasil pengurangan adalah  : " + (a - b));
console.log("hasil pembagian adalah    : " + (a / b));
console.log("hasil perkalian adalah    : " + (a * b));
console.log("hasil modulus adalah      : " + (a % b));


/*output
hasil pertamabahan adalah : 15
hasil pengurangan adalah  : 5
hasil pembagian adalah    : 2
hasil perkalian adalah    : 50
hasil modulus adalah      : 0
*/

//asignment operator
let c = 10;
let d = 5;

c += d; // c = c + d;
c -= d; // c = c - d;
c /= d; // c = c / d;
c *= d; // c = c * d;

console.log(c);

/* output :
15
*/

//comparison operator
let aString = "15";
let aNumber = 15

console.log(aString == aNumber);

/*output :
True
*/

//logical operator
let aB = 10;
let bB = 12;

/* AND operator */
console.log(aB < 15 && bB > 10); // (true && true) -> true
console.log(aB > 15 && bB > 10); // (false && true) -> false

/* OR operator */
console.log(aB < 15 || bB > 10); // (true || true) -> true
console.log(aB > 15 || bB > 10); // (false || true) -> true

/* NOT operator */
console.log(!(aB < 15)); // !(true) -> false
console.log(!(aB < 15 && bB > 10)); // !(true && true) -> !(true) -> false

/* output
true
false
true
true
false
false
*/