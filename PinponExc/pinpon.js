const button1 = document.querySelector(".player1-button");
const button2 = document.querySelector(".player2-button");
const buttonReset = document.querySelector('.reset-button');

const span1 = document.querySelector(".span-player1");
const span2 = document.querySelector(".span-player2");
let counter1 = 0;
let counter2 = 0;

const scoreWin = document.getElementsByTagName("input")[0];

button1.addEventListener("click", func1);
button2.addEventListener("click", func2);


function func1(e){
    counter1++;
    span1.innerHTML = counter1;
    
    if (scoreWin.value == span1.innerHTML) {
        button1.disabled = true;
        button2.disabled = true;
        
        span1.style.color = "green";
        span2.style.color = "red";

    }
};
function func2(e){
    counter2++;
    span2.innerHTML = counter2;
    
    if (scoreWin.value == span2.innerHTML) {
        button1.disabled = true;
        button2.disabled = true;
        
        span2.style.color = "green";
        span1.style.color = "red";

    }
};

buttonReset.addEventListener("click" ,()=>{
    counter1 = 0;
    counter2 = 0;
    span1.innerHTML = 0
    span2.innerText = 0

    button1.disabled = false;
    button2.disabled = false;
    
    span1.style.color = "black";
    span2.style.color = "black";
    

});
