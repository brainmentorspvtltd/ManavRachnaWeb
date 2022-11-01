window.addEventListener("load", initEvent);

function initEvent() {
    // Event Binding
    document.querySelector("#btn").addEventListener("click", greet);
    // callback
    box = document.querySelector("#box");
    box.addEventListener("blur", validate);
}

function greet() {
    // alert("You have clicked on a button...");
    // console.log("You have clicked...");
    // var box = document.getElementById("box");
    // console.log(box.value);
    var username = box.value;
    document.querySelector("#output").innerHTML = username;
}

function validate() {
    // this-refers to current object
    // console.log(this);
    var username = this.value;
    // Truthy and Falsy
    // checks - 0, "", null, NaN, undefined
    console.log(username);
    if(username == "") {
        document.querySelector(".err-msg").innerHTML = "Please Enter your name...";
        this.style.border = "1px solid red";
    }
    else {
        document.querySelector(".err-msg").innerHTML = "";
        this.style.border = "1px solid green";
    }
}