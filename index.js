const express = require('express');
const app = express();
const port = 1200
const fs = require('fs')

const productRooute = require('./routes/productRoute')

const homepage = fs.readFileSync("./pages/index.html", "utf-8")
// const aboutpage = fs.readFileSync("./pages/about.html", "utf-8")
// const contactpage = fs.readFileSync("./pages/contact.html", "utf-8")
// const testimonailpage = fs.readFileSync("./pages/testimonail.html", "utf-8")


app.get('/', (req,res) => {
    res.send(homepage)
}) 
// app.get("/about", (req,res) => {
    // res.send(aboutpage)
// })
// 
// app.get('/contact', (req,res) => {
    // res.send(contactpage)
// })
// app.get("/testimonail", (req,res) => {
    // res.send(testimonailpage)
// })


// using product route
app.use(productRooute)
// server will now handle json data
app.use(express.json())

app.listen(port, () => {
    console.log(`server started successfully. click http://localhost:${port} to open webite`)
})