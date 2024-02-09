// backend/controllers/recipesController.js
import { supabase } from '../adapter/supabaseAdapter.js';

export async function getAllRecipes(req, res, next) {
  try {
    const { data, error } = await supabase.from('recipes').select('*');
    if (error) {
      console.error('Error fetching recipes:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
}

// Import supabase client and other necessary modules
