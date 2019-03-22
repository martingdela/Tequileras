import React from "react";

/** Element React elements */
import { Layout, Loading, Card} from 'element-react'

/** Import Components */
import Tequila from '../components/TequilaCard'

class UseCase extends React.Component {
	state = {
		fullscreen: true,
		tequilas: '',
		found: true
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({ fullscreen: false })
		}, 3000)
	}

	render() {
		const { fullscreen, found } = this.state
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