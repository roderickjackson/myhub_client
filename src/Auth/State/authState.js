import {useState, useEffect} from 'react'
import validate from '../utils/authValidations'
import { register, login } from '../actions/auth'
import { useHistory } from 'react-router-dom'


function initialState(auth){

	if(auth === 'register'){
		return {
			email: "",
			password: "",
			firstName: "",
			lastName: ""
		}
	}
	else {
		return {
			email: "",
			password: "",
		}
	}
}

function authenticateUser(auth, values, history){
	if(auth === 'register'){
		return register(values, history)
	}
	else{
		return login(values, history)
	}
}

// Handles state for register component
function HandleState(auth){
	const [values, setValues] = useState(initialState(auth))
	const [errors, setErrors] = useState({})
	const [isSubmitting, setSubmitting] = useState(false);
	const history = useHistory()

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
		authenticateUser(auth, values, history)

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