function setError(id,error) {
// sets error inside tag of id
    element=getElementById(id);
    element.getElementsByClassName('FormError')[0].innerHTML=error;
}

function ValidateForm(){
    var returnval=true;
    var name=document.forms['ValidForm']['Name'].value;
    if(name.length<5){
        setError("Name", " Length of name too short");
    }
    console.log(name);



    return returnval;
}