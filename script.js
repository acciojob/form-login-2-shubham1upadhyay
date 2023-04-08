function showData() {
	let  myArr = [];
    myArr[0] = "First Name: " + document.getElementById('fname').value;
	myArr[1] = "Last Name: " +document.getElementById('lname').value;
	myArr[2] = "Phone Number: " + document.getElementById('number').value;
	myArr[3] = "Email ID: " + document.getElementById('email').value;
     var text = myArr[0] + "\n" + myArr[1]
				+ "\n" + myArr[2]
				+ "\n" + myArr[3]
	alert(text)

}