import React from "react";

/** Element React Tabs */
import {Tabs, Layout} from 'element-react'

/** Import other components */
import SKUForm from '../components/Forms/SKUForm'
import TequileraForm from '../components/Forms/TequileraForm'
import HistorialForm from '../components/Forms/HistorialForm'


class UseCase extends React.Component {
	state = {

	}

	render(){
		return (
			<Layout.Row gutter="10">
				<Layout.Col span="24">
					<Tabs type="border-card" activeName="1" style = {{color:"white", backgroundColor:"#191919", borderColor:"#191919"}}>
							<Tabs.Pane name="1" label="Conoce tu tequila">
								<SKUForm/>
							</Tabs.Pane>
							<Tabs.Pane name="2" label="Conoce tu tequilera">
								<TequileraForm />
							</Tabs.Pane>
							<Tabs.Pane name="3" label="Ve tu historial">
								<HistorialForm />
							</Tabs.Pane>
					</Tabs>
				</Layout.Col>
			</Layout.Row>
		)
	}
}

export default UseCase