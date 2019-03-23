var TequileraDispatcher = require('../dispatchers/TequileraDispatcher')
var TequileraConstants = require('../constants/index')

module.exports = {
	receiveTequilera: function(response){
		TequileraDispatcher.handleServerAction({
			actionType: TequilaConstants.GET_TEQUILERA_RESPONSE,
			response: response
		})
	}
}