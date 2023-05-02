const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const allRecipes = require("./data.json");
const port = process.env.PORT || 5000;

app.get('/',  (req, res) => {
    res.send("Hello from Bengali Cuisine");
});

app.get("/allRecipes", (req, res) => {
    res.send(allRecipes);
})

app.listen(port, () => {
    console.log(`Bengali cuisine is running on port ${port}`)
})