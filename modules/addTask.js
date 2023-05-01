export function addTask(){
  const taskName = document.querySelector('#taskName').value;
  const totalHours = parseInt(document.querySelector('#totalHours').value);
  const hoursPerWeek = parseInt(document.querySelector('#hoursPerWeek').value);
  
  const task = {
    name: taskName,
    totalHoursRequired: totalHours,
    hoursPerWeekRequired: hoursPerWeek,
    totalHoursSoFar : 0,
    hoursThisWeek : 0
  };

  const tasks = document.getElementById('tasks-list')
  const taskElement = document.createElement('tr')

  taskElement.id = 'task'
  taskElement.innerHTML = `
    <td>${task.name}</td>
    <td>${task.totalHoursRequired}</td>
    <td>${task.hoursPerWeekRequired}</td>
    <td>${task.hoursThisWeek}
    <td>${task.totalHoursSoFar}</td>
  `
  tasks.appendChild(taskElement);
  // Clear the form inputs
  const form = document.querySelector('form');
  form.reset();

}