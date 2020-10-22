var taskList = document.querySelector('.task-list');
taskList.addEventListener('click', function (event) {
  console.log(event.target);
  console.log(event.target.tagName);

  if (event.target && event.target.matches('button')) {
    var ancestorElement = event.target.closest('.task-list-item');
    console.log(ancestorElement);
    ancestorElement.remove();
  }
});
