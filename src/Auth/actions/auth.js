import { registerUser, loginUser } from "../utils/authAPI"
import { setAuthToken } from "../utils/authTokenConfig"
import { updateAPIConfig } from "../utils/authAPIConfig"

async function register(data, history){
		let user = await registerUser(data)
		
		if(user.data.name === 'Error'){
			// This is returning the error message from server
			return user.data.message 
		}
		
		return history.push('/')
	}
	
	async function login(data, history){
		const token = await loginUser(data)
		let serverError = token.data // possible code smell

		if(serverError.name === 'Error'){
					return serverError.message
		}

		setAuthToken(token)
		updateAPIConfig(token)
		return history.push('/')
}

export {register, login}