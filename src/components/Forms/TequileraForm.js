
import React from "react";

/** Element React Tabs */
import { Form, Layout, Select } from 'element-react'
import {Button, Typography} from '@material-ui/core'

/** Router with React Router Dom */
import { withRouter } from 'react-router-dom'


/** Import FLUX */
import TequilaActions from '../../actions/TequilaActions'
import TequilaStore from '../../stores/TequilaStore'

class TequileraForm extends React.Component {
	state = {
		form: {
			tequilera: '',
			tequileras: ['dobel','superdobel','megadobel']
		}
	}

	componentDidMount = () => {
		TequilaStore.addChangeListener(this.handleChange)
		TequilaActions.getTequileras()
	}

	handleChange = () => {
		let form = Object.assign({}, this.state.form)
		form.tequileras = TequilaStore.getTequileras()
		this.setState({
			form
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		const {tequilera, tequileras} = this.state.form
		let path = '/tequilera/' + tequileras[tequilera]
		this.props.history.push(path)
	}

	onChange = (key, value) => {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		});
	}

	render() {
		const {tequileras} = this.state.form
		return (

			<Layout.Row gutter="2">
				<Layout.Col span="24">
					<Typography variant="h3"> Informacion de mi Tequilera </Typography>
					<Typography variant="body1"> Selecciona una de las Tequileras a continuacion </Typography>
					<Form ref="form" model={this.state.form} className="es-MX" labelWidth="120" onSubmit={this.handleSubmit}>
						<Form.Item label="Tequilera">
							<Select value={this.state.form.tequilera} onChange={this.onChange.bind(this,'tequilera')} placeholder="Tequileras">
								{tequileras.map((tequila, index)=>(
									<Select.Option label={tequila} value={index}></Select.Option>
								))}
							</Select>
						</Form.Item>
						<Form.Item>
							<Button type="primary" color="primary" variant="outlined" onClick={this.handleSubmit}> Submit </Button>
						</Form.Item>
					</Form>
				</Layout.Col>
			</Layout.Row>
		)
	}
}

export default withRouter(TequileraForm)