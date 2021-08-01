import Input from "../../../../component/input";
import Checkbox from "../../../../component/checkbox";
import DatePicker from "../../../../component/datepicker";
import Button from "../../../../component/button";
import TextArea from "../../../../component/textarea";
import Select from "../../../../component/select";

import classNames from "classnames";
import "./styles.css";
import { useEffect, useState } from "react";
import { IPriority, ITask } from "../../../../common/typings/Task";
import { options } from "../../../../constant/priority";
import {
  checkDate,
  getDateToString,
} from "../../../../common/function/getDate";
import {
  updateStorage,
  removeTask,
} from "../../../../common/function/handleData";

interface ITaskPage {
  item: ITask;
  onRemove?: () => void;
  onCheckBox?: () => void;
  onEditTitle?: (e: string) => void;
  onEditContent?: (e: string) => void;
  onChangeDate?: () => void;
  onSelectPriority?: () => void;
}
const now = new Date();
const Task: React.FC<ITaskPage> = (props) => {
  const { item } = props;

  const [task, setTask] = useState<ITask>({
    id: "",
    title: "",
    content: "",
    date: getDateToString(now),
    priority: "Normal",
    checked: false,
  });
  const [open, setOpen] = useState(false);
  const [openBulk, setOpenBulk] = useState(false);

  const handleChecked = () => {
    setOpenBulk(!openBulk);

    setTask((prevState) => ({
      ...prevState,
      checked: !task.checked,
    }));
  };

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

  const handleUpdate = () => {
    updateStorage(task);
  };
  const handleDelete = () => {
    if (window.confirm(`Are you sure remove ${task.title} Task!`)) {
      removeTask(task.id);
      window.location.reload();
    } else {
      return;
    }
  };
  useEffect(() => {
    setTask(item);
  }, [item]);
  return (
    <div className="root">
      <div className="header">
        <Checkbox
          onChange={handleChecked}
          label={task.title}
          checked={task.checked}
        />

        <div className="flex-button">
          <Button
            onClick={() => {
              setOpen(!open);
            }}
            color="primary"
          >
            {open ? "Collapse" : "Detail"}
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Remove
          </Button>
        </div>
      </div>
      <div
        className={classNames({
          "bulk-container": true,
          "open-bulk": openBulk,
        })}
      >
        <p>Buld Action:</p>
        <div className="bulk-button">
          <Button
            color="primary"
            onClick={() => {
              setOpenBulk(false);
            }}
          >
            Done
          </Button>
          <Button onClick={handleDelete} color="secondary">
            Remove
          </Button>
        </div>
      </div>

      <div
        className={classNames({
          content: true,
          "open-content": open,
        })}
      >
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
        <div className="grid" style={{ marginTop: "4rem" }}>
          <DatePicker
            onChange={handleChangeDate}
            value={task.date}
            label="Due Date"
          />
          <Select
            onChange={handleChangeSelect}
            value={task.priority}
            list={options}
            label="Priority"
          />
        </div>
        <div style={{ marginTop: "3rem", width: "100%" }}>
          <Button onClick={handleUpdate} color="tertiary">
            Update
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Task;
