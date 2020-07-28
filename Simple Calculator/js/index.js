function print(obj) {
    var y = obj.innerHTML;

    if (y === "C") {
        document.getElementById("outtd").innerHTML = "0";

    }
    else if(y === "D"){
        document.getElementById("outtd").innerHTML = document.getElementById("outtd").innerHTML.slice(0,-1);
    }
     else if (y === "=") {
        document.getElementById("outtd").innerHTML = eval(document.getElementById("outtd").innerHTML);

    } else {
        if (document.getElementById("outtd").innerHTML === "0") {

            document.getElementById("outtd").innerHTML = y;
        } else {

            document.getElementById("outtd").innerHTML += y;
        }
    }

}
