import React from "react";
import { Link } from "react-router-dom";
import Task from "./Task";
import IcoMoon from "react-icomoon";

function TaskList(props) {
  console.log(props);
  return (
    <div>
      <h6 className="date-time">Friday, 25 September 2019</h6>
      <h1 className="todo-title">To do List</h1>

      <ul className="ul-style">
        {props.tasks.map(task => (
          <Task key={task.id} task={task} toggle={props.toggle} props={props} />
        ))}
      </ul>

      <button className="add-style">
        <Link to="/addtask">
          <IcoMoon icon="plus" className="plus" />
        </Link>
      </button>
    </div>
  );
}

export default TaskList;
