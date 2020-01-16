import {useState, useEffect} from 'react'
import validate from './authValidations'
// import { registerUser, loginUser } from './authAPI';
import { register, login } from '../../../actions/auth';


function initialState(auth){
	let registerState = {
		email: "",
		password: "",
		firstName: "",
		lastName: ""
	}

	let loginState = {
		email: "",
		password: "",
	}

	if(auth === 'register'){
		return registerState
	}
	else{
		return loginState
	}
}

function authenticateUser(auth, values){
	if(auth === 'register'){
		return register(values)
	}
	else{
		return login(values)
		// return testLogin(values)
	}
}

// Handles state for register component
function HandleState(auth){
	const [values, setValues] = useState(initialState(auth))
	const [errors, setErrors] = useState({})
	const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
		if(isSubmitting){
			const noErrors = Object.keys(errors).length === 0

      if (noErrors) {
        setSubmitting(false)
      } else {
        setSubmitting(false) // Possible code smell
      }
		} 
	// eslint-disable-next-line
  }, [errors]);
	
	function handleChange(event){
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}
	
	function handleSubmit(event){
		const validationErrors = validate(values)
		
		event.preventDefault()
		setErrors(validationErrors)
		setSubmitting(true)
		authenticateUser(auth, values)
		console.log('values', values)
	}

	return {
		errors,
		handleChange,
		handleSubmit,
		isSubmitting,
		values
	}
}

export default HandleState