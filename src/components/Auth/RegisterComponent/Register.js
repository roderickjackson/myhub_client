import React from 'react'
import { Link } from "react-router-dom"
import '../authConfig/auth.css'
import HandleState from '../authConfig/authState'

function Register(){
    const {
			errors,
			handleBlur,
			handleChange,
			handleSubmit,
			isSubmitting,
			values
		} = HandleState('register')
			return (
				<div>
					<div className="center header-text">
							<h1>My Hub</h1>
							<h2>Use this as your personal dashboard</h2>
					</div>
					<div className="center">
						<form onSubmit={handleSubmit} className="form-wrapper">
							<input 
								type="text"
								name="email"
								placeholder="Email"
								autoComplete="off"
								className={errors.email}
								value={values.email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.email && <p>{errors.email}</p>}
							<input 
								type="text"
								name="password"
								placeholder="Password"
								className={errors.password}
								value={values.password}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.password && <p>{errors.password}</p>}
							<input 
								type="text"
								name="firstName"
								placeholder="First Name"
								className={errors.firstName}
								value={values.firstName}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.firstName && <p>{errors.firstName}</p>}
							<input 
								type="text"
								name="lastName"
								placeholder="Last Name"
								className={errors.lastName}
								value={values.lastName}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.lastName && <p>{errors.lastName}</p>}
							<button disabled={isSubmitting} type="submit">Submit</button>               
							<p>
								Already have an account! <Link to="/login">Log in</Link>
							</p>
						</form>
					</div>
			</div>
			)
}

export default Register