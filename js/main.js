"use strict";
// vienos eilutes komentaras

/*
keletos
eiluciu
komentaras
*/


// jei noresime ka nors issispausdinti, tai naudojam console.log()
console.log(2021);
console.log('Labas rytas 🎅');


/*
Reiksmiu tipai:
    number (skaicius)
    string (tekstas)
    boolean (logine reiksme)
    array (sarašas)
    object (objektas)
*/

/*
Kintamuju iniciavimo budai:
    const (pagrindinis, kuri reikia rinktis by default)
    let (renkames, jei info keiciasi)
    var (nenaudoti)
*/

// inicijuoti kintamaji, kuris niekada nesikeis ir bus skaicius 2021
const metai = 2021;

// inicijuoti kintamaji, kuris niekada nesikeis ir bus tekstas Petras
const vardas = 'Petras';

console.log(metai);
console.log(vardas);

console.log(metai, vardas);

console.log('Metai:', metai);
console.log('Asmens vardas:', vardas, 'ir jis gyveno:', metai, 'metais.');

const pirmasSkaicius = 13;
const antrasSkaicius = 2;

const suma = pirmasSkaicius + antrasSkaicius;
console.log(suma);
console.log(pirmasSkaicius, '+', antrasSkaicius, '=', suma);


let adresas = 'Vilnius';
console.log(adresas);

adresas = 'Kaunas';
console.log(adresas);

adresas = 'Klaipedos svyturys';
console.log(adresas);


let pinigine = 0;
console.log('Turiu pinigu:', pinigine);

const pirmaAlga = 100;
pinigine = pinigine + pirmaAlga;
console.log('Turiu pinigu:', pinigine);

const antraAlga = 250;
pinigine = pinigine + antraAlga;
console.log('Turiu pinigu:', pinigine);

const treciaAlga = 650;
pinigine = pinigine + treciaAlga;
console.log('Turiu pinigu:', pinigine);


console.log('-----------------------');

// matematines operacijos
const s1 = 2;
const s2 = 4;

console.log(s1 + s2);
console.log(s1 - s2);
console.log(s1 * s2);
console.log(s1 / s2);
console.log(s1 ** s2);  // kelimas laipsniu: penki astuntuoju

console.log(2 + 2 * 2);
console.log((2 + 2) * 2);

console.log('------------------------');

// tekstines operacijos

const hi = 'Labas';
const morning = 'rytas';

const sayHi = hi + ' ' + morning + '! ☕☕';
console.log(sayHi);

const justHi = hi + '! 🎅'
console.log(justHi);

/*
teksto reiksme gali buti inicijuota:
    viengubose kabutese     ''
    dvigubose kabutese      ""
    back tick kabutes       ``
*/


// tekste naudojamos dvigubos kabutes
const dvigubosTekste = 'Tekste naudojamos dvigubos (") kabutes.';
console.log(dvigubosTekste);

// tekste naudojamos viengubos kabutes
const viengubosTekste = "Tekste naudojamos viengubos (') kabutes.";
console.log(viengubosTekste);

// tekste naudojamos viengubos kabutes ir dvigubos kabutes
const abiTekste1 = 'Tekste yra abi kabutes 1 (\') ir 2(").';
console.log(abiTekste1);

const abiTekste2 = "Tekste yra abi kabutes 1 (') ir 2(\").";
console.log(abiTekste2);

const abiTekste12 = 'Tekste yra abi kabutes 1 (\') ir 2(\").';
console.log(abiTekste12);

const abiTekste21 = "Tekste yra abi kabutes 1 (\') ir 2(\").";
console.log(abiTekste21);

const imgSrc = './img/doggo.jpg';
const h1 = 'Labas rytas!';
const p = 'asdkjb asjkn lasndf lnasdljfasjldn.';

const html1 = '<main>\n\
    <img src="'+ imgSrc + '">\n\
    <div>\n\
        <h1>'+ h1 + '</h1>\n\
        <p>'+ p + '</p>\n\
    </div>\n\
</main>';
console.log(html1);

const html2 = "<main>\n\
    <img src=\""+ imgSrc + "\">\n\
    <div>\n\
        <h1>'+ h1 + '</h1>\n\
        <p>"+ p + "</p>\n\
    </div>\n\
</main>";
console.log(html2);

const beautifulHTML = `<main>
    <img src="${imgSrc}">
    <div>
        <h1>'${h1}'</h1>
        <p>${p}</p>
    </div>
</main>`;
console.log(beautifulHTML);

console.log('--------------------------');

const person = 'Johnny Boy';
const candy = 'lolly pop';

const sentence = `${person} do you want a ${candy}? 🍭🍭🍭`;
console.log(sentence);


console.log('---------------------------');
// Namu darbas:


//Kintamųjų inicijavimas


//1) Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//a) Po kiekvieno jų inicijavimo, išvesti į console


const amzius = 21;
console.log(amzius);

