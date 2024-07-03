var el_up=document.getElementById("GFG_up");
var el_down=document.getElementById("GFG_down");
var input=document.getElementById("numeric_id");
el_up.innerHTML="click on the button to validate alphanumeric or not";
function GFG_fun()
{
    var val = input.value;
    var regex=/^[a-z0-9]+$/i;
    var valid=regex.test(val);
    el_down.innerHTML=valid;
}