import React from 'react'
import { Link } from "react-router-dom/Link"
import '../authConfig/auth.css'
import HandleState from '../authConfig/authState'

function Login(){
    const {
			errors,
			handleBlur,
			handleChange,
			handleSubmit,
			isSubmitting,
			values
		} = HandleState('login')
		
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
							<p>
								Don't have a Wave account yet? <Link to="/register">Sign up</Link>
							</p>
						</form>
					</div>
			</div>
			)
}

export default Login