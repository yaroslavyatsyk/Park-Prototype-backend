const express = require('express')
const mongoose = require('mongoose')
const bookingRouter = require('./routes/bookingRoutes')
const locationRouter = require('./routes/locationRoutes')

const app = express()
app.use(express.json())

app.use('/api',bookingRouter)
app.use('/api/emp',locationRouter)


mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://yaroslav9728:Education2022@cluster0.elr77qb.mongodb.net/ass1db?retryWrites=true&w=majority", {
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
