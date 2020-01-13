// Store Token in local storage on client
function setAuthToken(token){
		localStorage.setItem('token', token);
}

// Get Token from local storage on client
function getAuthToken(){
	return localStorage.getItem('myData');
}

// Remove Token from local storage on client
function removeAuthToken(){
	return localStorage.removeItem('myData');
}

export  {
	setAuthToken,
	getAuthToken,
	removeAuthToken
}