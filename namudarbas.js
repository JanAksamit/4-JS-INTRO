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

const sk111 = 5;
console.log(sk111);
const sk222 = 10;
console.log(sk222);
const sk333 = 15;
console.log(sk333);
const sk444 = 20;
console.log(sk444);
const sk555 = 25;
console.log(sk555);

const sk1111 = 1000;
console.log(sk1111);
const sk2222 = 800;
console.log(sk2222);
const sk3333 = 600;
console.log(sk3333);
const sk4444 = 400;
console.log(sk4444);
const sk5555 = 200;
console.log(sk5555);

console.log('---------------------');


//4) Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//a) Po kiekvieno jų inicijavimo, išvesti į console 


const a1 = ("Ryga");
console.log(a1);
const a2 = ("Tallinas");
console.log(a2);
const a3 = ("Londonas");
console.log(a3);
const a4 = ('Paryzius');
console.log(a4);
const a5 = ('Maskva');
console.log(a5);
const l = (a1 + a2 + a3 + a4 + a5 );
console.log(l);




const b1 = ('gruodis');
console.log(b1);
const b2 = ('sausis');
console.log(b2);
const b3 = ('vasaris');
console.log(b3);
const b4 = ('kovas');
console.log(b4);
const b5 = ('balandis');
console.log(b5);
const b11 = (b1 + b2 + b3 + b4 + b5);
console.log(b11);


const c1 = ('Naugarduko');
console.log(c1);
const c2 = ('Vytenio');
console.log(c2);
const c3 = ('Rygos');
console.log(c3);
const c4 = ('Svitrigailos');
console.log(c4);
const c5 = ('Gedimino');
console.log(c5);
const c11 = (c1 + c2 + c3 + c4 + c5);
console.log(c11);


console.log('----------------');


//Veiksmai su kintamaisiais

//1) Susumuoti visus skaičiaus tipo kintamuosius
//Rezultatą išvesti į console



const skaiSeka = (2+4+6+8+10)
console.log(skaiSeka);
const skaiSeka2 = (5+10+15+20+25)
console.log(skaiSeka2);
const skaiSeka3 = (1000+800+600+400+200)
console.log(skaiSeka3);
const skaiciuSekossuma = [skaiSeka + skaiSeka2 + skaiSeka3]
console.log(skaiciuSekossuma);


//2) Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
//Rezultatą išvesti į console

const a10 = (a5 + ',' + ' ' + a4 + ',' + ' ' + a3 + ',' + ' ' + a2 + ',' + ' ' + a1)
console.log(a10);

const b111 = (b5 + ',' + ' ' + b4 + ',' + ' ' + b3 + ',' + ' ' + b2 + ',' + ' ' + b1)
console.log(b111);

const c111 = (c5 + ',' + ' ' + c4 + ',' + ' ' + c3 + ',' + ' ' + c2 + ',' + ' ' + c1)
console.log(c111);

const abcsumine = (a10 + ',' + ' ' +  b111 + ',' + ' ' +  c111)
console.log(abcsumine);


//3) Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//a) 1-2+3-4+5
//b) Rezultatą išvesti į console




const skaiciuSeka = [2, 4, 6, 8, 10,]
console.log(skaiciuSeka);

const skaiciuSeka2 = [5, 10, 15, 20, 25]
console.log(skaiciuSeka2);

const skaiciuSeka3 = [1000, 800, 600, 400, 200]
console.log(skaiciuSeka3);


const skai = (skaiciuSeka[0] - skaiciuSeka[1] + skaiciuSeka[2] - skaiciuSeka[3] + skaiciuSeka[4] )
console.log(skai);
const skai2 = (skaiciuSeka2[0] - skaiciuSeka2[1] + skaiciuSeka2[2] - skaiciuSeka2[3] + skaiciuSeka2[4])
console.log(skai2);
const skai3 = (skaiciuSeka3[0] - skaiciuSeka3[1] + skaiciuSeka3[2] - skaiciuSeka3[3] + skaiciuSeka3[4])
console.log(skai3);


//4) Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas

const abcsumine = (a10 + ',' + ' ' +  b111 + ',' + ' ' +  c111)
console.log(abcsumine);

