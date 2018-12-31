/**@name Block
 * @class
 * @description Class to hold task states and automated logic to automatically change task states
 * @param {String} name name of Block object
 * @param {Time} startTime Time object defining the start time of the block for each day in the weekdays array 
 * @param {Time} endTime Time object defining the end time of the block for each day in the weekdays array
 * @param {Array} weekdays Array of strings defining which days the block is to show up in the block schedule
 */

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