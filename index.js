import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));

//News API Documentation: https://newsapi.org/docs/endpoints/top-headlines

app.get("/", async (req, res) => {

    // get local san francisco news
    const result = await axios.get("https://newsapi.org/v2/top-headlines?country=ma&category=entertainment&apiKey=78f49a8fe37a46d4833780114b29a55b");
    console.log(result.data.articles);

    const featured_article = result.data.articles;

    const random_element = Math.floor(Math.random()*featured_article.length);

    // Need to add res.render for index.ejs file
    res.render("index.ejs", {featured: featured_article, random_element: random_element});
    
  });


  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
