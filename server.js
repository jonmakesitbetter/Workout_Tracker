const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;


app.use(require("./controllers/controller"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout", //workout needs to be built in mongo atlas
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }
);

mongoose.connection.on("connected", () => {
    console.log("Mongoose successfully connected.");
});

app.get("api/config", (req, res) => {
    res.json({
        success: true
    });
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});