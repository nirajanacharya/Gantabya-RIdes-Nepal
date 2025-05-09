const express = require('express'); 
const router = express.Router();
const { body, query } = require('express-validator');  
const rideController = require('../controllers/ride.controller');  
const authMiddleware = require('../Middlewares/auth.middleware');

router.post('/create',
    authMiddleware.authUser, [
    body('pickup').isString().notEmpty().withMessage('Pickup location is required'),
    body('destination').isString().notEmpty().withMessage('Destination is required'),
    body('vehicleType').isString().notEmpty().withMessage('auto, car, motorcycle vehicle type is required'),
], rideController.createRide);

router.get('/get-fare',authMiddleware.authUser,[
    query('pickup').isString().withMessage('Pickup location is required'),
    query('destination').isString().withMessage('Destination is required'), 
], rideController.getFare);

router.post('/confirm',authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Ride ID is required'),rideController.confirmRide);


router.get('/start-ride',authMiddleware.authCaptain,[query('rideId').isMongoId().withMessage('Ride ID is required'),
],rideController.startRide);

router.post('/end-ride',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    rideController.endRide
)


module.exports = router;