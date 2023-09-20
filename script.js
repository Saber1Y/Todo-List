const inputBox = document.getElementById('inputBox');
const list = document.getElementById('list');
const listItem = document.getElementById('listItem');
const addBtn = document.querySelector('.addBtn');

addBtn.addEventListener('click', () => {
  addTask();
});

function addTask() {
    const addedList = inputBox.value;

    if( addedList !== "") {
        const listTodo = document.createElement('li');
        // listTodo.textContent = addedList;
        listTodo.innerHTML = `<input type="checkBox"> ${addedList}`;
        list.appendChild(listTodo);
        inputBox.value = "";

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');
        listTodo.appendChild(deleteButton);
    }
}
