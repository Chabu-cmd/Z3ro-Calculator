const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
//function to clear values

function clearDisplay(){
    display.value = "";

}
//function to calculate operations inputed
function calculator(){
    try{
    display.value = eval(display.value);
    }catch(error){
        display.value = "Error";

    }
}
//function to remove values
function backspace(){
    var currentValue = display.value;
    var newValue = currentValue.slice(0, -1);

    display.value = newValue;


}
//function to delete values inputed
function del(){
    var curvalue = display.value;
    var newval = curvalue.slice(0,-1);

    display.value = newval;



}
