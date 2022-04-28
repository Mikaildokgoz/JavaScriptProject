const inputField = document.querySelector('.input-field');
const inputBox = document.querySelector('#input-box')
const addBtn1 = document.querySelector('#add-btn1')
const addBtn2 = document.querySelector('#add-btn2')
const todoList = document.querySelector('.todo-list')
const todoList2 = document.querySelector('.todo-list2')
const pendingNumber1 = document.querySelector('.pending-number1')
const pendingNumber2 = document.querySelector('.pending-number2')
const deleteAllBtn1 = document.getElementById('delete-all1')
const deleteAllBtn2 = document.getElementById('delete-all2')
// const deleteItem2 = document.getElementsByClassName(`delete2(${index})`);



let deneme = localStorage.getItem('depo');
if (deneme == null ) {
    newArr = [];
} else {
    newArr = JSON.parse(deneme);
};


let getLocStr = localStorage.getItem('New Todo');
if (getLocStr == null) {
    listArr = [];
} else {
    listArr = JSON.parse(getLocStr);
};



addBtn1.addEventListener('click',()=>{
    let userData = inputBox.value;
    listArr.push(userData)

    let newLi = '';
    listArr.forEach((element,index) => {
        newLi += `<li> ${element} <span  class="delete1(${index})" onclick='deleteTasks(${index})';><i class="fas fa-trash"></i></span></li>`
        // let deletebtn = document.getElementsByClassName(`delete1(${index})`)
    });



    todoList.innerHTML = newLi; // adding new li inside ul
    inputBox.value ='' // every click after value must empty

    pendingNumber1.textContent = listArr.length // correct every change in ul
    localStorage.setItem('New Todo', JSON.stringify(listArr));
        
})

addBtn2.addEventListener('click',()=>{
    let userData2 = inputBox.value;
    newArr.push(userData2)

    let newLi2 = '';
    newArr.forEach((element,index) => {
        newLi2 += `<li> ${element} <span class="delete2(${index})" onclick='deleteTasks(${index})';><i class="fas fa-trash"></i></span></li>`
        // let {index} = document.getElementsByClassName(`delete1(${index})`)
    });

    todoList2.innerHTML = newLi2; // adding new li inside ul
    inputBox.value ='' // every click after value must empty

    pendingNumber2.textContent = newArr.length // correct every change in ul
    localStorage.setItem('depo', JSON.stringify(newArr));//repoyu güncelleme
    
})


 // listArr.splice(index, 1); // delete the particular indexed li   
// **************function to  delete all task list inside ul*************
deleteAllBtn1.addEventListener('click',()=>{
    listArr = [] // empty an array
    let newLi = '';
    todoList.innerHTML = newLi;
    pendingNumber1.textContent = listArr.length;

    // after delete all tasks again update the local storage
    localStorage.setItem('New Todo', JSON.stringify(listArr));
// 


});

deleteAllBtn2.addEventListener('click',()=>{
    newArr = [] // empty an array
    let newLi2 = '';
    todoList2.innerHTML = newLi2;
    pendingNumber2.textContent = newArr.length;
    

    // after delete all tasks again update the local storage
    localStorage.setItem('depo', JSON.stringify(newArr));

});

// deleteItem`${index}`.addEventListener("click", deleteTasks1);

// function deleteTasks1() {

//     let getLocStr = localStorage.getItem('New Todo');
//     listArr = JSON.parse(getLocStr);
//     localStorage.setItem('New Todo', JSON.stringify(listArr))



                ////1.yol 
    // listArr.forEach((element, index) => {
    //     if (element.target.className == `delete1(${index})`) {
    //         element.remove();


                /////2.yol
    // listArr.forEach((element, index) => {
    //     if (index.target.className == `delete1(${index})`) {
    //         element.remove();
    // }})

    // }})};




    //             / forEach fonksiyonunda sadece index yazabilirmiyiz?
    // listArr.forEach((index) => {
    //     deleteItem1 = document.getElementsByClassName(`delete1(${index})`);
    // });
    
    
