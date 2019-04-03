import React from "react";

/* Element React components */
import { Layout, Carousel, Loading } from 'element-react'
import {Typography} from '@material-ui/core'

/* Import the bottle chooser component */
import UseCaseChooser from '../components/UseCaseChooser'

class HomePage extends React.Component {
	state = {
		images: ['DOBEL.png', 'humito.png', 'blanco.png', 'Reposado-.png', 'rojo.png'],
		fullscreen: true,
	}

	componentDidMount = () => {
		setTimeout(()=>{
			this.setState({ fullscreen: false })
		},3000)
	}

	render() {

		const { images, fullscreen } = this.state

		return (
			<>
			{/* {fullscreen && <Loading fullscreen={true}/>} */}
				<Layout.Row gutter="10" style={{backgroundColor: "#131313", backgroundImage: "url(" + process.env.PUBLIC_URL + '/img/coolBack.png' + ")"}}>
					<Layout.Col span="24">
						<div style={{ marginTop: "2%",textAlign: "center" }} className="grid-content bg-purple">
							<Typography component="h2" variant="h3" style={{color:"white"}} gutterBottom>
								Proyecto de Tequilas
							</Typography>
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