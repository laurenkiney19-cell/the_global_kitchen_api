import {
  createRecipeService,
  getAllRecipesService
} from "../services/recipe.service.js";

export const createRecipe = async (req, res) => {

  try {

      const recipe = await createRecipeService(req.body);

      res.status(201).json({
          success: true,
          data: recipe
      });

  } catch (error) {

      res.status(500).json({
          success: false,
          message: error.message
      });
  }
};

export const getAllRecipes = async (req, res) => {

  try {

      const category = req.query.category;

      const recipes = await getAllRecipesService(category);

      res.status(200).json({
          success: true,
          data: recipes
      });

  } catch (error) {

      res.status(500).json({
          success: false,
          message: error.message
      });
  }
};