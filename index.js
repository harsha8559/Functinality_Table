let btn = document.getElementById('button');
let list = document.getElementById('todo-list');
let inputBox = document.getElementById('input');
let update = document.getElementById('update');
let remove = document.getElementById('remove');




let currentValue = '';
inputBox.addEventListener('input', function (e) {
    currentValue = e.target.value;
});


inputBox.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        addList();
    }
})

function createNewNode() {
    let newItem = document.createElement('li');
    let textNode = document.createTextNode(currentValue);
    newItem.appendChild(textNode);
    newItem.id = 'item-' + (list.childElementCount + 1);

    return newItem;
}

function addList() {
    if (currentValue !== undefined && currentValue !== null && currentValue !== '') {
        let newListElement = createNewNode();
        list.appendChild(newListElement);
        inputBox.value = '';
        currentValue = '';
    }
    else {
        alert('Enter the item in the todo list');
    }

}

btn.addEventListener('click', addList);

update.addEventListener('click', function () {
    let firstItem = list.firstElementChild;
    let newListElement = createNewNode();
    list.replaceChild(newListElement, firstItem);
})

remove.addEventListener('click', function () {
    let firstItem = list.firstElementChild;
    list.removeChild(firstItem);
})