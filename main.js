// Create a registration system
var objPeople = [
	{
		username: 'sam',
		password: 'password25'
		
		
	},
	{
		username: 'matt',
		password: 'password88'
		
	},
	{
		username: 'chris',
		password: 'password3'
		
	}
]



// register functionality
function registerUser() {
	// store new users username
	var registerUsername = document.getElementById('newUsername').value;
	// store new users password
	var registerPassword = document.getElementById('newPassword').value
	

	var messanger = document.getElementById('msg');
	// store new user data in an object
	var newUser = {
		username: registerUsername,
		password: registerPassword
		
	}
	// loop throught people array to see if the username is taken, or password to short
	for(var i = 0; i < objPeople.length; i++) {
		// check if new username is equal to any already created usernames
		if(registerUser == objPeople[i].username) {
			// alert user that the username is taken
			alert('That username is already in user, please choose another')
			// stop the statement if result is found true
			break
		// check if new password is 8 characters or more
		} else if (registerPassword.length < 5) {
			// alert user that the password is to short
			alert('That is to short, include 5 or more characters')
			// stop the statement if result is found true
			break
		} else if (registerUsername =="")
		alert ('Hey!, Please insert a Username')
	}

	// push new object to the people array
	objPeople.push(newUser)
	
	//Message to show that you've registed
	messanger.innerHTML = 'SUCCESSFULLY REGISTERED, Now LOG IN';
	alert('Youre now Registered, Kindly Log in')
	

	//CLEARS INPUT
	document.getElementById('newUsername').value = '';
	document.getElementById('newPassword').value = '';
	

	
	// console the updated people array
	console.log(objPeople)
}



//login functionality
function login() {
	
// retreive data from username and store in username variable
const username = document.getElementById('username').value;
// retreive data from password and store in password variable
const password = document.getElementById('password').value;	
//retreive data from password and store in email variable

var formdata = {
	username: username,
	password: password

}
    //console.log(JSON.stringify(formdata))

	if(objPeople.some( person => person.username === formdata.username)){
		alert ('Hea, You are now logged in')
		console.log('Its the same');
	} else {

		alert('Try Signin up with the right paramters, Thanks!')
		console.log('Its not the same');
	}
	
	//CLEARS INPUT
	document.getElementById('username').value = '';
	document.getElementById('password').value = '';
		

					

	
}
