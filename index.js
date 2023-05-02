const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

app.get('/',  (req, res) => {
    res.send("Hello Bengali Cuisine");
});

app.listen(port, () => {
    console.log(`Bengali cuisine is running on port ${port}`)
})