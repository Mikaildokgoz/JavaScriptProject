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


showTasks()
showTasks2()

function localTest() {
    let getLocStr = localStorage.getItem('New toDo')
    if (getLocStr == null) {
        listArr = []
    } else {
        let listArr = []
        listArr = JSON.parse(getLocStr)
    }
}

function showTasks() {
    localTest();
    
    let newLi = ''
    listArr.forEach((element,index) => {
        newLi += `<li> ${element} <span   onclick='deleteTasks(${index})';  ><i class="fas fa-trash"></i></span></li>`
    });

    todoList.innerHTML = newLi
    pendingNumber1.textContent = listArr.length
}

function deleteTasks(index) {

    listArr.splice(index,1)
    localStorage.setItem('New toDo',JSON.stringify(listArr));

    showTasks()
}
//--

addBtn1.addEventListener('click',()=>{


    let userData = inputBox.value;  //ekrana
    listArr.push(userData)

    localStorage.setItem('New toDo',JSON.stringify(listArr));  //locale

    inputBox.value = ''

    showTasks()
})

deleteAllBtn1.addEventListener('click',()=>{
    listArr = [] // empty an array
    let newLi = '';
    todoList.innerHTML = newLi;
    pendingNumber1.textContent = listArr.length;

    // after delete all tasks again update the local storage
    localStorage.setItem('New todo', JSON.stringify(listArr));
// 
})

//---------------------------------------------------------------//

function localTest2() {
    let getFromLocalStr = localStorage.getItem('new toDo2')
    if (getFromLocalStr == null) {
        listArr2 = []
    } else {
        localStorage.setItem('new toDo2',JSON.stringify(listArr2))
    }
}

function showTasks2() {
    localTest2();

    newLi2 = ''
    listArr2.forEach((element2,index2) => {
        newLi2 += `<li> ${element2} <span   onclick='deleteTasks2(${index2})';  ><i class="fas fa-trash"></i></span></li>`
    });

    todoList2.innerHTML = newLi2
    pendingNumber2.innerHTML = listArr2.length
}

addBtn2.addEventListener('click',()=>{
    let userData2 = inputBox.value
    listArr2.push(userData2)

    localStorage.setItem('new toDo2',JSON.stringify(listArr2))

    userData2 = '' // _?

    showTasks2()
})

function deleteTasks2(index2) {
    listArr2.splice(index2,1)
    localStorage.setItem('new toDo2',JSON.stringify('listArr2'))

    showTasks2()
}

// deleteAllBtn2.addEventListener('click',()=>{
//     listArr2 = []
//     localStorage.setItem('new toDo2',JSON.stringify('listArr2'))

//     showTasks2()
// });