import React from "react";
import { Link } from 'react-router-dom'

/** Element React elements */
import { Layout, Loading, Card, Button } from 'element-react'

/** Components */
import Tequilera from '../components/TequileraCard'

/** Import FLUX */
import TequilaActions from '../actions/TequilaActions'
import TequilaStore from '../stores/TequilaStore'

class UseCase extends React.Component {
	state = {
		fullscreen: true,
		tequilera: {},
		found: true
	}

	onChange = () => {
		this.setState({tequilera: TequilaStore.getTequilera()})
	}

	componentDidMount = () => {
		TequilaStore.addChangeListener(this.onChange)
		TequilaActions.getTequilera(this.props.tequileraName)
		setTimeout(() => {
			this.setState({ fullscreen: false })
		}, 3000)
	}

	render() {
		const { fullscreen, tequilera } = this.state
		return (
			<>
				{fullscreen && <Loading fullscreen={true} />}
				<Layout.Col>
					<Layout.Row span="24">
						<Card style={{ marginTop: "3%" }} className="box" header={
							<div className="clearfix">
								<span style={{ "lineHeight": "1rem" }}> <h2> Resultado </h2> </span>
							</div>
						}>

							<Layout.Row span="24" type="flex" justify="center">
								{(tequilera.marca === undefined) ? (
									<>
										<Card>
											<h1>No se encontro esa Tequilera </h1>
											<p> Revisa que hayas seleccionado un nombre valido </p>
											<Link to="/">
												<Button type="text">Regresar a la pagina principal</Button>
											</Link>
										</Card>
									</>
								) : (
									<>
										<Tequilera tequilera={tequilera}/>			
									</>
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