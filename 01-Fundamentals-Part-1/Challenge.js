/*
const mass1 = 78;
const height1 = 1.69;
const mass2 = 92;
const height2 = 1.95;
const r1 = mass1 / height1 ** 2;
const r2 = mass2 / (height2 * height2);
const BMI = r1 > r2;
// console.log(r1, r2, BMI);


if (r1 > r2) {
    console.log(`Mark's BMI (${r1}) is higher than John's `);
}
else {
    console.log(`John's BMI (${r1}) is higher than Mark's `);
}
*/

/*
const Dolphins1 = 96;
const Dolphins2 = 108;
const Dolphins3 = 89;

const Koalas1 = 88;
const Koalas2 = 91;
const Koalas3 = 110;

const Dolphin = (Dolphins1 + Dolphins2 + Dolphins3) / 3;
const Koalas = (Koalas1 + Koalas2 + Koalas3) / 3;
if (Dolphin === Koalas) {
    console.log(`Match is draw.`);
} else if (Dolphin > Koalas) {
    console.log(`The winner is Dolphin.`);
} else {
    console.log(`The winner is Koalas.`);
}
*/

const bill = 275;
// using if else condition
if (bill >= 50 && bill <= 300) {
    console.log(bill + ((bill * 15) / 100));
} else {
    console.log(bill + ((bill * 20) / 100));
}

// using ternary operator

let tip = bill >= 50 && bill <= 300 ? console.log(bill + ((bill * 15) / 100)) : console.log(bill + ((bill * 20) / 100));

