var TequilaDispatcher = require('../dispatchers/TequilaDispatcher')
var TequilaConstants = require('../constants/index')

module.exports = {
	receiveTequila: function(response){
		TequilaDispatcher.handleServerTequilaAction({
			actionType: TequilaConstants.GET_TEQUILA_RESPONSE,
			response: response
		})
	},
	receiveHistorial: function(response){
		TequilaDispatcher.handleServerHistorialAction({
			actionType: TequilaConstants.GET_HISTORIAL_RESPONSE,
			response: response
		})
	}
}