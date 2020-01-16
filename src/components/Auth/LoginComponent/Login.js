import React from 'react'
import '../authConfig/auth.css'
import HandleState from '../authConfig/authState'
import Button from '@material-ui/core/Button'
import FormControl from "@material-ui/core/FormControl"
import Grid from '@material-ui/core/Grid'
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import Link from '@material-ui/core/Link'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
	button: {
		marginTop: '20px'
	},
	email:{
		marginTop: '13px'
	},
	errors:{
		color: 'red'
	}
})


function Login(){
	const classes = useStyles()
    const {
			errors,
			handleChange,
			handleSubmit,
			isSubmitting,
			values
		} = HandleState('login')
		
			return (
				<Grid container	justify="center">
					<div>
						<div>
								<Typography variant="h2" align="center" gutterBottom>
									My Hub
								</Typography>
						</div>
						<div>
							<form onSubmit={handleSubmit} className="form-wrapper">
								<FormControl>
										<InputLabel htmlFor="Login-component-email-field">Email</InputLabel>
										<Input
											error={errors.email}
											id="Login-component-email-field"
											name="email"
											autoComplete="off"
											className={errors.email}
											value={values.email}
											onChange={handleChange}
										/>
									{errors.email && <p className={classes.errors}>{errors.email}</p>}
								</FormControl>
								<FormControl>
									<InputLabel htmlFor="Login-component-password-field">Password</InputLabel>
									<Input
										error={errors.password}
										id="Login-component-password-field"
										name="password"
										className={errors.password}
										value={values.password}
										onChange={handleChange}
									/>
								</FormControl>
								{errors.password && <p className={classes.errors}>{errors.password}</p>}

								<Button className={classes.button}
												variant="contained" 
												color="primary"
												disabled={isSubmitting}
												type="submit"
								>
									Login
								</Button>

								<Typography paragraph className={classes.email}>
									Don't have a MyHub account yet? 
									<Link href="/register"> Sign up</Link>
								</Typography>
							</form>
						</div>
				</div>
			</Grid>
			)
}

export default Login