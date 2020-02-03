import axios from 'axios'

const BASE_URL = 'http://localhost:3002'

let config = {authToken: ''}

function getAPIConfig(){
	return {...config}
}

function updateAPIConfig(newConfig){
	let configs = {
		...config,
		...newConfig
	}
	return configs
}

async function callAPI(payload){
	const {endpoint, method, data} = payload
	try {
		let response = await axios({
			method: method,
			headers: {
				Authorization: `Bearer ${getAPIConfig().authToken}`
			},
			url: `${BASE_URL}${endpoint}`,
			data: data
		})
		
		console.log('response', response)
		
		return response
	}
	catch(error){
		console.log("client-side error", error.response)
		return error.response

	}
}



export {callAPI, updateAPIConfig}