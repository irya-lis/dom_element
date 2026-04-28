let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");


let trHead = document.createElement("tr");

let th1 = document.createElement("th");
th1.textContent = "Name";

let th2 = document.createElement("th");
th2.textContent = "Age";

let th3 = document.createElement("th");
th3.textContent = "Salary";

let th4 = document.createElement("th");
th4.textContent = "Remove";

trHead.appendChild(th1);
trHead.appendChild(th2);
trHead.appendChild(th3);
trHead.appendChild(th4)
thead.appendChild(trHead);

table.appendChild(thead);
table.appendChild(tbody);
document.body.appendChild(table);

for (let employee of employees) {
    createFullTr(employee);
}


function createFullTr(text) {

    let trBody = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.addEventListener("click", addInput);
    tdName.textContent = text.name;

    let tdAge = document.createElement("td");
    tdAge.addEventListener("click", addInput);
    tdAge.textContent = text.age;

    let tdSalary = document.createElement("td");
    tdSalary.addEventListener("click", addInput);
    tdSalary.textContent = text.salary;

    let tdLink = document.createElement("td");
    let linkRemove = document.createElement("a");
    linkRemove.textContent = "remove";
    linkRemove.href = "#";
    linkRemove.addEventListener("click", removeElem);
    tdLink.appendChild(linkRemove);

    trBody.appendChild(tdName);
    trBody.appendChild(tdAge);
    trBody.appendChild(tdSalary);
    trBody.appendChild(tdLink);
    tbody.appendChild(trBody);
}

function addInput() {
    if (this.querySelector("input")) {
        return;
    }

    let editInput = document.createElement("input");
    editInput.value = this.textContent;
    this.textContent = "";

    this.appendChild(editInput);
    editInput.focus();

    editInput.addEventListener("blur", () => {
        this.textContent = editInput.value;
    });
}

function removeElem(event) {
    event.preventDefault();
    let tr = event.target.closest('tr');
    let table = event.target.closest("table");

    if (tr) {
        tr.remove(); // Сначала удаляем строку!
    }

    if (table.rows.length === 1) {
        table.classList.add("hide");

        let message = document.createElement("p");
        message.id = "empty-msg";
        message.textContent = "Данных в таблице больше нет!";
        document.body.appendChild(message);
    }
}

function addNewEmployeeForm() {

    let form = document.createElement("div");

    let labelInputName = document.createElement("label");
    labelInputName.htmlFor = "name";
    labelInputName.textContent = "Name: ";

    let inputName = document.createElement("input");
    inputName.placeholder = "Введите имя...";
    inputName.id = "name";
    inputName.required = true;

    let labelInputAge = document.createElement("label");
    labelInputAge.htmlFor = "age";
    labelInputAge.textContent = "Age: ";

    let inputAge = document.createElement("input");
    inputAge.placeholder = "Введите возраст...";
    inputAge.id = "age";
    inputAge.type = "number";
    inputAge.min = "18";
    inputAge.max = "70";
    inputAge.required = true;


    let labelInputSalary = document.createElement("label");
    labelInputSalary.htmlFor = "salary";
    labelInputSalary.textContent = "Salary: ";

    let inputSalary = document.createElement("input");
    inputSalary.placeholder = "Введите зарплату...";
    inputSalary.id = "salary";
    inputSalary.min = "0";
    inputSalary.type = "number";
    inputSalary.required = true;


    let button = document.createElement("button");
    button.textContent = "Add employee";


    let errorField = document.createElement("p");
    errorField.classList.add("red_text");
    document.body.appendChild(errorField);

    button.addEventListener("click", function () {
            let newEmployee = {
                name: inputName.value,
                age: inputAge.value,
                salary: inputSalary.value
            };

            if (inputName.checkValidity() && inputAge.checkValidity() && inputSalary.checkValidity()) {
                errorField.textContent = "";

                table.classList.remove("hide");
                table.classList.add("show");
                let message = document.getElementById("empty-msg");
                if (message) {
                    message.remove();
                }

                createFullTr(newEmployee);

                inputName.value = "";
                inputAge.value = "";
                inputSalary.value = "";
            } else {
                errorField.textContent = "Ошибка: проверьте возраст (18-70) и заполните все поля!";
            }


        }
    )

    form.appendChild(labelInputName);
    form.appendChild(inputName);

    form.appendChild(labelInputAge);
    form.appendChild(inputAge);

    form.appendChild(labelInputSalary);
    form.appendChild(inputSalary);

    form.appendChild(button);
    document.body.appendChild(form);
}

addNewEmployeeForm();


// 1.  Дан следующий массив с работниками:
//
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// Выведите этих работников в HTML таблице.


// 2.  Добавьте ячейкам созданной таблицы возможность редактирования.

// 3.  Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.

// 4.  Сделайте под таблицей 3 инпута и кнопку для добавление нового работника.
// Пусть в инпуты вводятся имя, возраст и зарплата,
// и по нажатию на кнопку новый работник добавляется в таблицу.
// Реализуйте редактирование ячеек для вновь добавленных работников.