let arr = [1, 2, 3, 4, 5];
let ul = document.createElement("ul");
document.body.appendChild(ul);


for (let elem of arr) {
    createFullLi(elem);
}

function createFullLi(text) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = text;
    span.addEventListener("click", addInp);
    li.appendChild(span);

    let removeLink = document.createElement("a");
    removeLink.textContent = " remove";
    removeLink.href = "#";
    removeLink.addEventListener("click", removeElem)
    li.appendChild(removeLink);

    let crossLink = document.createElement("a");
    crossLink.textContent = " cross out";
    crossLink.href = "#";
    crossLink.addEventListener("click", function (event) {
        event.preventDefault();
        span.classList.toggle("cross");
    });
    li.appendChild(crossLink);

    ul.appendChild(li);
}

let div = document.createElement("div");
div.textContent = "Add new element ";
document.body.appendChild(div);


let inputAddNewEl = document.createElement("input");
document.body.appendChild(inputAddNewEl);

inputAddNewEl.addEventListener("blur", function () {
    if (this.value !== "") {
        createFullLi(this.value);
        this.value = "";
    }
});


function addInp() {
    let input = document.createElement("input");
    input.value = this.textContent;
    let self = this;

    input.addEventListener("blur", function () {
        self.textContent = input.value;
        self.addEventListener("click", addInp);
    })


    self.textContent = "";
    self.appendChild(input);
    self.removeEventListener("click", addInp)
    input.focus();
}


function removeElem(event) {
    event.preventDefault();
    let li = event.target.closest("li");

    if (li) {
        li.remove();
    }
}


// 1.  Дан массив. Выведите его элементы в виде списка ul.

// 2.  Модифицируйте предыдущую задачу так,
// чтобы по клику на любую li в ней появлялся инпут,
// с помощью которого ее можно будет поредактировать.

// 3.  Модифицируйте предыдущую задачу так, чтобы под списком был инпут,
// с помощью которого можно будет добавить новый элемент в конец списка ul.
// Сделайте так, чтобы новые li также можно было редактировать.

// 4.  Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла ссылка 'удалить',
// с помощью которой можно будет удалить эту li из ul.

// 5. Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть',
// с помощью которой можно будет перечеркнуть текст данного тега li.