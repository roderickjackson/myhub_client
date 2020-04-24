import {useState, useEffect} from 'react'
import validate from '../Auth/utils/authValidations'
import {formTypeActions } from '../Auth/actions/auth'
import { useHistory } from 'react-router-dom'

// Handles state for register component
function useHandleFormState(payload, initialStateForValues){
	const [values, setValues] = useState(initialStateForValues)
	const [errors, setErrors] = useState({})	
	const [isSubmitting, setSubmitting] = useState(false);
	const noErrors = Object.keys(errors).length === 0
	const history = useHistory()

  useEffect(() => {
		if(isSubmitting){ 

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
	
	async function handleSubmit(event){
		
		event.preventDefault()
		setSubmitting(true)

		const apiResponse = await formTypeActions(payload, values, history)
		const validationErrors = validate(values, apiResponse)
		setErrors(validationErrors)

		console.log('values', {errors, validationErrors})//await formTypeActions(payload, values, history))
	}

	return {
		errors,
		handleChange,
		handleSubmit,
		isSubmitting,
		values
	}
}

export default useHandleFormState