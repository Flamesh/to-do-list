import Input from "../../component/input";
import DatePicker from "../../component/datepicker";
import Button from "../../component/button";
import TextArea from "../../component/textarea";
import Select from "../../component/select";

import "./styles.css";
import { useState } from "react";
import { IPriority, ITask } from "../../common/typings/Task";
import { checkDate, getDateToString } from "../../common/function/getDate";
import { options } from "../../constant/priority";
import { addToCartLocalStorage } from "../../common/function/handleData";
import produce from "immer";
import { getRandom } from "../../common/function/random";

interface INewTask {}
const now = new Date();

const NewTask: React.FC<INewTask> = (props) => {
  const [task, setTask] = useState<ITask>({
    id: getRandom(),
    title: "",
    content: "",
    date: getDateToString(now),
    priority: "Normal",
    checked: false,
  });

  const handleChangeText = (type: any, e: string) => {
    setTask((prevState) => ({
      ...prevState,
      [type]: e,
    }));
  };

  const handleChangeDate = (e: string) => {
    checkDate(now, e)
      ? setTask((prevState) => ({
          ...prevState,
          date: e,
        }))
      : alert("You can't chose time in past, chose again");
  };

  const handleChangeSelect = (e: IPriority) => {
    setTask((prevState) => ({
      ...prevState,
      priority: e,
    }));
  };

  const handleAdd = () => {
    if (!task.title || !task.content) {
      alert("you need fill all information");
      return;
    }
    produce(task, (draft) => {
      addToCartLocalStorage(draft);
      setTask({
        id: getRandom(),
        title: "",
        content: "",
        date: getDateToString(now),
        priority: "Normal",
        checked: false,
      });
    });
  };
  return (
    <div className="root">
      <div className="title">
        <p>New Task</p>
      </div>
      <div>
        <div style={{ marginBottom: "2rem" }}>
          <Input
            value={task.title}
            onChange={(e) => {
              handleChangeText("title", e.target.value);
            }}
            placeholder="Add new task ..."
          />
        </div>
        <div>
          <TextArea
            label="Description"
            onChange={(e) => {
              handleChangeText("content", e.target.value);
            }}
            rows={10}
            value={task.content}
          />
        </div>
        <div className="grid">
          <DatePicker
            value={task.date}
            onChange={handleChangeDate}
            label="Due Date"
          />
          <Select
            list={options}
            value={task.priority}
            onChange={handleChangeSelect}
            label="Priority"
          />
        </div>
        <div style={{ marginTop: "3rem", width: "100%" }}>
          <Button onClick={handleAdd} color="tertiary">
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
