const bgc=document.getElementById("js")
bgc.style.backgroundColor="red"

const div2=document.getElementsByClassName("div2");
div2[0].innerHTML="20"
div2[1].innerHTML="20"

const hide=document.querySelector("#js>h1")
hide.style.display="none";

const newDiv=document.createElement("div");
newDiv.innerHTML="heloo world";
const body1 = document.getElementsByTagName("body");
body1[0].appendChild(newDiv);

const container = document.getElementById("container");
const paragraph = document.createElement("p");
paragraph.textContent = "Hello, I will disappear soon!";
container.appendChild(paragraph);
container.removeChild(paragraph);

const form = document.getElementById("myForm");
const input = document.getElementById("textInput");
const error = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 
  if (input.value.trim() === "") {
    error.textContent = "Input cannot be empty!";
  } else {
    console.log("Input Value:", input.value);
    error.textContent = "";
  }
});

const student = {
    name: "Ali",
    age: 20,
    introduce() {
      console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    },
  };
  student.introduce();
  function Student(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = function () {
      console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    };
  }
  const s1 = new Student("Sara", 21);
  const s2 = new Student("Omar", 22);
  s1.introduce();
  s2.introduce();
  console.log("Keys:", Object.keys(student));
  console.log("Values:", Object.values(student));

  const car = {
    brand: "Toyota",
    showThis() {
      console.log(this);
    },
  };
  
  car.showThis(); 
  const obj = {
    name: "Test",
    regularFunction: function () {
      console.log("Regular:", this);
    },
    arrowFunction: () => {
      console.log("Arrow:", this);
    },
  };
  obj.regularFunction();
  obj.arrowFunction();
  function Book(title, author) {
    this.title = title;
    this.author = author;
  }
  const book1 = new Book("1984", "George Orwell");
  console.log(book1.title, book1.author);

  function parseJSON(jsonStr) {
    try {
      return JSON.parse(jsonStr);
    } catch (error) {
      console.error("Invalid JSON:", error.message);
    }
  }
  
  console.log(parseJSON('{"name":"Ali"}'));
  console.log(parseJSON("not-json"));
  
  function calculateArea(radius) {
    try {
      if (typeof radius !== "number" || radius < 0) {
        throw new Error("Radius must be a positive number.");
      }
      const area = Math.PI * radius ** 2;
      console.log("Area:", area);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      console.log("Calculation completed.");
    }
  }
  calculateArea(5);
  calculateArea(-2);

  const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskError = document.getElementById("taskError");


taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  try {
    const taskText = taskInput.value.trim();
    if (!taskText) throw new Error("Task name cannot be empty.");
    const li = document.createElement("li");
    li.textContent = taskText;
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
      const newTask = prompt("Edit task:", li.firstChild.textContent);
      if (newTask) li.firstChild.textContent = newTask;
    };
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => li.remove();
    li.append(" ", editBtn, deleteBtn);
    taskList.appendChild(li);
    taskInput.value = "";
    taskError.textContent = "";
  } catch (error) {
    taskError.textContent = error.message;
  }
});