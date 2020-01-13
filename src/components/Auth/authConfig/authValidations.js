export default function validate(values) {
  let errors = {};
  // Email Errors
  if (!values.email) {
    errors.email = "Required Email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
	}
	
  // Password Errors
  if (!values.password) {
    errors.password = "Required Password";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
	}
	
  // First Name Errors
  if (!values.firstName) {
    errors.firstName = "Required First Name";
  } else if (values.firstName.length < 2) {
    errors.firstName = "First Name must be at least 6 characters";
	}
	
  // Last Name Errors
  if (!values.lastName) {
    errors.lastName = "Required Last Name";
  } else if (values.lastName.length < 6) {
    errors.lastName = "Last Name must be at least 6 characters";
  }
  return errors;
}
