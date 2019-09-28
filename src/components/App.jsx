import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import TaskForm from "./tasks/taskForm/TaskForm";
import TaskList from "./tasks/taskList/TaskList";

import "./styles.css";
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (tasks.length === 0) {
      if (localStorage.getItem("tasks")) {
        setTasks(JSON.parse(localStorage.getItem("tasks")));
      }
    }
  }, []);

  useEffect(() => {
    if (
      localStorage.getItem("tasks") &&
      JSON.parse(localStorage.getItem("tasks").length !== tasks.length)
    ) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  function toggleComplete(id) {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  function deleteCompleted() {
    const updatedTasks = tasks.filter(task => !task.completed);
    setTasks(updatedTasks);
  }

  return (
    <div className="background">
      <section>
        <Switch>
          <Route
            path="/edittask/:id"
            render={props => (
              <TaskForm
                {...props}
                setTasks={setTasks}
                tasks={tasks}
                edit={true}
              />
            )}
          />
          <Route
            path="/addtask"
            render={props => (
              <TaskForm {...props} setTasks={setTasks} tasks={tasks} />
            )}
            edit={false}
          />
          <Route
            exact
            path="/"
            render={props => (
              <TaskList
                {...props}
                tasks={tasks}
                toggle={toggleComplete}
                delete={deleteCompleted}
              />
            )}
          />
        </Switch>
      </section>
    </div>
  );
}

export default App;
