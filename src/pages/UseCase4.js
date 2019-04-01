import React from "react";
import { Link } from 'react-router-dom'

/** Element React elements */
import { Layout, Loading, Card, Button, Table, Dialog } from 'element-react'

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
		columns: [
			{ label: "Marca", prop: "marca", width: 180, sortable: true },
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
			submarca: "Maestro",
			fechaCompra: "2019-20-21",
			fechaFabricacion: "2019-1-1",
			tipo: "Tequila"
		}, {
			marca: "Otro Dobel",
			submarca: "Menos Maestro",
			fechaCompra: "2019-20-21",
			fechaFabricacion: "2018-01-01",
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
		this.setState({ dialogVisible: true, selectedTequila: item })
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
								<span style={{ "lineHeight": "1rem" }}> <h2> Historial </h2> </span>
							</div>
						}>

							<Layout.Row span="24" type="flex" justify="center">
								{data.length === 0 ? (
									<>
										<Card>
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
									title="Tequila"
									visible={this.state.dialogVisible}
									onCancel={() => this.setState({ dialogVisible: false })}
									style={{width: "20rem"}}
									lockScroll={false}
								>
									<Dialog.Body>
										<TequilaCard tequila={this.state.selectedTequila}/>
									</Dialog.Body>
									<Dialog.Footer className="dialog-footer">
										<Button onClick={() => this.setState({ dialogVisible: false })}>OK</Button>
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