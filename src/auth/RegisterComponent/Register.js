import React from 'react'
import './Register.css'
import HandleState from './RegisterState'

function Register(){
    const {
			errors,
			handleBlur,
			handleChange,
			handleSubmit,
			isSubmitting,
			values
		} = HandleState()
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
							<button disabled={isSubmitting} type="submit">Submit</button>               
						</form>
					</div>
			</div>
			)
}

export default Register