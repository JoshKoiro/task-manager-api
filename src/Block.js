module.exports = class Block {

    constructor(name,startTime,endTime,weekdays){
        this.name = name
        this.startTime = startTime
        this.endTime = endTime
        this.weekdays = weekdays || []
    }

    addDay(day){
        this.weekdays.push(day)
        return this
    }

    removeDay(day){
        this.weekdays.forEach((e,i) => {
            if(e === day){
                this.weekdays.splice(i,1)
            }
        })
        return this
    }
}