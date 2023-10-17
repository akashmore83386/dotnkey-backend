import express from 'express';
import { createLanguage, getAllLanguages } from '../controllers/language.js';

const router = express.Router();

router.post('/createLanguage', createLanguage);
router.get('/languages', getAllLanguages)

export default router