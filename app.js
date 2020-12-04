const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql= require("mysql");


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "equipmax"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


const app = express();

var corsOptions = {
  origin: "http://localhost:4200"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/equipmax", (req, res) => {
  res.json({ message: "Welcome to  application." });
});
app.post("/equipmax", (req,res)=>{
  console.log(req.body);
  con.query('select * from checklist', function (err, result) {
    if (err) throw err; res.send(JSON.stringify(result))
  });

})
app.post("/equipmax", (req,res)=>{
  console.log(req.body);
  con.query('insert into checklist (checklistField,checklistDataTypeFK,isMandatory,isActive,) values(wind ,3, 1,1) ', function (err, result) {
    if (err) throw err; res.send(JSON.stringify(result))
  });

})


// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});