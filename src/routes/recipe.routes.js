import express from "express";

import {
    createRecipe,
    getAllRecipes
} from "../controllers/recipe.controller.js";

const router = express.Router();

router.post("/", createRecipe);

router.get("/", getAllRecipes);

export default router;