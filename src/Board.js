/**@name Board
 * @class
 * @description Class to hold task states and automated logic to automatically change task states
 * @property {Array} states Array of states able to be assigned to tasks within the project
 * @property {String} workingState State to change task to when the task's timer has been started
 * @property {String} stoppingState State to change task to when the task's timer has been stopped
 */

module.exports = class Board {

    constructor(){
        this.states = [
            'backlog',
            'in progress',
            'scheduled',
            'waiting',
            'complete'
        ]
        this.workingState = 'in progress'
        this.stoppingState = 'waiting'
    }

    addState(state){
        this.states.push(state)
        return this
    }

    removeState(state){
        this.states.forEach((e,i) => {
            if(e === state){
                this.states.splice(i,1)
            }
        })
        return this
    }
}