import {useState, useEffect} from 'react'
import validate from './RegisterValidations'


// Handles state for register component
function HandleState(){
	const [values, setValues] = useState({email: "", password: "" })
	const [errors, setErrors] = useState({})
	const [isSubmitting, setSubmitting] = useState(false);

  useEffect(() => {
		if(isSubmitting){
			const noErrors = Object.keys(errors).length === 0

      if (noErrors) {
        setSubmitting(false);
      } else {
        setSubmitting(false);
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
	}

	function handleBlur(){
		const validationErrors = validate(values)
		setErrors(validationErrors)
	}
	return {
		errors,
		handleBlur,
		handleChange,
		handleSubmit,
		isSubmitting,
		values
	}
}

export default HandleState