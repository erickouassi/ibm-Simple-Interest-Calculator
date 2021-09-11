// Do the math and calculation
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var amount = principal * years * rate /100;
    
    p = document.getElementById("principal").value;
    
    document.getElementById("result").innerHTML="If you deposit <mark>$"+principal+" </mark>,\
    <br\>at an interest rate of <mark> "+rate+"%\</mark>.<br\>You will receive an amount of <mark>$"+amount+" </mark>,\
    <br\>in the year <mark>"+year+"\</mark>.<br\>"
    
}

// Update the slider 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// Validate the iput amount to only accept positive number
function validAmount() 
{
    var principal = document.getElementById("principal").value;
    if (principal < 0) 
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
}      