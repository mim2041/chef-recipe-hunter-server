const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const allRecipes = require("./data.json");
const port = process.env.PORT || 5000;
const categories = require("./food.json");

app.get('/',  (req, res) => {
    res.send("Hello from Bengali Cuisine");
});



app.get("/recipes", (req, res) => {
    res.send(allRecipes);
})

app.get('/recipes/:id', (req, res) => {
    // const id = req.params.id;
    // console.log(id);
    // const course = allCourses.find((course) => course.id === id);
    // res.send(course);
    const id = req.params.id;
    const selectedRecipe = allRecipes.find(n => n.id === id);
    res.send(selectedRecipe);
})
app.get('/categories', (req, res) => {
    res.send(categories);
})
app.get('/categories/:category', (req, res) => {
    const category = req.params.category;
    
    const categoryItems = categories.filter(food => food.category === category);
    res.send(categoryItems);
})

app.listen(port, () => {
    console.log(`Bengali cuisine is running on port ${port}`)
})