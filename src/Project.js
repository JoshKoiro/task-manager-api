const Task = require('./Task.js')
const Board = require('./Board.js')
const Schedule = require('./Schedule.js')
const Timer = require('./Timer.js')

module.exports = class Project {

    constructor(name){
        this.name = name
        this.tasks = []
        this.board = new Board()
        this.schedule = null
        this.timer = null
    }

    addTask(name,endDate,block){
        this.tasks.push(new Task(name,endDate,block))
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