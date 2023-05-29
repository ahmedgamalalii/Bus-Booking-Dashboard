
const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static("upload"));
const cors = require("cors");
app.use(cors()); 


const auth = require("./routes/Auth");
const busroutes = require("./routes/busroutes");
const users = require("./routes/users");
const requests = require("./routes/requests");
const appointments = require("./routes/appointments");

app.listen(4000, "localhost", () => {
  console.log("SERVER IS RUNNING ");
});


app.use("/auth", auth);
app.use("/busroutes", busroutes);
app.use("/users", users);
app.use("/requests", requests);
app.use("/appointments", appointments);