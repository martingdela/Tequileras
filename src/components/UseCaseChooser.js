import React from "react";

/** Element React Tabs */
import {Tabs, Layout} from 'element-react'

/** Import other components */
import SKUForm from '../components/Forms/SKUForm'

class UseCase extends React.Component {
	state = {

	}

	render(){
		return (
			<Layout.Row gutter="10">
				<Layout.Col span="24">
					<Tabs type="border-card" activeName="1">
							<Tabs.Pane name="1" label="Conoce tu tequila">
								<SKUForm/>
							</Tabs.Pane>
							<Tabs.Pane name="2" label="Valida tu botella">
							
							</Tabs.Pane>
							<Tabs.Pane name="3" label="Conoce tu tequilera">
							
							</Tabs.Pane>
							<Tabs.Pane name="4" label="Ve tu historial de botellas">
							
							</Tabs.Pane>
					</Tabs>
				</Layout.Col>
			</Layout.Row>
		)
	}
}

export default UseCase