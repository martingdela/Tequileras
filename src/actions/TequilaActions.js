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
	}
}