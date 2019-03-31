var AppDispatcher = require('../dispatchers/AppDispatcher')
var AppConstants = require('../constants/TequilaConstants')

module.exports = {
	receiveTequila : function(response) {
		AppDispatcher.handleServerAction({
			actionType: AppConstants.RECEIVE_TEQUILA,
			response: response
		})
	},
	receiveAddTequilaToHistorialResponse : function(response) {
		AppDispatcher.receiveAddTequilaToHistorialResponse({
			actionType: AppConstants.RECEIVE_HISTORIAL,
			response: response
		})
	}
}