import React from "react";

/** Element React Tabs */
import {Form, Layout, Input, Button,Notification} from 'element-react'

/** Router with React Router Dom */
import {withRouter} from 'react-router-dom'

/** Fluxie */
import UserStore from '../../stores/UserStore'
import UserActions from '../../actions/UserActions'

class SKUForm extends React.Component {
	state = {
		inStore : false,
		form : {
			sku: 'xxxx-xxxx-xxxx-xxxx',
			username: '',
			password: ''
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
			
			], username: [
				{required: true, message: 'Favor de ingresar el nombre de usuario', trigger: 'blur'}
			], password: [
				{required: true, message: 'Ingrese su password', trigger: 'blur'},
				{validator: (rule,value,callback) => {
					if(value === ''){
						callback(new Error('Porfavor, ingrese su password'))
					} else if (! /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/.test(value)){
						callback(new Error('Tu contraseña no contiene el formato necesario (> 1 mayuscula, > 1 miniscula, 1> numero, 6 > caracteres'))
					} else {
						callback()
					}
				}}
			]

		}
	}

	componentDidMount = () => {
		UserStore.addChangeListener(this.onChange)
	}

	onChange = () => {
		this.setState({inStore: UserStore.isUserOnDB()})
	}

	handleSubmit = event => {
		event.preventDefault()
		this.refs.form.validate((valid)=>{
			if(valid){
				UserActions.login(this.state.form.username,this.state.form.password)
				setTimeout(()=>{
					console.log(this.state.inStore)
					if(UserStore.isUserOnDB()){
						let path = '/tequila/'+this.state.form.sku+'/'+this.state.form.username
						this.props.history.push(path)
						UserStore.logout()
					}else{
						Notification({
							title: "Error",
							message: "Usuario no esta registrado",
							type: "error"
						})
					}
				},1000)
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
					<Form ref="form" model={this.state.form} rules={this.state.rules} className={"sku-form"} labelWidth="120" onSubmit={this.handleSubmit}>
						<Form.Item prop="sku" label="SKU">
							<Input id="sku-sku" value={this.state.form.sku} onChange={this.onChange.bind(this,'sku')}></Input>
						</Form.Item>
						<Form.Item prop="username" label="Nombre de Usuario">
							<Input id="sku-username" value={this.state.form.username} onChange={this.onChange.bind(this,'username')}></Input>
						</Form.Item>
						<Form.Item prop="password" label="Contraseña">
							<Input id="sku-password" type={"password"} value={this.state.form.password} onChange={this.onChange.bind(this,'password')}></Input>
						</Form.Item>
						<Form.Item>
							<Button className={"wow"} type="submit" onClick={this.handleSubmit}> Submit </Button>
						</Form.Item>
						
					</Form>
				</Layout.Col>
			</Layout.Row>
		)
	}
}

export default withRouter(SKUForm)