function showAlert() {
   let w = document.forms["myForm1"]["fname"].value;
   let x = document.forms["myForm2"]["lName"].value;
	 let  y= document.forms["myForm3"]["phone"].value;
	 let z = document.forms["myForm4"]["mail"].value;
	// let z = document.forms["myForm"]["phone"].value;
  if (w == "" || x == "" || y==0 || z=="" ) {
    alert("Field cannot be empty, please fill");
    return false;
  }else{
	  var text = "First Name:\nLast Name:\nPhone Number:\nEmail ID: "
	  alert(text)
  }
}