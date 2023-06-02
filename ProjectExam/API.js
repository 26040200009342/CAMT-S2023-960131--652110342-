// BEGIN: configuration zone
var CRUD_CURD_ID = "4814e6e970a440378e98ba48c72b5a54";
var CRUD_CURD_RESOURCE_NAME = "todo";
var CURD_CURD_API_ENDPOINT =
  "https://crudcrud.com/api/" + CRUD_CURD_ID + "/" + CRUD_CURD_RESOURCE_NAME;
// END:configuration zone

// BEGIN: application variables zone
var APPLICATION_STATE = {
  todoList: [],
};
// END: application variables zone

// BEGIN: utility function zone
function htmlToElem(html) {
  let temp = document.createElement("template");
  html = html.trim(); // Never return a space text node as a result
  temp.innerHTML = html;
  return temp.content.firstChild;
}
// END: utility function zone

// BEGIN: API fetching zone
async function loadTodoList() {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: headers,
  };

  fetch(CURD_CURD_API_ENDPOINT, requestOptions)
}

function addNewTodoItem(value) {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    body: JSON.stringify({
      name: value,
    }),
    headers: headers,
  };

  fetch(CURD_CURD_API_ENDPOINT, requestOptions)
}

// END: API fetching zone

// BEGIN: UI Control and logic zone
function bindEvents() {
  var addButtonElm = document.getElementById("todo-add-button");
  addButtonElm.addEventListener("click", function () {
    var inputElm = document.getElementById("todo-input");
    var todoValue = inputElm.value;
    inputElm.value = "";
    if (todoValue !== "") {
      addNewTodoItem(todoValue, function () {
        refreshTodoList();
      });
    }
  });
}

function renderTodoList() {
  var todoListElm = document.getElementById("todo-list-container");
  todoListElm.innerHTML = "";

  for (var idx = 0; idx < APPLICATION_STATE.todoList.length; idx++) {
    var todoItem = APPLICATION_STATE.todoList[idx];
    var todoItemElm = htmlToElem(
      '<div class="todo-item">' +
        "<span>" +
        todoItem.name +
        "</span>" +
        "</div>"
    );
    todoListElm.append(todoItemElm);
  }
}

function refreshTodoList() {
  loadTodoList(function (data) {
    APPLICATION_STATE.todoList = data;
    renderTodoList(); // Move this line outside the API fetch block
  });
}
// END: UI Control and logic zone