const menuo = 1;
console.log(menuo);

const uzdarbis = 0;
console.log(uzdarbis);


console.log('--------------------------------------');



//2) Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//a) Po kiekvieno jų inicijavimo, išvesti į console


const manoVardas = 'Jan';
console.log(manoVardas);

const manoPavarde = 'Aksamit';
console.log(manoPavarde);

const manoUzdarbis = 'nulis';
console.log(manoUzdarbis);


console.log('-----------------------------');


// 3) Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
// a) Po kiekvieno jų inicijavimo, išvesti į console

const skaiciuSeka = [2, 4, 6, 8, 10,]
console.log(skaiciuSeka);

const skaiciuSeka2 = [5, 10, 15, 20, 25]
console.log(skaiciuSeka2);

const skaiciuSeka3 = [1000, 800, 600, 400, 200]
console.log(skaiciuSeka3);

const sk11 = 2;
console.log(sk11);
const sk22 = 4;
console.log(sk22);
const sk33 = 6;
console.log(sk33);
const sk44 = 8;
console.log(sk44);
const sk55 = 10;
console.log(sk55);


//4) Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//a) Po kiekvieno jų inicijavimo, išvesti į console 


 const a1 = ("Ryga");
 const a2 = ("Tallinas");
 const a3 = ("Londonas");
 const a4 = ('Paryzius');
 const a5 = ('Maskva');
 const l = (a1 + a2 + a3 + a4 + a5 );
 console.log(l);

 const a10 = (a5 + ',' + ' ' + a4 + ',' + ' ' + a3 + ',' + ' ' + a2 + ',' + ' ' + a1)
 console.log(a10);


 const b1 = ('gruodis');
 const b2 = ('sausis');
 const b3 = ('vasaris');
 const b4 = ('kovas');
 const b5 = ('balandis');
 const b11 = (b1 + b2 + b3 + b4 + b5);
console.log(b11);

const b111 = (b5 + ',' + ' ' + b4 + ',' + ' ' + b3 + ',' + ' ' + b2 + ',' + ' ' + b1)
console.log(b111);

const c1 = ('Naugarduko');
const c2 = ('Vytenio');
const c3 = ('Rygos');
const c4 = ('Svitrigailos');
const c5 = ('Gedimino');
const c11 = (c1 + c2 + c3 + c4 + c5);
console.log(c11);

const c111 = (c5 + ',' + ' ' + c4 + ',' + ' ' + c3 + ',' + ' ' + c2 + ',' + ' ' + c1)
console.log(c111);



//const miestai = ['Ryga' + ',' + ' ' + 'Tallinas' + ',' + ' ' +  'Londonas' + ',' + ' ' +  'Paryzius'  + ',' + ' ' + 'Maskva' ]
//console.log(miestai);

//const menesis = ['gruodis' + ',' + ' ' + 'sausis' + ',' + ' ' +  'vasaris' + ',' + ' ' +  'kovas' + ',' + ' ' + 'balandis']
//console.log(menesis);

//const gatve = ['Naugarduko' + ',' + ' ' +  'Vytenio' + ',' + ' ' + 'Rygos' + ',' + ' ' + 'Svitrigailos' + ',' +  ' ' +  'Gedimino']
//console.log(gatve);


//Veiksmai su kintamaisiais

//Susumuoti visus skaičiaus tipo kintamuosius
//Rezultatą išvesti į console

const skaiSeka = (2+4+6+8+10)
console.log(skaiSeka);
const skaiSeka2 = (5+10+15+20+25)
console.log(skaiSeka2);
const skaiSeka3 = (1000+800+600+400+200)
console.log(skaiSeka3);
const skaiciuSekossuma = [skaiSeka + skaiSeka2 + skaiSeka3]
console.log(skaiciuSekossuma);


console.log('--------------------------'); 

//const visumosSuma = (5+10+15+20+25+2+4+6+8+10+1000+800+600+400+200)
//console.log(visumosSuma);

//Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
//Rezultatą išvesti į console

//const pavadinimas =(menesis + ',' + ' ' + miestai + ',' + ' ' + gatve)
//console.log(pavadinimas); 

//const pavadinimas2 = ( menesis + ' ' +  miestai + ' ' + gatve)
//console.log(pavadinimas2);


//3) Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//a) 1-2+3-4+5
//b) Rezultatą išvesti į console

const skai = (skaiciuSeka[0] - skaiciuSeka[1] + skaiciuSeka[2] - skaiciuSeka[3] + skaiciuSeka[4] )
console.log(skai);
const skai2 = (skaiciuSeka2[0] - skaiciuSeka2[1] + skaiciuSeka2[2] - skaiciuSeka2[3] + skaiciuSeka2[4])
console.log(skai2);
const skai3 = (skaiciuSeka3[0] - skaiciuSeka3[1] + skaiciuSeka3[2] - skaiciuSeka3[3] + skaiciuSeka3[4])
console.log(skai3);



//Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas


