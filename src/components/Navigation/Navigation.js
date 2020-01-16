import React from 'react'
import { Link } from "react-router-dom"

function navigation(){
	return (
			<nav>
				<ul>
					<li>
						<Link to="/">Home</Link>
						<Link to="/login">Login</Link>
						<Link to="/register">Register</Link>
						<Link to="/landing">Landing</Link>
					</li>
				</ul>
			</nav>
	)
}

export default navigation