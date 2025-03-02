(() => {
  const taskInputForm: HTMLFormElement = document.querySelector(
    '#taskInputForm'
  ) as HTMLFormElement;

  const taskTitleInput: HTMLInputElement = document.querySelector(
    '#taskTitleInput'
  ) as HTMLInputElement;

  const taskContentInput: HTMLInputElement = document.querySelector(
    '#taskContentInput'
  ) as HTMLInputElement;

  const taskList: HTMLUListElement = document.querySelector(
    '#taskList'
  ) as HTMLUListElement;

  type Task = {
    title: string;
    content: string;
  };

  const taskArray: Task[] = [];

  const getTask = (): Task | undefined => {
    const title: string = taskTitleInput.value.trim();
    const content: string = taskContentInput.value.trim();

    if (title !== '' && content !== '') {
      const taskInfo: Task = {
        title: title,
        content: content,
      };
      taskArray.push(taskInfo);

      taskTitleInput.value = '';
      taskContentInput.value = '';
      return taskInfo;
    }
    return undefined;
  };

  const addTask = (): void => {
    const title = taskArray[taskArray.length - 1].title;
    const content = taskArray[taskArray.length - 1].content;

    const task = document.createElement('li');
    task.innerHTML = `<strong>${title}</strong>: ${content}`;

    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.innerHTML = 'X';

    deleteTaskBtn.addEventListener('click', () => {
      task.remove();
    });
    taskList.appendChild(task);
    task.appendChild(deleteTaskBtn);
  };

  taskInputForm.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const task = getTask();
    if (task) {
      addTask();
    }
  });
})();
