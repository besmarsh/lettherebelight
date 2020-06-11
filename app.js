const PythonShell = require("python-shell");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const PORT = 80;
const PASS = 'test';

//Server Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

function getCurtainState() {
  var state = JSON.parse(fs.readFileSync("./state.json"));
  return state.state;
}

//Run Python script to open curtains and write new status
function openCurtains() {
  if (getCurtainState() == "CLOSED") {
    PythonShell.run("./curtains_open.py", function(err) {
      if (err) throw err;
      else {
        fs.writeFile("./state.json", JSON.stringify({"state":"OPEN"}), function(err) {
          if (err) throw err;
        })
      }
    })
  }
}

//Run Python script to open curtains and write new status
function closeCurtains() {
  if (getCurtainState() == "OPEN") {
    PythonShell.run("./curtains_close.py", function(err) {
      if (err) throw err;
      else {
        fs.writeFile("./state.json", JSON.stringify({"state":"CLOSED"}), function(err) {
	        if (err) throw err;
	      })
      }
    })
  }
}

//Handle the get request from the Google Home
app.get("/api/:command", function(req, res) {
  // For now, uses a simple password query in the url string.
  // Example: GET to localhost:80/api/open?password=test
  if (req.query.password === PASS) {
    if (req.params.command == "open") {
      openCurtains();
    } else if (req.params.command == "close") {
      closeCurtains();
    }
  } else {
    res.send("Invalid Password");
  }
})

//Handle the post request from the Google Home
app.post("/api/:command", function(req, res) {
  // For now, uses a simple password query in the url string.
  // Example: POST to localhost:80/api/open?password=test
  if (req.body.password === PASS) {
    if (req.params.command == "open") {
      openCurtains();
    } else if (req.params.command == "close") {
      closeCurtains();
    }
  } else {
    res.send("Invalid Password");
  }
})

//Start the server on chosen port
app.listen(PORT, function() {
  console.log("Listening on port " + PORT);
});
