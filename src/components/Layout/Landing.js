import React from 'react'
import {
	Root,
	Content,
	Sidebar,
	fixedLayoutPreset,
} from "@mui-treasury/layout"
import { Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'

function Landing(){
	// const sidebarStyles = useSidebarStyles()
	return (
		<Root config={fixedLayoutPreset}>
				<CssBaseline/>
				<Sidebar>
					<div>
						<p>Sup!!</p>
					</div>
				</Sidebar>
		</Root>
	)
}

export default Landing