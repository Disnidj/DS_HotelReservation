////to create the server we want to run our application 
const express = require('express');
//to communicate with the database
const mongoose = require('mongoose');
//converts the json request to a js object(as the json format cannot be understood by the server)
const bodyParser = require("body-parser");
//CORS node.js package provides a connect/ middleware that can be used to enable CORS with various options 
const cors = require('cors');

//invoke the server (server- express application)
const app = express();


//import routes
//anodya
const HotelBookingRoutes = require ('./routes/anodyaposts');
const HotelregisterRoutes = require ('./routes/hotelposts');
const user = require ('./routes/userRoutes');

//disni
const taxiRoutes = require('./routes/taxis');
//Ramona
const travelorRoutes = require('./routes/travelor');

//debbie
const postRoutes = require('./routes/payment');

//middleware of the app 
app.use(bodyParser.json());
//uses CORS as a middleware
app.use(cors());

//middlewares of the route
//anodya
app.use(HotelBookingRoutes);
app.use(HotelregisterRoutes);
app.use(user);
//disni
app.use(taxiRoutes);
//Ramona
app.use(travelorRoutes);
//debbie
app.use(postRoutes);


//declaring the PORT
const PORT = 8000;
//variable for the URL
const DB_URL = 'mongodb+srv://Anodya:Anodya123@hotel.9hzx5.mongodb.net/Hotel?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//if the promise is success
.then(()=>{
    console.log('DB connected');
})
.catch((err)=> console.log('DB Connection Error',err));

//listening the running PORT
app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);
})