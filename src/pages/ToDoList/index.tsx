import { useEffect, useState } from "react";
import { ITask } from "../../common/typings/Task";
import Task from "./component/task";
import SearchBox from "../../component/searchBox";
import "./styles.css";
interface IToDoList {}

const ToDoList: React.FC<IToDoList> = (props) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const getData = () => {
    const tasksStorage = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(tasksStorage);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="to-do-root">
      <div>
        <SearchBox options={tasks} />
      </div>

      <div className="title">
        <p>To do list</p>
      </div>

      <div>
        {tasks.map((item) => {
          return <Task key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default ToDoList;
