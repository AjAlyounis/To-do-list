import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IcoMoon from "react-icomoon";
import Date from "../../Date";
function Task({ task, toggle, props, setTasks }) {
  return (
    <Fragment>
      <button onClick={() => toggle(task.id)} className="check-style">
        {" "}
        <IcoMoon icon="checkmark" className="checkmark" />
      </button>
      <li>{task.completed ? <del>{`${task.task}`}</del> : `${task.task}`}</li>
      <button className="edit-style">
        <Link to={`/edittask/${task.id}`}>
          {" "}
          <IcoMoon icon="pencil2" />
        </Link>
      </button>

      <button className="delete-style" onClick={props.delete}>
        <IcoMoon icon="bin" />
      </button>
    </Fragment>
  );
}

export default Task;
