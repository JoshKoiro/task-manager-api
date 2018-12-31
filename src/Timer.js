module.exports = class Timer {

    constructor(duration,restDuration,longRestDuration,workCount){
        this.duration = duration || 50
        this.restDuration = restDuration || 5
        this.longRestDuration = longRestDuration || 15
        this.workCount = workCount || 3
        this.startTime = 0
        this.endTime = 0
    }

    start(){
        this.startTime = new Date()
        return this
    }

    end(){
        this.endTime = new Date()
        this.calculateDuration()
        this.startTime = 0
        this.endTime = 0
        return this
    }
}