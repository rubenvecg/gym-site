document.addEventListener("newMembershipForm", function(e){
	e.preventDefault();
});

function validateForm(){
	
	var name = document.newMembershipForm.customer_name.value;
	var phone = document.newMembershipForm.phone_number.value;
	var email = document.newMembershipForm.email_address.value;
	var membership = document.newMembershipForm.membership.value;
	
	var nameErr = document.getElementById("name-err");
	var numErr = document.getElementById("num-err");
	var emailErr = document.getElementById("email-err");
	var membErr = document.getElementById("memb-err");
	
	var noErr = true;
		
	if(!checkName(name)){
		noErr = false;
		nameErr.innerHTML = "Please enter a valid name.";
	
	}else{
		nameErr.innerHTML = "";
	} 
	
	if(!checkNum(phone)){
		noErr = false;
		numErr.innerHTML = "Please enter a valid phone number.";
	
	}else{
		numErr.innerHTML = "";
	} 
	
	if(!checkEmail(email)){
		noErr = false;
		emailErr.innerHTML = "Please enter a valid email.";	
	}else{
		emailErr.innerHTML = "";
	} 
	
	if(membership == ""){
		noErr = false;
		membErr.innerHTML = "Please select a membership.";
	}else{
		membErr.innerHTML = "";
	}
	
	
	
	if(noErr){
		alert("Thank you for your submission. We hope to see you soon!");
		return true;
	}else{
		alert("Please check your input for mistakes and try again.");
		return false;
	}
	
	
}

function checkName(value){
	var regex = /^[a-zA-Z\s]+$/;
	return regex.test(value);
}

function checkEmail(value){
	var regex = /^\S+@\S+\.\S+$/;
	return regex.test(value);
}

function checkNum(value){
	var regex = /^[1-9]\d{9}$/;
	return regex.test(value);
}

function printWarning(){
	document.getElementById("warning").innerHTML = "<p>You must advise your trainer of any medial conditions that can affect your workout.</p>";
}

function clearWarning(){
	document.getElementById("warning").innerHTML = "";
}


