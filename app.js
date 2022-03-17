// imports

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static("uploads"));



// database connection
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
.then(() => console.log('connected to database'))
.catch((err) => console.log(err));

// routes
app.use("/api/post", require("./routes/routes"));

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(__dirname+'/dist/'));
    app.get('*', (req, res) => {
        res.sendFile(__dirname + "/dist/index.html");
    });
}

app.listen(port, () => console.log(`server started on port ${port}`));