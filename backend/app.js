const express = require('express');
const app=express();
const dotenv=require('dotenv'); 
const cors=require('cors');
dotenv.config();
const connectToDb=require('./db/db');
const userRoutes=require('./routes/user.routes');
const CaptainRoutes = require('./routes/captain.routes');  
const cookie = require('cookie-parser'); 
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');

connectToDb();

// CORS configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL 
    : process.env.CORS_ORIGIN,
  credentials: true
};
app.use(cors(corsOptions));

app.use(cookie());  
app.get('/health',(req,res)=>{
    res.json({
        code:null,
        status:'SUCCESS'
    })
})
app.use(express.json());

app.use('/users',userRoutes)
app.use('/captains',CaptainRoutes);
app.use('/maps',mapsRoutes);
app.use('/rides', rideRoutes);

module.exports = app;