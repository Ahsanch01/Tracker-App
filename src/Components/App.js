import React from "react";
import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Tasks from "../Tasks/Tasks";
import AddTask from "./AddTask";
import Footer from "./Footer";
import About from "./About";
const App = () => {
  const [showAdd, setShowAdd] = useState(false);

  const addTask = (task) => {
    console.log(task);
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const DeleteTask = (id) => {
    console.log("delete", id);
    setTasks(tasks.filter((task) => task.id != id));
  };

  const Reminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id == id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor appointment",
      date: "14 feb 2000",
      reminder: true,
    },
    {
      id: 2,
      text: "patient appointment",
      date: "13 feb 2000",
      reminder: true,
    },
    {
      id: 3,
      text: "Staff management",
      date: "12 feb 2000",
      reminder: false,
    },
  ]);
  return (
    <BrowserRouter>
      <div className="container">
        <Header onAdd={() => setShowAdd(!showAdd)} />
        {showAdd && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={DeleteTask} onToggle={Reminder} />
        ) : (
          <h4>Set Task</h4>
        )}
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
