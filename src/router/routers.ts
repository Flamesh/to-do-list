import { IRoute } from "./../common/typings/router.d";
import { lazy } from "react";

const ToDoList = lazy(() => import("../pages/ToDoList"));
const NewTask = lazy(() => import("../pages/NewTask"));

const ToDoListRoute: IRoute = {
  name: "To do list",
  path: "/to-do-list",
  exact: true,
  Component: ToDoList,
};
const NewTaskRoute: IRoute = {
  name: "new task",
  path: "/new-task",
  exact: true,
  Component: NewTask
}
export { ToDoListRoute, NewTaskRoute };
