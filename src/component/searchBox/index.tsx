import { useEffect, useState, useRef } from "react";
import { ITask } from "../../common/typings/Task";
import "./styles.css";
interface ISearchBox {
  options: ITask[];
}

const SearchBox: React.FC<ISearchBox> = (props) => {
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const tasksStorage = JSON.parse(localStorage.getItem("tasks") || "[]");
    setOptions(tasksStorage);
  }, []);
  
  const updateText = (e: any) => {
    console.log(e);
    setSearch(e);
    setDisplay(false);
  };
  const handleBlur = () => {
    setTimeout(function () {
      setDisplay(false);
    }, 2000);
  };
  return (
    <div onBlur={handleBlur} className="search-box-root">
      <input
        id="auto"
        onClick={() => setDisplay(!display)}
        className="input-search"
        placeholder="Search..."
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
          setDisplay(true);
        }}
      />
      {display && (
        <div className="autoContainer">
          {options
            .filter(
              (task: ITask) => task.title.indexOf(search.toLowerCase()) > -1
            )
            .map((task: ITask, index) => {
              return (
                <div
                  className="option"
                  onClick={() => updateText(task.title)}
                  key={index}
                >
                  <span>{task.title}</span>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
