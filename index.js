var cb1 = document.querySelector("#cb1");
var cb2 = document.querySelector("#cb2");

function file() {
    if (this.checked) {
        document.querySelector("#file").classList.remove("invisible");
        document.querySelector("#hash").classList.add("invisible");
    } else {
        document.querySelector("#file").classList.add("invisible");
        document.querySelector("#hash").classList.add("invisible");
    }
}

function hash() {
    if (this.checked) {
        document.querySelector("#hash").classList.remove("invisible");
        document.querySelector("#file").classList.add("invisible");
    } else {
        document.querySelector("#file").classList.add("invisible");
        document.querySelector("#hash").classList.add("invisible");
    }
}

cb1.addEventListener(change, file);
cb2.addEventListener(click, hash);
