const inputField = document.querySelector('.input-field');
const inputBox = document.querySelector('#input-box')
const addBtn1 = document.querySelector('#add-btn1')
const addBtn2 = document.querySelector('#add-btn2')
const todoList1 = document.querySelector('.todo-list1')
const todoList2 = document.querySelector('.todo-list2')
const pendingNumber1 = document.querySelector('.pending-number1')
const pendingNumber2 = document.querySelector('.pending-number2')
const deleteAllBtn1 = document.getElementById('delete-all1')
const deleteAllBtn2 = document.getElementById('delete-all2')
/*  ***************** */
const storageCheck1 = localStorage.getItem("repo1");
if (storageCheck1 == null) {
    listArr1 = [];
    } else {
    listArr1 = JSON.parse(storageCheck1);
    // localStorage.setItem("repo1", JSON.stringify("listArr1"))
};
newLİ1 = "";
    listArr1.forEach((element1, index1) => {
        newLİ1 += `<li> <img src="./326563_box_check_icon.png" style="width: 15px;" class="fa-solid fa-check">
        ${element1} 
        <span onclick='deleteTasks1(${index1})'>
        <i class="fas fa-trash"></i>
        </span>
        </li>`
    });
    todoList1.innerHTML = newLİ1;
    pendingNumber1.innerHTML = listArr1.length;

/* *********************************** */
const storageCheck2 = localStorage.getItem("repo2");
if (storageCheck2 == null) {
    listArr2= [];
} else {
    listArr2 = JSON.parse(storageCheck2);
    // localStorage.setItem("repo2", JSON.stringify("listArr2"));//

};
newLİ2 = "";
    listArr2.forEach((element2, index2) => {
        newLİ2 += `<li>
        <img src="./326563_box_check_icon.png" style="width: 15px;" class="fa-solid fa-check">
        </span>
        ${element2} 
        <span onclick='deleteTasks2(${index2})'>
        <i class="fas fa-trash"></i>
        </span>
        </li>`
    });
    todoList2.innerHTML = newLİ2;
    pendingNumber2.innerHTML = listArr2.length;

/* ******************************** */

function task1(){
    newLİ1 = "";
    listArr1.forEach((element1, index1) => {
        newLİ1 += `<li>
        <img src="./326563_box_check_icon.png" style="width: 15px"; class="fa-solid fa-check">
        ${element1} 
        <span onclick='deleteTasks1(${index1})'>
        <i class="fas fa-trash"></i>
        </span>
        </li>`
    });
    todoList1.innerHTML = newLİ1;
    inputBox.value = "";
    pendingNumber1.innerHTML = listArr1.length;
    localStorage.setItem("repo1", JSON.stringify(listArr1));
};

function task2(){
    newLİ2 = "";
    listArr2.forEach((element2, index2) => {
        newLİ2 += `<li>
        <img src="./326563_box_check_icon.png" style="width: 15px;" class="fa-solid fa-check">
        </span>
        ${element2} 
        <span onclick='deleteTasks2(${index2})'>
        <i class="fas fa-trash"></i>
        </span>
        </li>`
    });
    todoList2.innerHTML = newLİ2;
    inputBox.value = "";
    pendingNumber2.innerHTML = listArr2.length;
    localStorage.setItem("repo2", JSON.stringify(listArr2));
};

addBtn1.addEventListener("click", ()=>{

    let userData = inputBox.value;
    listArr1.push(userData);
    
    task1();

});

addBtn2.addEventListener("click", ()=>{

    let userData = inputBox.value;
    listArr2.push(userData);
    
    task2();
});


function deleteTasks1(index1) {  
    listArr1.splice(index1,1);
    task1();
};

function deleteTasks2(index2) {  
    listArr2.splice(index2,1);
    task2();
};

deleteAllBtn1.addEventListener("click", ()=>{
    listArr1 = [];
    task1();
});

deleteAllBtn2.addEventListener("click", ()=>{
    listArr2 = [];
    task2();
});

// ulElement1 = document.getElementById("todo-list1");

todoList1.addEventListener("click", (e)=>{
    // listArr1.length--;
    // pendingNumber1.innerHTML = listArr1.length;
    console.log(todoList1.parentElement);
    if (e.target.tagName === "IMG") {
        e.target.parentElement.style.textDecoration = "line-through 3px green";
       
    }
});
// ulElement2 = document.getElementById("todo-list2");

todoList2.addEventListener("click", (e)=>{
    // listArr2.length--;
    // pendingNumber2.innerHTML = listArr2.length;
    if (e.target.tagName === "IMG") {
        e.target.parentElement.style.textDecoration = "line-through 4px dotted green";

    }
    
});
