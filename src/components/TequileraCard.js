import React from "react";

/** Element React Tabs */
import {Layout, Carousel } from 'element-react'
import {Button, Card, Typography} from '@material-ui/core'
/** Other components */
import Tequila from './TequilaCard'

class TequileraCard extends React.Component {
	state = {
		imgSrc: process.env.PUBLIC_URL + '/img/DOBEL.png',
		tequilera: 'Gran Maestro Dobel S.A. de C.V.',
		fundacion: '2009',
		direccion: 'San Juan del Rio 222. Col. Falderos',
		tequilas: []
	}

	componentWillReceiveProps = () => {
		let {tequilera} = this.props
		this.setState({
			tequilera: tequilera.marca,
			fundacion: tequilera.fundacion,
			direccion: tequilera.direccion,
			tequilas: tequilera.tequilas
		})
	}

	render() {

		const { imgSrc, tequilera, fundacion, direccion, tequilas } = this.state

		return (
			<Layout.Row>
				<Layout.Col span={8} offset={0}>
					<Card style={{ height: "83rem", width: "34rem" }} bodyStyle={{ padding: 0 }}>
					<Layout.Row type="flex" justify="center">
					<img alt="Tequila" style={{ width: "36rem"}} src={imgSrc} className="image" />
					</Layout.Row>
					<div style={{ padding: 14 }}>
							<Typography variant="h3">{tequilera}</Typography>
							<Typography variant="body1">Año de fundación: <b>{fundacion}</b></Typography>
							<Typography variant="body1">Direccion: <b>{direccion}</b></Typography>
							<div>
								
								<Carousel interval="4000" type="card" height="30rem" indicatorPosition="outside">
									{tequilas.map((tequila,index)=>{
										return (
											<Carousel.Item key={index}>
												<Tequila tequila={tequila}/>
											</Carousel.Item>
										)
									})}
								</Carousel>
							</div>
						</div>
						
					</Card>
				</Layout.Col>
			</Layout.Row>
		)
	}
}

export default TequileraCard