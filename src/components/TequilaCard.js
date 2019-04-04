import React from "react";

/** Element React Tabs */
import {Layout} from 'element-react'
import {Card, CardActionArea, CardContent, CardHeader, Typography} from '@material-ui/core'

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
		this.forceUpdate()
		let {tequila} = this.props
		console.log(tequila)
		if(tequila !== undefined){
			this.setState({
				name: tequila.name,
				tequilera: tequila.marca,
				contenido: tequila.contenido,
				fabrica: tequila.fabrica,
				fechaprod: tequila.fechaProduccion,
				tipo: tequila.tipo
			})
		}
	}

	render() {

		const { imgSrc, name, tequilera, contenido, fabrica, fechaprod, tipo } = this.state

		return (
			<Layout.Row>
				<Layout.Col span={8} offset={0}>
					<Card style={{ height: "30rem", width: "16rem" }} bodyStyle={{ padding: 0 }}>
					<img alt="Tequila" style={{ width: "16rem" }} src={imgSrc} className="image" />
					<CardContent>
						<div style={{ padding: 14 }}>
							<Typography variant="h5">{name}</Typography>
							<Typography variant="body1">Tequilera: <b>{tequilera}</b></Typography>
							<Typography variant="body1">Contenido: <b>{contenido}</b></Typography>
							<Typography variant="body1">Fabrica: <b>{fabrica}</b></Typography>
							<Typography variant="body1">Fecha de produccion: {fechaprod}</Typography>
							<Typography variant="body1">Tipo: {tipo}</Typography>
						</div>
					</CardContent>
					</Card>
				</Layout.Col>
			</Layout.Row>
		)
	}
}

export default TequilaCard