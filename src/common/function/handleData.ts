import { ITask } from "../typings/Task";

function compare(a: ITask, b: ITask) {
  if (a.date < b.date) {
    return -1;
  }
  if (a.date > b.date) {
    return 1;
  }
  return 0;
}

export const addToCartLocalStorage = (task: ITask) => {
  let tasks;
  tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push(task);
  tasks.sort(compare);
  console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(JSON.parse(localStorage.getItem("tasks") || "[]"));
  alert("Add a new task success");
};

export const updateStorage = (task: ITask) => {
  let tasks = [];
  tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  try {
    for (let i = 0; i < tasks.length; i++) {
      if (task.id === tasks[i].id) {
        console.log(task);
        tasks[i] = task;
      }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(JSON.parse(localStorage.getItem("tasks") || "[]"));
    alert("Update success");
  } catch (e) {
    console.log(e);
  }
};

export const removeTask = (id: string) => {
  let tasks = [];
  tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  try {
    for (let i = 0; i < tasks.length; i++) {
      if (id === tasks[i].id) {
        tasks.splice(i, 1);
      }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(JSON.parse(localStorage.getItem("tasks") || "[]"));
    alert("Delete success");
  } catch (e) {
    console.log(e);
  }
};
