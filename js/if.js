/*
OPERATORIAI:
naudotini: >, <, >=, <=, ===, !==
ne naudotini: ==, !=
if (tikrinama salyga) {
    jei tenkinama
} else {
    jei ne tenkinama
}
SABLONAI:
if () {}
if () {} else {}
if () {} else if {} .... else if () {}
if () {} else if {} .... else if () {} else {}
*/

const a = 400;
const b = '400';

const c = +b;
console.log(c);

if (a === c) {
    console.log('taip');
} else {
    console.log('ne');
}

console.log('-----------------------');

const spalva = 'raudonos';

if (spalva === 'melyna') {
    console.log('Arijai!');
} else if (spalva === 'zalia') {
    console.log('Gerai slepiasi zolej 🦗');
} else if (spalva === 'rudos') {
    console.log('Angry bird 😬😬');
} else if (spalva === 'raudonos') {
    console.log('Turbut programuotojas... 💻🐱‍👤');
} else {
    console.log('A tu turi akis? 👀👀👀');
}



const moneta = 'raetsryh';

if (moneta === 'skaicius') {
    console.log('Iskrito skaicius ✌');
} else {
    if (moneta === 'herbas') {
        console.log('Iskrito herbas 💰');
    } else {
        if (moneta === 'briauna') {
            console.log('Moneta nukrito ant briaunos 😮');
        } else {
            console.log('tai moneta vis dar ore???');
        }
    }
}


console.log('-----------------');

const namoTipas = 'namas';          // namas, butas
const kaipKilti = 'laiptai';        // laiptai, liftas

if (namoTipas === 'namas') {
    if (kaipKilti === 'laiptai') {
        console.log('Ieinu i nama ir kilu laiptais');
    } else if (kaipKilti === 'liftas') {
        console.log('Ieinu i nama ir kilu liftu');
    } else {
        console.log('Ienu i nama ir nera kaip kilti i virsu');
    }
} else if (namoTipas === 'butas') {
    if (kaipKilti === 'laiptai') {
        console.log('Ieinu i daugiaaukti nama ir kilu laiptais');
    } else if (kaipKilti === 'liftas') {
        console.log('Ieinu i daugiaaukti nama ir kilu liftu');
    } else {
        console.log('Ienu i daugiaaukti nama ir nera kaip kilti i virsu');
    }
} else {
    console.log('Nurodytas namo tipas nezinomas');
}