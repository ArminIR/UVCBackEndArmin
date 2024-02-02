import data from './recipes.json' assert { type: 'json' };

export async function getAllRecipes(req, res) {
  try {
    //set header before response
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
}
