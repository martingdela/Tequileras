import React from "react";

/** Element React Tabs */
import {Form, Layout, Input, Button} from 'element-react'

/** Import other components */

class SKUForm extends React.Component {
	state = {
		form : {
			sku: 'xxxx-xxxx-xxxx-xxxx',
		},
		rules: {
			sku: [
				{required: true, message: 'Favor de ingresar el SKU', trigger: 'blur'},
				{validator: (rule, value, callback) => {
					if(value === ''){
						callback(new Error('Favor de ingresar el SKU'))
					} else if(! /(\w|\d){4}-(\w|\d){4}-(\w|\d){4}-(\w|\d){4}/.test(value)){
						callback(new Error('El SKU no se conforma al formato requerido'))
					} else {
						callback()
					}
				}}
			
			]
		}
	}

	handleSubmit = event => {
		event.preventDefault()
		this.refs.form.validate((valid)=>{
			if(valid){
				alert('Valido')
			}
		})
	}

	onChange = (key,value) => {
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		  });
	}

	render(){
		return (
			<Layout.Row gutter="2">
				<Layout.Col span="24">
					<h1> Informacion de mi botella </h1>
					<p> Ingresa los datos que se te piden a continuacion </p>
					<Form ref="form" model={this.state.form} rules={this.state.rules} className="es-MX" labelWidth="120" onSubmit={this.handleSubmit}>
						<Form.Item prop="sku" label="SKU">
							<Input value={this.state.form.sku} onChange={this.onChange.bind(this,'sku')}></Input>
						</Form.Item>
						<Form.Item>
							<Button type="primary" onClick={this.handleSubmit}> Submit </Button>
						</Form.Item>
					</Form>
				</Layout.Col>
			</Layout.Row>
		)
	}
}

export default SKUForm