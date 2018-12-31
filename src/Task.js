module.exports = class Task {

    constructor(name,description,dueDate,block,state){
        this.name = name
        this.description = description
        this.startDate = new Date()
        this.dueDate = dueDate
        this.adjusteddueDate = dueDate
        this.state = state || "backlog"
        this.block = block
        this.duration = 0
        this.startTime = 0
        this.endTime = 0
        this.history = []
        this.updateHistory("task created",null)
    }

    rename(newName){
        this.name = newName
        this.updateHistory("name",this.name)
        return this
    }

    setDueDate(date){
        this.adjusteddueDate = date
        this.updateHistory("adjusteddueDate",this.adjusteddueDate)
        return this
    }

    setBlock(block){
        this.block = block
        this.updateHistory("block",this.block)
        return this
    }

    setState(state){
        this.state = state
        this.updateHistory("state",this.state)
        return this
    }

    start(){
        this.startTime = new Date()
        this.updateHistory("startTime",null)
        return this
    }

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