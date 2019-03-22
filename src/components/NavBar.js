import React from "react"

/* React Router Dom Components */
import { NavLink } from "react-router-dom"

/** Element React Components */
import { Menu as Nav } from 'element-react'

class NavBar extends React.Component {
	render() {
		return (
			<>
				<Nav theme="light" defaultActive="1" className="el-Nav-demo" mode="horizontal">
					<NavLink to="/" className="nav-link">
						<Nav.Item index="1"><img style={{width: "6em", height: "6em"}} src={process.env.PUBLIC_URL+"/img/brand-blackcolor.svg"} alt="Maestro Dobel" className="app-icon"/>
					</Nav.Item>
					</NavLink>
					<Nav.SubMenu index="2" title="Acciones">
						<NavLink to="/tequila/" className="nav-link">
							<Nav.Item index="2-1">Validar mi botella</Nav.Item>
						</NavLink>
						<NavLink to="/historial" className="nav-link">
							<Nav.Item index="2-2">Historial de botellas</Nav.Item>
						</NavLink>
					</Nav.SubMenu>
					<Nav.Item index="3">Mi perfil</Nav.Item>
				</Nav>

			</>
		)
	}
}

/* Export default */
export default NavBar