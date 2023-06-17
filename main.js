function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
    alert("Logging In");
    document.form1.text1.focus();
    return true;
}
else
{
    document.getElementById("alert").style.display = "block";
    document.getElementById("error").style.display = "block";

}
}
