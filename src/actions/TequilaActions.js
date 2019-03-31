var TequilaAPI = require('../utils/index')
var TequilaDispatcher = require('../dispatchers/TequilaDispatcher')
var TequilaConstants = require('../constants/index')

module.exports = {
	getTequila : function(sku) {
		TequilaDispatcher.handleGetAction({
			actionType: TequilaConstants.GET_TEQUILA
		})
		TequilaAPI.getTequila(sku)
	},
	addTequilaToHistorial: function(tequila) {
		TequilaDispatcher.handleAddAction({
			actionType: TequilaConstants.ADD_TEQUILA
		})
		TequilaAPI.addTequilaToHistorial(tequila)
	},
	getHistorial: function(){
		TequilaDispatcher.handleListAction({
			actionType: TequilaConstants.GET_HISTORIAL
		})
		TequilaAPI.getHistorial()
	}
}