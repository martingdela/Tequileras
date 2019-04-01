var AppDispatcher = require('../dispatchers/AppDispatcher')
var TequilaConstants = require('../constants/TequilaConstants')
var TequilaAPI = require('../utils/index')

module.exports = {
	getTequila: function(sku) {
		AppDispatcher.handleViewAction({
			actionType: TequilaConstants.GET_TEQUILA
		})

		TequilaAPI.getTequila(sku)
	},
	addHistorial: function(tequila,username){
		AppDispatcher.handleGetHistorialAction({
			actionType: TequilaConstants.ADD_HISTORIAL
		})

		TequilaAPI.addTequilaToHistorial(tequila,username)
	},
	getTequileras: function() {
		AppDispatcher.handleGetTequileras({
			actionType: TequilaConstants.GET_TEQUILERAS
		})

		TequilaAPI.getTequileras()
	},
	getTequilera: function(marca){
		AppDispatcher.handleGetTequilera({
			actionType:  TequilaConstants.GET_TEQUILERA
		})

		TequilaAPI.getTequilera(marca)
	},
	getHistorial: function(){
		AppDispatcher.handleGetHistorial({
			actionType: TequilaConstants.GET_HISTORIAL
		})

		TequilaAPI.getHistorial()
	}
}