import React from "react";

/** Element React Tabs */
import {Tabs, Layout} from 'element-react'
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanelActions, Typography} from '@material-ui/core'
import {ExpandMore} from '@material-ui/icons'

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
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMore/>}>
							<Typography id="conoce"> Conoce tu tequila </Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
						<SKUForm/>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMore/>}>
							<Typography id="conoce"> Conoce tu tequilera </Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
						<TequileraForm/>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMore/>}>
							<Typography id="conoce"> Ve tu historial </Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails>
						<HistorialForm/>
						</ExpansionPanelDetails>
					</ExpansionPanel>
					{/* <Tabs style = {{color:"white", backgroundColor:"#191919", borderColor:"#191919"}} type="border-card" activeName="1">
							<Tabs.Pane id="conoce" name="1" label="Conoce tu tequila">
								<SKUForm/>
							</Tabs.Pane>
							<Tabs.Pane name="2" label="Conoce tu tequilera">
								<TequileraForm />
							</Tabs.Pane>
							<Tabs.Pane name="3" label="Ve tu historial">
								<HistorialForm />
							</Tabs.Pane>
					</Tabs> */}
				</Layout.Col>
			</Layout.Row>
		)
	}
}

export default UseCase