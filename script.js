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
