import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Recipe route working"
    });
});

export default router;