import React from "react";
import './NavBar.css';

/* React Router Dom Components */
import { NavLink } from "react-router-dom"

/** Element React Components */
import { Menu as Nav } from 'element-react'

class NavBar extends React.Component {

	render() {
		return (
			<>
				<Nav style={{backgroundColor: '	#272727'}} theme="dark" defaultActive="1" className="el-Nav-demo" mode="horizontal" >
					<Nav.Item index="1" >
						<NavLink to="/" className="nav-link" >
							<img style={{ width: "6em", height: "6em", marginTop: "-0.8em" }} src={process.env.PUBLIC_URL + "/img/brand-blackcolor.svg"} alt="Maestro Dobel" className="app-icon" />
						</NavLink>
					</Nav.Item>
				</Nav>
			</>
		)
	}
}

/* Export default */
export default NavBar