const inputBox = document.getElementById('inputBox');
const list = document.getElementById('list');

function addTask() {
    if (inputBox.value === "") {
        alert('something must be written');
    } else {
        let li = document.createElement('list');
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
     inputBox.value = "";
}

    // const todo = ['make dinner', "wash-clothes"];  


    // renderTodo()


    // function renderTodo() {

    //     let todoHTML = "";

    //     for (let i = 0; i < todo.length; i++) {
    //         const todo = todo[i];
    //     const html = `<p>${todo}</p>`
    //         todoHTML += html
    //     }

    //     document.querySelector('.myInput')
    //     .innerHTML = todoHTML;
    // }

    // function addTask() {
    //     const inputClass = document.querySelector('.myInput');
    //     const name = inputClass.value;
    //     todo.push(name);
    //     inputClass.value = "";

    //     renderTodo();
    // }