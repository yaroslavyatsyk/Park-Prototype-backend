const express = require('express')
const mongoose = require('mongoose')
const bookingRouter = require('./routes/bookingRoutes')
const locationRouter = require('./routes/locationRoutes')
const facilityRouter = require('./routes/facilityRoutes')
const eventRouter = require('./routes/eventRoutes')

const app = express()
app.use(express.json())

app.use('/',bookingRouter)
app.use('/',locationRouter)
app.use('/',facilityRouter)
app.use('/',eventRouter)

mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://capstone:Capstone2023@cluster0.vaju5po.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the Park & Recreation App</h1>");
});


app.listen(3035, () => {
    console.log(`Server is listening on port http://localhost:${3035}`);
});
