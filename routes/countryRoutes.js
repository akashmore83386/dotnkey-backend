import express from 'express';
import { createCountry, getAllCountries } from '../controllers/country.js';

const router = express.Router();

router.post('/createCountry', createCountry);
router.get('/countries', getAllCountries)

export default router