import React from "react";
import {Link} from 'react-router-dom'

/** Element React elements */
import { Layout, Loading, Card, Button} from 'element-react'

/** Import Components */
import Tequila from '../components/TequilaCard'

/** Import FLUX */
import TequilaActions from '../actions/TequilaActions'
import TequilaStore from '../stores/TequilaStore'

class UseCase extends React.Component {
	state = {
		fullscreen: true,
		tequilas: '',
		found: true
	}

	onChange = () => {
		this.setState({tequilas: TequilaStore.getTequila()})
	}

	componentDidMount = () => {
		//Add change listener
		TequilaStore.addChangeListener(this.onChange)
		// //Get the Tequila from store
		TequilaActions.getTequila('XXXX-XXXX-XXXX-XXXX') 
		setTimeout(() => {
			this.setState({ fullscreen: false })
		}, 3000)
	}

	componentWillUnmount() {
		TequilaStore.removeChangeListener(this.onChange)
	}

	render() {
		const { fullscreen, found, tequilas } = this.state
		console.log(tequilas)
		return (
			<>
				{fullscreen && <Loading fullscreen={true} />}
				<Layout.Col>
					<Layout.Row span="24">
						<Card style={{marginTop: "3%"}}className="box" header={
							<div className="clearfix">
								<span style={{ "lineHeight": "1rem" }}> <h2> Resultado </h2> </span>
							</div>
						}>
					
					<Layout.Row span="24" type="flex" justify="center">
						{!found ? (
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
							<Tequila />
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