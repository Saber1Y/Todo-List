const inputBox = document.getElementById('inputBox');
const list = document.getElementById('list');
const addBtn = document.querySelector('.addBtn');


addBtn.addEventListener('click', function(e) {
  addTask();
//     const deleteBtn = e.target;

//   if (deleteBtn.classList.contains('deleteButton')) {
//     //trying to access my List itmes using parantNode (have never used)//
//        deleteBtn.style.display = 'none';
//   }
});

function addTask() {
    const addedList = inputBox.value;

    if( addedList !== "") {
        const listTodo = document.createElement('li');
        listTodo.textContent = addedList;
        listTodo.innerHTML = `<input type="checkBox"> ${addedList}`;
        list.appendChild(listTodo);
        inputBox.value = "";
      
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.classList.add('delete-button');
        listTodo.appendChild(deleteButton);

        deleteButton.addEventListener('click', ()=> {
            // deleteButton.classList.remove('listTodo');
            listTodo.style.display = 'none';
        });
    } 
};
