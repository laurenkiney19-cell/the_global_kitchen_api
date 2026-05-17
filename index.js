import express from 'express';
import mongoose from 'mongoose';
import recipeRoutes from "./src/routes/recipe.routes.js";

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.json());

// TO: Connect to MongoDB URL local
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/globalKitchenDB').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error occurred while connecting to MongoDB', err);
});

app.use("/recipes", recipeRoutes);

// Start the server at PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));