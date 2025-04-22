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
const allowedOrigins = [
  'http://localhost:5173',
  'https://gantabya-rides-nepal.vercel.app',
  'https://gantabya-rides-nepal.onrender.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
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