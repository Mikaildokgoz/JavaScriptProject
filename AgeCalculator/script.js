
// const years = document.getElementById("years");

// const months = document.getElementById("months");
// const days = document.getElementById("days");
// const hours = document.querySelector("#hours");
// const minutes = document.querySelector("#minutes");
// const seconds = document.querySelector("#seconds");
// const loading = document.querySelector(".loading");
// const countdown = document.querySelector("#countdown");



// window.addEventListener("load", ()=>{
//     loading.style.display = "block" ;
//     //miliseconds in setTimeout
//     setTimeout(() => {
//         loading.style.display = "none" ;
//         countdown.style.display = "flex";
//     }, 1000);
// });

// years.innerHTML = "00";
// months.innerHTML = "00";
// days.innerHTML = "00";
// hours.innerHTML = "00";
// minutes.innerHTML = "00";
// seconds.innerHTML = "00";

// let H2Elements = document.getElementsByTagName("h2");

// // console.log(H2Elements);
// // for (let index = 0; index < H2Elements.length; index++) {
// //     H2Elements[index].innerHTML = "00";    
// // };

// // let H2Elements2 = countdown.querySelectorAll("h2");
// // console.log("H2Elements2", H2Elements2);


// //nodelist.forEach()
// //Array.forEach()

// // H2Elements2.forEach(element=> {
// //     element.innerHTML = "00";
// // });


// [...H2Elements].forEach(el =>{
//     el.innerHTML = "00";
// });

// let selectedBirthday = new Date();
// let birthdayInput = document.querySelector("input[name=birthday]");
// birthdayInput.addEventListener("change", (event)=>{
//     // console.log("datestring", event.target.value);
//     selectedBirthday = new Date(event.target.value);
//     // console.log("dateobject", selectedBirthday);
//     if(selectedBirthday > new Date()){
//         alert("Doğum tarihiniz bugünden büyük olamaz!!");
//         return;
//     }
// document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80')";

// loading.style.display = "block";
// setInterval(updateCountdown, 1000);
// setTimeout(() => {
//     loading.style.display = "none" ;
//     countdown.style.display = "flex";
// }, 1000);

// });

// const updateCountdown = () =>{
//     let dobYear = selectedBirthday.getFullYear();
//     let dobMonth = selectedBirthday.getMonth();
//     let dobDay = selectedBirthday.getDate();
//     let dobHour = selectedBirthday.getHours();
//     let dobMinute = selectedBirthday.getMinutes();
//     let dobSecond = selectedBirthday.getSeconds();
    
//     let now = new Date();

//     let currentYear = now.getFullYear();
//     let currentMonth = now.getMonth();
//     let currentDay = now.getDate();
//     let currentHour = now.getHours();
//     let currentMinute = now.getMinutes();
//     let currentSecond = now.getSeconds();

//     let yearofAge = currentYear - dobYear;
//     let monthofAge = currentMonth - dobMonth;
//     let dayofAge = currentDay - dobDay;
//     let hourofAge = currentYear - dobYear;
//     let minuteofAge = currentMinute - dobMinute;
//     let secondofAge = currentSecond - dobSecond;

//     years.innerHTML = yearofAge.toString();
//     months.innerHTML = monthofAge.toString();
//     days.innerHTML = dayofAge.toString();
//     hours.innerHTML = hourofAge.toString();
//     minutes.innerHTML = minuteofAge.toString();
//     seconds.innerHTML = secondofAge.toString();

// };





// variables
const years = document.getElementById('years')
const months = document.getElementById('months')
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const birthday = document.querySelector('[name=birthday]');
const loading = document.querySelector('#loading')

years.innerHTML = "00";
months.innerHTML = "00";
days.innerHTML = "00";
hours.innerHTML = "00";
minutes.innerHTML = "00";
seconds.innerHTML = "00";


// loading section
function hideLoading(e) {
    loading.style.display = 'none'
}
setTimeout(hideLoading,3000);

//**************



//********
birthday.addEventListener('change',function ageCalc(e) {
    let today = new Date()
    let birthDay = new Date(birthday.value)

if (birthDay > today ) {
    alert('Something Wrong\nPlease Enter a Date before Today')
}else{   

    let ageSecond = today.getSeconds() - birthDay.getSeconds();
    let ageMinute = today.getMinutes() - birthDay.getMinutes();
    let ageHour = today.getHours() -birthDay.getHours();
    let ageDay = today.getDay() - birthDay.getDay();
    let ageMonth = today.getMonth() - birthDay.getMonth();
    let ageYear = today.getFullYear() - birthDay.getFullYear();

// *******

    if (ageSecond<0) { ageMinute--; ageSecond += 60}
    if (ageMinute<0) { ageHour--; ageMinute += 60}
    if (ageHour<0) { ageDay--; ageHour += 24}
    if (ageDay<0) { 
    ageMonth--;
    let currentMonth = new Date().getMonth() + 1
        switch (currentMonth) {
            case (1 || 3 || 5 || 7 || 8 || 10 || 12):
                ageDay += 31
                break;
            case (2):
                ageDay += 28
                break;
            default:
                ageDay += 30
                break;
        }
    }
    if (ageMonth<0) {ageYear--; ageMonth+=12}


seconds.innerHTML = (ageSecond < 10 ? '0' : '') + ageSecond;
minutes.innerHTML = (ageMinute < 10 ? '0' : '') + ageMinute;
hours.innerHTML = (ageHour < 10 ? '0' : '') + ageHour;
days.innerHTML = (ageDay < 10 ? '0' : '') + ageDay;
months.innerHTML = (ageMonth < 10 ? '0' : '') + ageMonth;
years.innerHTML = (ageYear < 10 ? '0' : '') + ageYear;

    }
    setInterval(ageCalc,1000);

});

