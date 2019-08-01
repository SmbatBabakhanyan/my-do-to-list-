
const myNodelist = document.getElementsByTagName("li");
const list = document.querySelector('ul');
for (let i = 0; i < myNodelist.length; i++) {
    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        list.removeChild(this.parentElement);
    }
}
// Add a "checked" symbol when clicking on a list item
list.addEventListener('click', function (taskList) {
    if (taskList.target.tagName === 'LI') {
        taskList.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("LI");
    const a = document.createElement("a");
    const inputValue = document.getElementById("myInput").value;
    const text = document.createTextNode(inputValue);
    li.appendChild(a);
    a.appendChild(text);
    if (inputValue === '') { }
    else {
        list.appendChild(li);
    }
    document.getElementById("myInput").value = "";
    const span = document.createElement("span");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            list.removeChild(this.parentElement);
        }
    }
}
function myFunction() {
    var input, filter, a, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    for (let i = 0; i < myNodelist.length; i++) {
        a = myNodelist[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            myNodelist[i].style.display = "";
        } else {
            myNodelist[i].style.display = "none";
        }
    }
}

