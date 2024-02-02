import express from 'express';
import { getAllRecipes } from '../controllers/recipesController.js';
import cors from 'cors';
const router = express.Router();

// routes
router.get('/', (req, res, next) => {
  res.json('hi');
});

router.get('/recipes', cors(), getAllRecipes);

export default router;
