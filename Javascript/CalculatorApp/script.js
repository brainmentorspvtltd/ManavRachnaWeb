window.addEventListener("load", initEvents);

function initEvents() {
    var btns = document.querySelectorAll(".btn");
    for(var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", calc);
    }
}

function calc() {
    // console.log(this);
    var opr = this.innerHTML;
    var fnum = document.querySelector("#box_1");
    var snum = document.querySelector("#box_2");
    var resultBox = document.querySelector("#box_3");
    var result = 0;
    if(opr == "+") {
        result = parseInt(fnum.value) + parseInt(snum.value);
        resultBox.value = result;
    }
    else if(opr == "-") {
        result = parseInt(fnum.value) - parseInt(snum.value);
        resultBox.value = result;
    }
}