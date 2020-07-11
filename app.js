const express = require("express");
const app = express();
const bp = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const socket = require("socket.io");
const {
    exec
} = require("child_process");

dotenv.config();

const route = require("./routes/route");

var server = app.listen("3000", ()=>{
    console.log("server started");
});

// -----------middle-wares-----------

app.use(morgan("dev"));
app.use(bp.urlencoded({
    extended: false
}));
app.use(bp.json());
app.use(cors());
app.use(express.static('public'));

// ------------routes[handle incoming req]-----------

let child,output;
let io = socket(server);
io.on('connection', (person)=>{
    console.log(`made socket connection ${person.id}`);
    person.on('form', function(data){
        let hash = data.hash;
        let type = data.type;

        child = exec(``, (err, stdout, stderr) => {
            if (err) {
                console.log(`Error: ${err.message}`);
            }
            if (stderr) {
                console.log(`Error: ${stderr}`);
            }
            console.log(stdout)
            person.emit('cmd', stdout);
        });

        let p = "data was sent back";
        socket.emit('form', p);
    });
});

// app.use("/route", route);
