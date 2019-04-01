import React from "react";

/** Element React Tabs */
import { Card, Layout } from 'element-react'

class TequilaCard extends React.Component {
	state = {
		imgSrc: process.env.PUBLIC_URL + '/img/DOBEL.png',
		name: 'Gran Tequila Dobel',
		tequilera: 'Dobel',
		contenido: '500ml',
		fabrica: 'RM-2291822-A',
		fechaprod: '2009-02-26 12:22:00'
	}

	componentWillReceiveProps = () => {
		let {tequila} = this.props
		console.log(tequila)
		if(tequila !== undefined){
			this.setState({
				name: tequila.name,
				tequilera: tequila.marca,
				contenido: tequila.contenido,
				fabrica: tequila.fabrica,
				fechaprod: tequila.fechaProduccion
			})
		}
	}

	render() {

		const { imgSrc, name, tequilera, contenido, fabrica, fechaprod } = this.state

		return (
			<Layout.Row>
				<Layout.Col span={8} offset={0}>
					<Card style={{ height: "35rem", width: "16rem" }} bodyStyle={{ padding: 0 }}>
						<img alt="Tequila" style={{ width: "16rem" }} src={imgSrc} className="image" />
						<div style={{ padding: 14 }}>
							<h3>{name}</h3>
							<p>Tequilera: <b>{tequilera}</b></p>
							<p>Contenido: <b>{contenido}</b></p>
							<p>Fabrica: <b>{fabrica}</b></p>
							<p>Fecha de produccion: {fechaprod}</p>
						</div>
					</Card>
				</Layout.Col>
			</Layout.Row>
		)
	}
}

export default TequilaCard