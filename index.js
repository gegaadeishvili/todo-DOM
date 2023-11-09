const inp = document.getElementById("search");
const list = document.getElementById("list");

function addTask() {
    if (inp.value === '') {
        alert('Write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = inp.value;
        list.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inp.value = '';
}

list.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

