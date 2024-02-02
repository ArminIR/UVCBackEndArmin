import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
const router = express.Router();

// create a proxy for each microservice
const recipeProxy = createProxyMiddleware({
  target: 'http://recipes:3010',
  changeOrigin: true,
});

router.use('/recipes', cors(), recipeProxy);

export default router;
