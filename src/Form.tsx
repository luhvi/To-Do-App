import React from 'react';
import { JSX } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Form = (): JSX.Element => {
  type Task = {
    content: string;
    title: string;
    id: number;
  };

  const [tasks, setTasks] = React.useState<Task[]>([]);

  const newTask = tasks.map((task) => (
    <div className="task" key={task.id}>
      <p>
        <strong>{task.title}</strong> {task.content}
      </p>
      <button onClick={() => deleteTask(task.id)} className="delete-task-btn">
        X
      </button>
    </div>
  ));

  const submitTask = (formData: FormData): void => {
    const taskData = Object.fromEntries(formData) as Omit<Task, 'id'>;
    setTasks((prevTasks) => [
      ...prevTasks,
      { ...taskData, id: prevTasks.length },
    ]);
  };

  const deleteTask = (id: number): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <form action={submitTask}>
        <label>
          <input
            type="text"
            placeholder="Enter task title..."
            aria-label="Enter task title..."
            name="title"
            className="task-input"
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Enter task content..."
            aria-label="Enter task content..."
            name="content"
            className="task-input"
            id="task-content-input"
          />
        </label>
        <button className="add-task-btn">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <main>{newTask}</main>
    </>
  );
};

export default Form;
