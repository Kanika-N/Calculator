let output=document.getElementById("result")

function display(num){
        output.value+=num;
}

function equate(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        alert("Invalid Input")
    }
}

function Clear(){
    output.value="";
}

function del(){
    output.value=output.value.slice(0,-1)
}