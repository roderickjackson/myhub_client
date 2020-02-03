import { callAPI } from './authAPIConfig'

// Register User
function registerUser(data){
	return callAPI({
	 endpoint:`/api/user/register `,
	 method:'post',
	 data:data
	})
}

// Login User
function loginUser(data){
 return callAPI({
	 endpoint:`/api/user/login `,
	 method:'post',
	 data:data
	})
}

export {registerUser, loginUser}