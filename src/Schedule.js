const Block = require('./Block.js')

module.exports = class Schedule {

    constructor(){
        this.blocks = []
    }

    getBlock(name){
        let output = {}
        this.blocks.forEach((e,i) => {
            if(e.name === name){
                output = this.tasks[i]
            }
            return output
        })
        return output
    }

    getDayBlocks(dayName){
        let output = []
        this.blocks.forEach((e,i) => {
            if(e.weekdays.includes(dayName)){
                output.push(e)
            }
        })
        return output
    }

    addBlock(name,startTime,endTime,weekdays){
        this.blocks.push(new Block(name,startTime,endTime,weekdays))
        return this
    }

    removeBlock(name){
        this.blocks.forEach((e,i) => {
            if(e.name === name){
                this.blocks.splice(i,1)
            }
        })
        return this
    }
}