// const inputBox = document.getElementById('inputBox');
// const list = document.getElementById('list');

// function addTask() {
//     if (inputBox.value === "") {
//         alert('something must be written');
//     } else {
//         let li = document.createElement('list');
//         li.innerHTML = inputBox.value;
//         list.appendChild(list);
//     }
// }
const todo = ['make dinner', "wash-clothes"];  


renderTodo()


function renderTodo() {

    let todoHTML = "";

    for (let i = 0; i < todo.length; i++) {
        const todo = todo[i];
    const html = `<p>${todo}</p>`
        todoHTML += html
    }

    document.querySelector('.myInput')
    .innerHTML = todoHTML;
}

function addTask() {
    const inputClass = document.querySelector('.myInput');
    const name = inputClass.value;
    todo.push(name);
    inputClass.value = "";

    renderTodo();
}

























// const todoList = document.getElementById('myUL');

// todoList.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         return  event.target.classList.toggle('completed');
//     }
// });



// var myNodelist = document.getElementsByTagName("LI");
// var i;

// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement(SPAN);
//      var txt = document.createTextNode("\u00D7")
//      span.className = "close";
//      span.appendChild(txt);
//      myNodelist[i].appendChild(span)
// }
// var close = document.getElementsByClassName('close')
// var i;
//  for (i = 0; i < close.length; i++) {
//     close[i].onClick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
//  }
//  var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//     if (ev.target.tagName === "LI") {

//         ev.target.classList.toggle('checked');
//     }
//  }, false);

//  function newElement() {
//     var li = document.createElement('li');
//     var inputValue = document.getElementById('myInput').value;
//     var t = document.createTextNode(inputvalue);
//     li.appendChild(t);
//     if (inputValue === "") {
//         alert("PLEASE WRITE A TASK")
//     } else {
//         document.getElementById("myUL").appendChild(li);
//     }

//     document.getElementById(myinput).value = "";
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7")
//     span.className = "close";
//     span.appendChild(txt);
//     li[i].appendChild(span);


//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function() {
//             var div = this.parentElement;
//             div.style.display = "none";
//         }
//     }s
//  }