const express = require("express")
const app = express()

app.get("/",(req,res) => {
	res.end("Index page");
})

app.get("/about",(req,res) => {
	res.end("About page");
})

app.listen(4000, () => console.log("listening on port 4000"));