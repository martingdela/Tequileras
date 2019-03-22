import React from "react";

/* Element React components */
import { Layout, Carousel } from 'element-react'

/* Import the bottle chooser component */
import UseCaseChooser from '../components/UseCaseChooser'

class HomePage extends React.Component {
	state = {
		images: ['DOBEL.png', 'humito.png', 'blanco.png', 'Reposado-.png', 'rojo.png']
	}

	render() {

		const { images } = this.state

		return (
			<>
				<Layout.Row gutter="10">
					<Layout.Col span="24">
						<div style={{ textAlign: "center" }} className="grid-content bg-purple">
							<h1>Tequila Maestro Dobel</h1>
							<Carousel interval="4000" indicatorPosition="outside" height="25rem">
								{images.map((path, index) => {
									return (
										<Carousel.Item key={index}>
											<img style={{ height: "25rem" }} src={process.env.PUBLIC_URL + '/img/' + path} alt="Tequila de la familia Dobel"></img>
										</Carousel.Item>
									)
								})}
							</Carousel>
						</div>
					</Layout.Col>
				</Layout.Row>
				<UseCaseChooser />
			</>
		)
	}
}

export default HomePage