import { useState } from 'react';
import { JSX } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

type Task = {
  title: string;
  content: string;
  id: number;
};

const Form = (): JSX.Element => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTitleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTitle(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setContent(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks((prevTasks) => [
      ...prevTasks,
      { title, content, id: tasks.length },
    ]);
    setTitle('');
    setContent('');
  };

  const deleteTask = (id: number): void => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const newTask = tasks.map((task) => (
    <div className="task" key={task.id}>
      <p>
        <strong>{task.title}:</strong> {task.content}
      </p>
      <button onClick={() => deleteTask(task.id)} className="delete-task-btn">
        X
      </button>
    </div>
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            required
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter task title..."
            aria-label="Enter task title..."
            name="title"
            className="task-input"
          />
        </label>
        <label>
          <input
            type="text"
            required
            value={content}
            onChange={handleContentChange}
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
