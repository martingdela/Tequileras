import React from "react";
import {Link} from 'react-router-dom'
// import {Helmet} from 'react-helmet'
 
/** Element React elements */
import { Layout, Loading, Card, Button, Notification} from 'element-react'

/** Import Components */
import Tequila from '../components/TequilaCard'

/** Import FLUX */
import TequilaActions from '../actions/TequilaActions'
import TequilaStore from '../stores/TequilaStore'


class UseCase extends React.Component {
	state = {
		fullscreen: true,
		tequilas: '',
		found: false
	}

	onChange = () => {
		this.setState({tequilas: TequilaStore.getTequila()})
	}

	componentDidMount = () => {
		//Add change listener
		TequilaStore.addChangeListener(this.onChange)
		 //Get the Tequila from store
		let serieId = this.props.serieId
		TequilaActions.getTequila(serieId)
		
		setTimeout(() => {
			this.setState({ fullscreen: false })
			let username = this.props.username
			TequilaActions.addHistorial(this.state.tequilas,username)
			if(this.state.tequilas.name !== undefined){
				Notification({
					title: "Exito",
					message: "Botella añadida al historial",
					type: "success"
				})
			}
		}, 3000)
	}

	componentWillUnmount() {
		TequilaStore.removeChangeListener(this.onChange)
	}

	render() {
		const { fullscreen, tequilas, found } = this.state
		// console.log(tequilas.name == undefined)
		return (
			<>
			{/* <Helmet>
                <meta charSet="utf-8" />
                <title>Valida tu botella</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet> */}
				{fullscreen && <Loading fullscreen={true} />}
				<Layout.Col>
					<Layout.Row span="24">
						<Card style={{marginTop: "3%"}}className="box" header={
							<div className="clearfix">
								<span style={{ "lineHeight": "1rem" }}> <h2> Resultado </h2> </span>
							</div>
						}>
					
					<Layout.Row span="24" type="flex" justify="center">
						{(tequilas.name === undefined) ? (
							<>
							<Card>
								<h1>No se encontro esa botella</h1>
								<p> Podrias ser victima de una botella falsa</p>
								<Link to="/">
									<Button type="text"> Regresar a la pagina principal</Button>
								</Link>
							</Card>
							</>
						) : (
							<Tequila tequila={tequilas}/>
						)}
						</Layout.Row>
						</Card>
					</Layout.Row>
					
				</Layout.Col>
			</>
		)
	}
}

export default UseCase