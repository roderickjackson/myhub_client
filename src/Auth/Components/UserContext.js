import React, { createContext, useState, useReducer } from "react"

export const SET_AUTH_STATUS = 'SET_AUTH_STATUS'

export const UserContext = createContext(null)

const authReducer = (state = {}, action) => {
	if(action.type === 'SET_AUTH_STATUS'){
		return {
			...state,
			auth: action.payload
		}
	}
}

const reducers = (state, action) => ({
	auth: authReducer(state, action)
})

export const GlobalState = ({children}) => {
	// const [state, dispatch] = useReducer(reducers, {})
	return (
		<UserContext.Provider value = 'test best'>
			{children}
		</UserContext.Provider>
	)
}
