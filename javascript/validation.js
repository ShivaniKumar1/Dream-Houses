function validateAll()
{
	if(!validate())
		return false;

	if(!validateEmail())
		return false;
}


function validate() {
  // first name
  if((document.myForm.FName.value == "") || (document.myForm.FName.length < 1)) {
    alert("Please provide your first name!");
    document.myForm.FName.focus();
    return false;
  }

  // last name
  if((document.myForm.LName.value == "") || (document.myForm.LName.length < 1)) {
    alert("Please provide your last name!");
    document.myForm.LName.focus();
    return false;
  }

  // address
  if((document.myForm.Address.value == "") || (document.myForm.Address.length < 1)) {
    alert("Please provide your address!");
    document.myForm.Address.focus();
    return false;
  }

  // city
  if((document.myForm.City.value == "") || (document.myForm.City.length < 1)) {
    alert("Please provide your City!");
    document.myForm.City.focus();
    return false;
  }

  // state
  if(document.myForm.State.value == "-1") {
    alert("Please provide your State!");
    document.myForm.State.focus();
    return false;
  }

  // zip code: numeric and 5 digits long
  if((document.myForm.Zip.value == "")
  || isNaN(document.myForm.Zip.value)
  || (document.myForm.Zip.value.length != 5)) {
    alert("Please provide a zip in the form #####.");
    document.myForm.Zip.focus();
    return false;
  }

  // phone number: numeric and 10 digits long
  if((document.myForm.Phone.value == "")
  || isNaN(document.myForm.Phone.value)
  || (document.myForm.Phone.value.length != 10)) {
    alert("Please provide a phone number in the form ##########.");
    document.myForm.Phone.focus();
    return false;
  }

  // phone type
  if(document.myForm.pType.value == "-1") {
    alert("Please provide the type of Phone number!");
    document.myForm.pType.focus();
    return false;
  }

  // email: validation below
  if(document.myForm.EMail.value == "") {
    alert("Please provide your Email!");
    document.myForm.EMail.focus();
    return false;
  }

  return true;
}

// validating email to make sure it contains '@' and a '.'
function validateEmail() {
  var emailID = document.myForm.EMail.value;
  atpos = emailID.indexOf("@");
  dotpos = emailID.lastIndexOf(".");

  if(atpos < 1 || (dotpos - atpos < 2)) {
    alert("Please enter correct email ID");
    document.myForm.EMail.focus();
    return false;
  }
  return (true);
}
