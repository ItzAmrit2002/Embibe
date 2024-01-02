const { json } = require("body-parser");
const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const Answer = require("./models/Answer")
const Marks = require("./models/Marks")

var cors = require("cors");
app.use(cors({
    origin: '*'
}));
console.log(process.env.MONGO);
mongoose.connect(process.env.MONGO, () => {
	console.log("connected to MongoDB server");
});


// const answers = mongoose.model("Marks"); // Replace 'Answer' with the actual model name

// // Use the deleteMany method to delete all documents from the collection
// answers.deleteMany({}, (err) => {
// 	if (err) {
// 		console.error("Error deleting documents:", err);
// 	} else {
// 		console.log("All documents deleted successfully.");
// 	}
// });

const authRoute = require("./routes/auth");
const paperRoute = require("./routes/createpaper");
const studentRoute = require("./routes/student");
const tallyRoute = require("./routes/tally");

const port = process.env.PORT || 3500;
app.use(express.json());
app.use(express.urlencoded({ extended: "false" }));

app.use("/api/tally", tallyRoute);
app.use("/api/student", studentRoute);
app.use("/api/user", authRoute);
app.use("/api/paper", paperRoute);

app.listen(port, () => {
	console.log("server running on port: ", port);
});
