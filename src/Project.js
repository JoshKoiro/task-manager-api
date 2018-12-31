const Task = require('./Task.js')
const Board = require('./Board.js')
const Schedule = require('./Schedule.js')
const Timer = require('./Timer.js')

/**@name Project
 * @class
 * @description Class to hold tasks, board and schedule data
 * @param {String} name name of project
 * @property {String} name name of project
 * @property {Array} tasks list of Task objects within the Project
 * @property {Board} board Board object associated with Project
 * @property {Schedule} schedule Schedule object associated with Project
 * @property {Timer} timer Timer object associated with Project
 */

module.exports = class Project {

    constructor(name){
        this.name = name
        this.tasks = []
        this.board = new Board()
        this.schedule = null
        this.timer = null
    }

    /**@name addTask
     * @method
     * @description Renames task name
     * @memberof Project
     * @param {String} name Name to be assigned to Task object
     * @param {String} [description] Description of task
     * @param {Date} [dueDate] Due date assigned to Task object
     * @param {String} [block] Block for task to be assigned to
     * @param {String} [state] State to be assigned to the task
     * @returns {Project} Returns the project this was called on (this)
     * 
     */

    addTask(name,description,dueDate,block,state){
        this.tasks.push(new Task(name,description,dueDate,block,state))
        return this
    }

    addBoard(){
        this.board = new Board()
        return this
    }

    addSchedule(){
        this.schedule = new Schedule()
        return this
    }

    /**@name getTask
     * @method
     * @description return a task contained within the Project.tasks array
     * @memberof Project
     * @param {String} name Name to be assigned to Task object
     * @returns {Task} Returns first task item matching the task name
     * 
     */

    getTask(name){
        let output = {}
        this.tasks.forEach((e,i) => {
            if(e.name === name){
                output = this.tasks[i]
            }
            return output
        })
        return output
    }

    /**@name getTasks
     * @method
     * @description returns the names of all tasks contained in the Project.tasks array
     * @memberof Project
     * @param {String} name Name to be assigned to Task object
     * @returns {Array} Returns first task item matching the task name
     * 
     */

    getTasks(props){
        if(props === undefined){
            return this.tasks.map((e,i) => e.name)
        }
        return this.tasks.map((e) => e.name)
        //add optional code to output particular props from the task object
    }

    getTaskStates(state,props){
        if(props === undefined){
        return this.tasks.filter((e) => e.state === state).map((element) => element.name)
        }
        return this.tasks.filter((e) => e.state === state).map((element) => element.name)
        //add optional code to output particular props from the task object
    }

    getTaskBlocks(block, props){
        if(props === undefined){
            return this.tasks.filter((e) => e.block === block).map((element) => element.name)
        }
            return this.tasks.filter((e) => e.block === block).map((element) => element.name)
        //add optional code to output particular props from the task object
    }

    getRunningTasks(props){
        if(props === undefined){
            return this.tasks.filter((e) => e.startBlock !== 0 && e.endBlock === 0).map((element) => element)
        }
        return this.tasks.filter((e) => e.startBlock !== 0 && e.endBlock === 0).map((element) => element)
        //add optional code to output particular props from the task object
    }

    removeTask(name){
        this.tasks.forEach((e,i) => {
            if(e.name === name){
                this.tasks.splice(i,1)
            }
        })
        return this
    }

    rename(newName){
        this.name = newName
        return this
    }

    save(){
        return this
    }

    export(){
        return JSON.stringify(this,null,3)
    }


}