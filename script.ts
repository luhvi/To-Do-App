(() => {
  const taskInputForm = document.querySelector(
    '#taskInputForm'
  ) as HTMLFormElement;

  const taskTitleInput = document.querySelector(
    '#taskTitleInput'
  ) as HTMLInputElement;

  const taskContentInput = document.querySelector(
    '#taskContentInput'
  ) as HTMLInputElement;

  const taskList = document.querySelector('#taskList') as HTMLUListElement;

  type Task = {
    title: string;
    content: string;
    id: number;
  };

  const getTask = (): Task => {
    const title: string = taskTitleInput.value.trim();
    const content: string = taskContentInput.value.trim();

    if (title !== '' && content !== '') {
      const taskInfo: Task = {
        title: title,
        content: content,
        id: taskArray.length,
      };

      taskTitleInput.value = '';
      taskContentInput.value = '';
      return taskInfo;
    }
    throw new Error('Title and content were empty.');
  };

  let taskArray: Task[] = [];

  const renderTask = (): void => {
    taskList.innerHTML = '';
    taskArray.forEach((taskArg, id) => {
      const task: HTMLLIElement = document.createElement('li');
      task.innerHTML = `<strong>${taskArg.title}</strong>: ${taskArg.content}`;

      const deleteTaskBtn: HTMLButtonElement = document.createElement('button');
      deleteTaskBtn.innerHTML = 'X';

      deleteTaskBtn.addEventListener('click', () => {
        taskArray.splice(id, 1);
        renderTask();
      });

      const editTaskPencilBtn: HTMLButtonElement =
        document.createElement('button');
      editTaskPencilBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>';

      editTaskPencilBtn.addEventListener('click', () => {
        const editTaskTitleInput: HTMLInputElement =
          document.createElement('input');
        editTaskTitleInput.id = 'editTaskTitleInput';
        editTaskTitleInput.placeholder = 'Edit task title...';

        const editTaskContentInput: HTMLInputElement =
          document.createElement('input');
        editTaskContentInput.id = 'editTaskContentInput';
        editTaskContentInput.placeholder = 'Edit task content...';

        const editTaskBtn: HTMLButtonElement = document.createElement('button');
        editTaskBtn.innerHTML = 'Edit';
        editTaskBtn.onclick = () => {
          const taskTitleValue: HTMLInputElement | null =
            document.querySelector('#editTaskTitleInput');
          const taskContentValue: HTMLInputElement | null =
            document.querySelector('#editTaskContentInput');

          if (taskTitleValue !== null && taskContentValue !== null) {
            if (taskTitleValue.value !== '' && taskContentValue.value !== '') {
              const taskTitle = taskTitleValue.value;
              const taskContent = taskContentValue.value;

              editTask(id, taskTitle, taskContent);
              renderTask();
            }
          }
        };

        task.appendChild(editTaskTitleInput);
        task.appendChild(editTaskContentInput);
        task.appendChild(editTaskBtn);
      });

      taskList.appendChild(task);
      task.appendChild(deleteTaskBtn);
      task.appendChild(editTaskPencilBtn);
    });
  };

  const editTask = (
    id: number,
    newTitle: string,
    newContent: string
  ): Task | null => {
    const task: Task[] = taskArray.map((element) => {
      if (element.id === id) {
        const editedTask: Task = {
          title: newTitle,
          content: newContent,
          id: id,
        };
        return editedTask;
      }
      return element;
    });
    console.log(taskArray);
    taskArray = task;
    console.log(taskArray);
    return null;
  };

  taskInputForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const task: Task = getTask();
    if (task) {
      taskArray.push(task);
      renderTask();
    }
  });
})();
