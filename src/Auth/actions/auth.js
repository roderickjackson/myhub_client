import { setAuthToken } from "../utils/authTokenConfig"
import { updateAPIConfig, callAPI } from "../utils/authAPIConfig"
import { useContext } from "react"
import { UserContext, SET_AUTH_STATUS } from "../Components/UserContext"

function addValuesToPayload(payload, values){
	return {
		...payload,
		data: values
	}
}

// Note: Revisit this function to put in a try catch block
async function formTypeActions(payload, values, history){
	const updatedPayload = addValuesToPayload(payload, values)
	const apiResponse = await callAPI(updatedPayload)
	console.log('apiResponse', apiResponse)
	console.log('apiResponse Message', apiResponse.data.message)

	if(apiResponse.data.name === 'Error'){
		const errorMessage = apiResponse.data.message // return error message from server
		return errorMessage
	}
	if(payload.type === 'REGISTER'){
		console.log('state')
		// dispatch({type: SET_AUTH_STATUS})
		return history.push('/')
	}
	else if(payload.type === 'LOGIN'){
		const token = apiResponse
		setAuthToken(token)
		updateAPIConfig(token)
		return history.push('/')
	}
	// Need to add an ERROR PAGE to redirect to in case formType is neither listed here. 
}

export {formTypeActions}