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
	},
	bottomText:{
		paddingLeft: '14px'
	}
})

function Register(){
	const classes = useStyles()
    const {
			errors,
			handleChange,
			handleSubmit,
			isSubmitting,
			values
		} = HandleState('register')
			return (
				<Grid container	justify="center">
					<div>
						<div>
								<Typography variant="h2" align="center" gutterBottom>
										My Hub
								</Typography>
						</div>
						<Grid row>
							<form onSubmit={handleSubmit} className="form-wrapper">
								<FormControl>
									<InputLabel htmlFor="register-component-email-field">Email</InputLabel>
									<Input
										error={errors.email}
										id="register-component-email-field"
										name="email"
										autoComplete="off"
										className={errors.email}
										value={values.email}
										onChange={handleChange}
									/>
								{errors.email && <p className={classes.errors}>{errors.email}</p>}
								</FormControl>
								<FormControl>
									<InputLabel htmlFor="register-component-password-field">Password</InputLabel>
									<Input
										error={errors.password}
										id="register-component-password-field"
										name="password"
										className={errors.password}
										value={values.password}
										onChange={handleChange}
									/>
								</FormControl>
								{errors.password && <p className={classes.errors}>{errors.password}</p>}
								<FormControl>
									<InputLabel htmlFor="register-component-firstName-field">First Name</InputLabel>
										<Input
											error={errors.firstName}
											id="register-component-firstName-field"
											name="firstName"
											className={errors.firstName}
											value={values.firstName}
											onChange={handleChange}
										/>
								</FormControl>
								{errors.firstName && <p className={classes.errors}>{errors.firstName}</p>}
								<FormControl>
									<InputLabel htmlFor="register-component-lastName-field">Last Name</InputLabel>
										<Input
											error={errors.lastName}
											id="register-component-lastName-field"
											name="lastName"
											className={errors.lastName}
											value={values.lastName}
											onChange={handleChange}
										/>
								</FormControl>
								{errors.lastName && <p className={classes.errors}>{errors.lastName}</p>}
								
								<Button className={classes.button}
												variant="contained"
												color="primary"
												disabled={isSubmitting}
												type="submit"
								>
									Submit
								</Button>

								<Typography paragraph className={classes.email}>
									Oh, already have a MyHub account!
									<Link href="/login"> Log in</Link>
								</Typography>
							</form>
						</Grid>
				</div>
				</Grid>
			)
}

export default Register