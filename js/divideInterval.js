"use strict";

/*
Suskaičiuoti, kiek nurodytame intervale (0 - 11; 8 - 31; -18 - 18) yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai
*/

const from = 0;
const till = 11;
const divider = 5;

let count = 0;

for (let i = from; i <= till; i++) {
    if (i % divider === 0) {
        count++;
    }
}


const ats = `Skaičių intervale tarp ${from} ir ${till}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;

console.log(ats);





const from2 = 0;
const till2 = 11;
const divider2 = 3;

let count2 = 0;

for (let i = from2; i <= till2; i++) {
    if (i % divider2 === 0) {
        count2++;
    }
}


const ats2 = `Skaičių intervale tarp ${from2} ir ${till2}, besidalijančių be liekanos iš ${divider2} yra ${count2} vienetai.`;

console.log(ats2);



const from3 = 0;
const till3 = 11;
const divider3 = 7;

let count3 = 0;

for (let i = from3; i <= till3; i++) {
    if (i % divider3 === 0) {
        count3++;
    }
}


const ats3 = `Skaičių intervale tarp ${from3} ir ${till3}, besidalijančių be liekanos iš ${divider3} yra ${count3} vienetai.`;

console.log(ats3);