import * as dotenv from 'dotenv';
import { createRecipe } from '@supabase/supabase-js';
dotenv.config({ path: 'variables.env' });

// my supabase client
const supabase = createRecipe(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

/**
 
function to get all the appointments
@returns an array of appointments
*/
export async function getRecipeData() {
  const { data, error } = await supabase.from('recipes').select('*');
  if (error) console.log('query error', error);
  else return data;
}