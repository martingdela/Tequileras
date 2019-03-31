import { EventEmitter } from "events"
import TequilaDispatcher from "../dispatchers/TequilaDispatcher";
var TequilaConstants = require('../constants/index')

var CHANGE_EVENT = 'change'

class TequilaStore extends EventEmitter {
	constructor() {
		// var data = require('../utils/response.json');
		// for(var i = 0; i<data.length; i++){
		// 	var obj = data[i]
		// 	for(var j = 0; j<3; j++){
		// 		this.tequila.push(obj.tequila);
		// 	}
		// }
		super();
		this.tequila = [
			{
				marca: "Dobel",
				submarca: "Maestro",
				fechaCompra: "2019-20-21",
				fechaFabricacion: "2019-1-1",
				tipo: "Tequila"
			},
			{
				marca: "Otro Dobel",
				submarca: "Menos Maestro",
				fechaCompra: "2019-20-21",
				fechaFabricacion: "2018-01-01",
				tipo: "Tequila"
			}
		];
		this.historial = [
			{
				marca: "Dobel",
				submarca: "Maestro",
				fechaCompra: "2019-20-21",
				fechaFabricacion: "2019-1-1",
				tipo: "Tequila"
			},
			{
				marca: "Otro Dobel",
				submarca: "Menos Maestro",
				fechaCompra: "2019-20-21",
				fechaFabricacion: "2018-01-01",
				tipo: "Tequila"
			}
		];
	}

	createTequila(tequila) {
		this.tequila.push(tequila);
		this.emit.change();
	}

	getTequila() {
		return this.tequila;
	}

	getHistorial(){
		return this.historial;
	}

	handleActions(action) {
		switch (action.actionType) {
			case TequilaConstants.GET_TEQUILA:
				this.getTequila();
				break
			case TequilaConstants.GET_HISTORIAL:
				this.getHistorial();
				break
			case TequilaConstants.ADD_TEQUILA:
				this.createTequila(action.text);
				break
			default:
				TequilaStore.emit(CHANGE_EVENT)
		}
	}
}

const tequilaStore = new TequilaStore;
TequilaDispatcher.register(tequilaStore.handleActions.bind(tequilaStore));
export default tequilaStore;