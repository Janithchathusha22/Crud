//goCVdHPuc6JFoHjY

const express = require ("express");
const mongoose = require ("mongoose");
const router = require("./Routes/UserRoutes");
const app = express();
//Midlane

app.use(express.json());
app.use("/users",router);


mongoose.connect("mongodb+srv://admin:goCVdHPuc6JFoHjY@cluster0.fl0em.mongodb.net/")
.then(()=> console.log("Connected to MongoDB"))
.then(() =>{
    app.listen("5000");

})

.catch((err)=> console.log((err)));