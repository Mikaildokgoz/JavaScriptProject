// // const karesi = function(a){
// //     return a*a
// // }

// // // const myArr = ['ersen', 29, karesi()];
// // // console.log(myArr[2]());


// // const araba = {
// //     name: 'ersen',
// //     age: 29,
// //     lokum : karesi
// // }
// // console.log(araba.lokum(10));


// const addFive = function (num,mYfunc) {
//     console.log(num + mYfunc());
// }

// addFive(95,function(){return 5});

const tus_1 = document.querySelector('.tus1')
const tus_2 = document.querySelector('.tus2')
const tus_3 = document.querySelector('.tus3')
const tus_4 = document.querySelector('.tus4')
const tus_5 = document.querySelector('.tus5')
const tus_6 = document.querySelector('.tus6')
const tus_7 = document.querySelector('.tus7')
const tus_8 = document.querySelector('.tus8')
const tus_9 = document.querySelector('.tus9')


// tus_5.addEventListener('click',()=>{
//     tus_1.innerHTML = 4
//     tus_2.innerHTML = 1
//     tus_3.innerHTML = 2
//     tus_6.innerHTML = 3
//     tus_9.innerHTML = 6
//     tus_8.innerHTML = 9
//     tus_7.innerHTML = 8
//     tus_4.innerHTML = 7
// })

let counter = 0;
tus_5.addEventListener('click',()=>{
    counter += 1
        if (counter >=9)
            counter = 1;
});

let sayilar1 = ['2','3','6','9','8','7','4','1'];
let sayilar2 = ['3','6','9','8','7','4','1','2'];
let sayilar3 = ['6','9','8','7','4','1','2','3'];
let sayilar4 = ['9','8','7','4','1','2','3','6'];
let sayilar6 = ['8','7','4','1','2','3','6','9'];
let sayilar7 = ['7','4','1','2','3','6','9','8'];
let sayilar8 = ['4','1','2','3','6','9','8','7'];
let sayilar9 = ['1','2','3','6','9','8','7','4'];

tus_5.addEventListener('click',()=>{
    tus_1.innerHTML = sayilar1[counter-1];
    tus_2.innerHTML = sayilar2[counter-1];
    tus_3.innerHTML = sayilar3[counter-1];
    tus_4.innerHTML = sayilar4[counter-1];
    tus_6.innerHTML = sayilar6[counter-1];
    tus_7.innerHTML = sayilar7[counter-1];
    tus_8.innerHTML = sayilar8[counter-1];
    tus_9.innerHTML = sayilar9[counter-1];
});

