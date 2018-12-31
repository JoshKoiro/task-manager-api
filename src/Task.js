/**@name Task
 * @class
 * @description Class to hold tasks, board and schedule data
 * @param {String} name name of project
 * @param {String} description Description of task
 * @property {Date} startDate Date task was created
 * @param {Date} dueDate Date task is due
 * @property {Date} adjustedDueDate True due date based on revisions
 * @param {String} block Assigned block time from Schedule configuration on the project
 * @param {String} state State of the task chosen from the list of states in the Board configuration on the project
 * @property {Number} duration Length of time spent on task based on start() and end() methods
 * @property {Date} startTime Property populated by the start() method to track when timer starts on task
 * @property {Date} endTime Property populated by the end() method to track when timer stops on task
 * @property {Array} history Array of changes made to Task
 */

module.exports = class Task {

    constructor(name,description,dueDate,block,state){
        this.name = name
        this.description = description || ""
        this.startDate = new Date()
        this.dueDate = dueDate || null
        this.adjustedDueDate = dueDate
        this.block = block || ""
        this.state = state || "backlog"
        this.duration = 0
        this.startTime = 0
        this.endTime = 0
        this.history = []
        this.updateHistory("task created",null)
    }

    /**@name rename
     * @method
     * @description Renames task name
     * @memberof Task
     * @param {String} newName New name to be assigned to Task object
     * @returns {Task} Returns the task this was called on (this)
     * 
     */

    rename(newName){
        this.name = newName
        this.updateHistory("name",this.name)
        return this
    }

    /**@name setDueDate
     * @method
     * @description Set a new due date for the task
     * @memberof Task
     * @param {Date} date New date to be assigned to adjustedDueDate property
     * @returns {Task} Returns the task this was called on (this)
     * 
     */

    setDueDate(date){
        this.adjustedDueDate = date
        this.updateHistory("adjustedDueDate",this.adjustedDueDate)
        return this
    }

    /**@name setBlock
     * @method
     * @description Set task to be assigned to new block in block schedule
     * @memberof Task
     * @param {String} block New block for the task to be assigned to
     * @returns {Task} Returns the task this was called on (this)
     * 
     */

    setBlock(block){
        this.block = block
        this.updateHistory("block",this.block)
        return this
    }

    /**@name setState
     * @method
     * @description Set the task to a new board state
     * @memberof Task
     * @param {String} state New state for the task to be assigned to
     * @returns {Task} Returns the task this was called on (this)
     * 
     */

    setState(state){
        this.state = state
        this.updateHistory("state",this.state)
        return this
    }

    /**@name start
     * @method
     * @description start time tracker on Task object
     * @memberof Task
     * @returns {Task} Returns the task this was called on (this)
     * 
     */

    start(){
        this.startTime = new Date()
        this.updateHistory("startTime",null)
        return this
    }

    /**@name end
     * @method
     * @description end time tracker on Task object
     * @memberof Task
     * @returns {Task} Returns the task it was called on (this)
     * 
     */

    end(){
        this.endTime = new Date()
        this.updateHistory("endTime",null)
        this.calculateDuration()
        this.startTime = 0
        this.endTime = 0
        return this
    }

    calculateDuration(){
        let elapsedTime = (this.endTime.getTime() - this.startTime.getTime())/1000
        this.duration = elapsedTime + this.duration
        return this
    }

    updateHistory(property, newValue){
        this.history.push({
            property: property,
            newValue: newValue,
            timeStamp: new Date()
        })
    }

}