tasks = []
unfinishedTasks = []
finshedTasks = []

function addTask(task) {
    tasks.push(task)
    unfinishedTasks.push(task)

}

function finishtask(taskName) {
    let indexof = unfinishedTasks.findIndex((task) => task.taskName === taskName)
    let splicedtask = unfinishedTasks.splice(indexof, 1)
    finshedTasks.push(splicedtask)
}

module.exports = {
    tasks,
    unfinishedTasks,
    finshedTasks,
    addTask,
    finishtask,
}