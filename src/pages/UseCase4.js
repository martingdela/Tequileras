import React from "react";
import { Link } from 'react-router-dom';
//import jData from '../utils/response.json'
import TequilaStore from "../stores/TequilaStore";
/** Element React elements */
import { Layout, Loading, Card, Button, Table, Dialog } from 'element-react'

/** Components */
import TequilaCard from "../components/TequilaCard";
import tequilaStore from "../stores/TequilaStore";

class UseCase extends React.Component {

	state = {
		fullscreen: true,
		dialogVisible: false,
		columns: [
			{ label: "Marca", prop: "marca", width: 180, sortable: true },
			{ label: "Submarca", prop: "submarca", width: 180, sortable: true },
			{ label: "Fecha de Compra", prop: "fechaCompra", width: 180, sortable: true },
			{ label: "Fecha de Fabricacion", prop: "fechaFabricacion", width: 180, sortable: true },
			{ label: "Tipo", prop: "tipo", width: 180, sortable: true },
			{
				label: "Operaciones", render: function () {
					return (
						<span>
							<Button plain={true} type="info" size="small">Ver</Button>
						</span>
					)
				}
			}
		],
		data: TequilaStore.getTequila()
		// [{
		// 	marca: "Dobel",
		// 	submarca: "Maestro",
		// 	fechaCompra: "2019-20-21",
		// 	fechaFabricacion: "2019-1-1",
		// 	tipo: "Tequila"
		// }, {
		// 	marca: "Otro Dobel",
		// 	submarca: "Menos Maestro",
		// 	fechaCompra: "2019-20-21",
		// 	fechaFabricacion: "2018-01-01",
		// 	tipo: "Tequila"
		// }]
		,
	}

	componentWillMount(){
		tequilaStore.on("change", ()=>{
			this.setState({
				data: tequilaStore.getTequila(),
			})
		})
	}

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({ fullscreen: false })
		}, 3000)
	}

	onCurrentChange = item => {
		this.setState({ dialogVisible: true })
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
										<TequilaCard/>
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