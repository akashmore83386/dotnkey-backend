import express from 'express';
import { createState, getStates } from '../controllers/state.js';

const router = express.Router();

router.post('/createState', createState)
router.get('/states/:countryId', getStates)

export default router