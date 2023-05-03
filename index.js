const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const allRecipes = require("./data.json");
const port = process.env.PORT || 5000;

app.get('/',  (req, res) => {
    res.send("Hello from Bengali Cuisine");
});

app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    const selectedRecipe = allRecipes.find(n => n.id === id);
    res.send(selectedRecipe);
})

app.get("/recipes", (req, res) => {
    res.send(allRecipes);
})

app.listen(port, () => {
    console.log(`Bengali cuisine is running on port ${port}`)
})