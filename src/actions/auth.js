import { registerUser, loginUser } from "../components/Auth/authConfig/authAPI"
import { setAuthToken } from "../components/Auth/authConfig/authTokenConfig"
import { updateAPIConfig } from "../components/Auth/authConfig/authAPIConfig"

async function register(data){
	try {
		await registerUser(data)
	}
	catch (error){
		console.error(error)
	}
}

async function login(data){
	try {
		const token = await loginUser(data)
		console.log(token)
		setAuthToken(token)
		updateAPIConfig(token)
	}
	catch(error){
		console.error(error)
	}
}

export {register, login}