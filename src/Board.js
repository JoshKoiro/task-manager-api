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