let addItems = document.getElementById("add");
let inputItems = document.getElementById("inputItems");
let ul = document.querySelector("ul");

function inputLength() {
    return inputItems.value.length
}

function createListElement(){
    let div = document.createElement("div");
    let li = document.createElement("li");
    let deleteItem = document.createElement("button");
    deleteItem.appendChild(document.createTextNode("❌"));
    ul.appendChild(div);
    div.append(li, deleteItem);
    div.classList.add("item-container")
    li.classList.add("list-group-item");
    deleteItem.classList.add("delItem")
    li.appendChild(document.createTextNode(inputItems.value));
    inputItems.value = "";
}

function deleteItem(item){
    if(item.target.className === "delItem"){
        item.target.parentElement.remove();
    }
}

function todoAddItems() {
    if(inputLength() > 0){
        createListElement();
    }
}

function todoAddItemsKeyPress(event) {
    if(inputLength() > 0 && event.key == "Enter"){
        createListElement();
    }
}

addItems.addEventListener("click", todoAddItems);

inputItems.addEventListener("keypress", todoAddItemsKeyPress)

ul.addEventListener("click", deleteItem);