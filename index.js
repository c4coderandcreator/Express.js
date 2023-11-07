import express from 'express';
const app = express();
const port = 4000;

app.get("/", (req, res) => {res.send("<h1> Hello </h1>")});
app.get("/about",(req,res) => {res.send("<h1>ABout Me</h1>")});
app.get("/contact",(req,res) => {res.send("<h1>Contact Me Here --> </h1>")});

app.listen(port, () => {
    console.log('Server is running on port 4000');
});