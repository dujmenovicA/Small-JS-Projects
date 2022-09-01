const userInput = document.querySelector('#userInput');
const addButton = document.querySelector('button');
const list = document.querySelector('#list');
const inputDiv = document.querySelector('#inputDiv');

function newElement() {
    const newLi = document.createElement('li');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    if (userInput.value !== '') {
        newLi.innerHTML = userInput.value;
        editBtn.classList.add('edit');
        editBtn.innerHTML = 'Edit';
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = 'Delete';

        list.append(newLi);
        newLi.append(editBtn);
        newLi.append(deleteBtn);

        userInput.value = '';
    } else {
        alert('You must write something!');
    }

    deleteBtn.onclick = function () {
        let listItem = this.parentElement;
        list.removeChild(listItem);
    }

    editBtn.onclick = function () {
        let listItem = this.parentElement;
        const saveBtn = document.createElement('button');
        saveBtn.innerText = 'Save';
        saveBtn.classList.add('save');
        userInput.style.width = '60%';
        inputDiv.append(saveBtn);
        userInput.value = listItem.firstChild.nodeValue
        saveBtn.addEventListener('click', function () {
            saveBtn.remove();
            userInput.style.width = '70%';
            listItem.firstChild.nodeValue = userInput.value;
            userInput.value = ''
        })

    }
}

addButton.addEventListener('click', newElement);