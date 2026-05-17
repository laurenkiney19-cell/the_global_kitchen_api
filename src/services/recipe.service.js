import Recipe from "../models/recipe.model.js";


// CREATE RECIPE SERVICE
export const createRecipeService = async (recipeData) => {

    // Business Logic Validation
    if (recipeData.cookingTime <= 0) {
        throw new Error("Cooking time must be a positive number");
    }

    const recipe = await Recipe.create(recipeData);

    return recipe;
};


// GET ALL RECIPES SERVICE
export const getAllRecipesService = async (category) => {

    let filter = {};

    // Filter by category if provided
    if (category) {
        filter.category = category;
    }

    const recipes = await Recipe.find(filter);

    return recipes;
};


// UPDATE RECIPE SERVICE
export const updateRecipeService = async (id, updateData) => {

    const updatedRecipe = await Recipe.findByIdAndUpdate(
        id,
        updateData,
        {
            new: true,
            runValidators: true
        }
    );

    return updatedRecipe;
};


// DELETE RECIPE SERVICE
export const deleteRecipeService = async (id) => {

    const deletedRecipe = await Recipe.findByIdAndDelete(id);

    return deletedRecipe;
};