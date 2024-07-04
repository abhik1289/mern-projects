const express = require("express");
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = process.env.PORT; //import Server PORT no
require("./connection/db");  //import database


//routers

app.use("/api/auth",require("./routes/auth"));

app.listen(PORT, () => {
    console.log(`Server run successfully ${PORT}`)
})

