function getNumber(num){
    var result = document.getElementById("result")
    result.value += num;
}
function del(){
    var result = document.getElementById("result").value;
    document.getElementById("result").value = result.substr(0, result.length - 1);
}

function clearResult(){
    var result = document.getElementById("result")
    result.value = ""
}

function result(){
    var result = document.getElementById("result")
    result.value= eval(result.value)
}

function sqrt(){
    var result = document.getElementById("result");
    result.value= Math.sqrt(result.value)
    
}