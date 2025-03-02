(function () {
    var taskInputForm = document.querySelector('#taskInputForm');
    var taskTitleInput = document.querySelector('#taskTitleInput');
    var taskContentInput = document.querySelector('#taskContentInput');
    var taskList = document.querySelector('#taskList');
    var taskArray = [];
    var getTask = function () {
        var title = taskTitleInput.value.trim();
        var content = taskContentInput.value.trim();
        if (title !== '' && content !== '') {
            var taskInfo = {
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
    var addTask = function () {
        var title = taskArray[taskArray.length - 1].title;
        var content = taskArray[taskArray.length - 1].content;
        var task = document.createElement('li');
        task.innerHTML = "<strong>".concat(title, "</strong>: ").concat(content);
        var deleteTaskBtn = document.createElement('button');
        deleteTaskBtn.innerHTML = 'X';
        deleteTaskBtn.addEventListener('click', function () {
            task.remove();
        });
        taskList.appendChild(task);
        task.appendChild(deleteTaskBtn);
    };
    taskInputForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var task = getTask();
        if (task) {
            addTask();
        }
    });
})();
