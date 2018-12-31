const Project = require('./Project.js')

let app = new Project("app")

app.addBoard()
app.addSchedule()

app.addTask("test task")

let week = ["Monday","Tuesday","Wednesday","Thursday","Friday"]

app.schedule.addBlock("block1","8:00am","9:00am",week)
app.schedule.addBlock("block2","9:15am","10:15am",week)
app.schedule.addBlock("block3","10:30am","11:30am",week)
app.schedule.addBlock("block3+","11:45pm","12:45pm",week)
app.schedule.addBlock("block4","1:00pm","2:00pm",week)
app.schedule.addBlock("block5","2:15pm","3:15pm",week)
app.schedule.addBlock("block6","3:30pm","4:30pm",week)