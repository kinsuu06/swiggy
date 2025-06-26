import { Router } from 'express';
import { getAllRestaurants,createRestaurant,updateRestaurant, deleteRestaurant } from '../controllers/restaurant.controller.js';

const router = Router();

router.get('/', getAllRestaurants);
router.post('/', createRestaurant);
router.patch('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

export default router;