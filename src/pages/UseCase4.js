import React from "react";
import { Link } from 'react-router-dom'

/** Element React elements */
import { Layout, Loading, Table, Dialog } from 'element-react'
import {Card, Typography, Button} from '@material-ui/core'

/** Components */
import TequilaCard from "../components/TequilaCard";

/** Import FLUX */
import TequilaActions from '../actions/TequilaActions'
import TequilaStore from '../stores/TequilaStore'


class UseCase extends React.Component {
	state = {
		fullscreen: true,
		selectedTequila: {},
		dialogVisible: false,
		forceUpdate : false,
		columns: [
			{ label: "Marca", prop: "marca", width: 180, sortable: true },
			{ label: "Nombre", prop: "name", width: 180, sortable: true },
			{ label: "Submarca", prop: "submarca", width: 180, sortable: true },
			{ label: "Fecha de Compra", prop: "fechaCompra", width: 180, sortable: true },
			{ label: "Fecha de Fabricacion", prop: "fechaProduccion", width: 180, sortable: true },
			{ label: "Tipo", prop: "tipo", width: 180, sortable: true },
			{
				label: "Operaciones", render: function () {
					return (
						<span>
							<Button plain={true} onClick={this.onCurrentChange} type="info" size="small">Ver</Button>
						</span>
					)
				}
			}
		],
		data: [{
			marca: "Dobel",
			name: "Wow",
			submarca: "Maestro",
			fechaCompra: "2019-20-21",
			fechaFabricacion: "2019-1-1",
			tipo: "Tequila"
		}],
	}

	componentDidMount = () => {
		TequilaStore.addChangeListener(this.onChange)
		TequilaActions.getHistorial()
		setTimeout(() => {
			this.setState({ fullscreen: false })
		}, 3000)
	}

	onChange = () => {
		var {username} = this.props
		var data = []
		TequilaStore.getHistorial().forEach((tequila)=>{
			if(tequila.username == username){
				data.push(tequila)
			}
		})
		this.setState({data})
		this.setState({selectedTequila: TequilaStore.getHistorial()[0]})
	}

	onCurrentChange = item => {
		this.setState({ dialogVisible: true })
		this.setState({selectedTequila: item})
		this.forceUpdate()
	}

	render() {
		const { fullscreen, data } = this.state
		return (
			<>
				{fullscreen && <Loading fullscreen={true} />}
				<Layout.Col>
					<Layout.Row span="24">
						<Card style={{ marginTop: "3%" }} className="box" header={
							<div className="clearfix">
								<span style={{ "lineHeight": "1rem" }}> <Typography variant="h3"> Historial </Typography> </span>
							</div>
						}>

							<Layout.Row span="24" type="flex" justify="center">
								{data.length === 0 ? (
									<>
										<Card style={{margin: "5%"}}>
											<h1> No tienes data en tu historial </h1>
											<p> Sigue buscando data </p>
											<Link to="/">
												<Button type="text">Regresar a la pagina principal</Button>
											</Link>
										</Card>
									</>
								) : (
										<>
											<Table
												style={{ width: '100%' }}
												columns={this.state.columns}
												highlightCurrentRow={true}
												data={data}
												onCurrentChange={item => this.onCurrentChange(item)}
												border={true} />
										</>
									)}

								<Dialog
									visible={this.state.dialogVisible}
									onCancel={() => this.setState({ dialogVisible: false, forceUpdate: false })}
									style={{width: "20rem"}}
									lockScroll={false}
								>
									<Dialog.Body>
										{/* {this.state.selectedTequila.map((tequila, index)=>( */}
											<TequilaCard tequila={this.state.selectedTequila}/>
										{/* // ))} */}
										
									</Dialog.Body>
									<Dialog.Footer className="dialog-footer">
										<Button color="secondary" variant="outlined" onClick={() => this.setState({ dialogVisible: false })}>OK</Button>
									</Dialog.Footer>
								</Dialog>
							</Layout.Row>
						</Card>
					</Layout.Row>

				</Layout.Col>
			</>
		)
	}
}

export default UseCase