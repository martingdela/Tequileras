var TequilaAPI = require('../utils/index')
var TequileraDispatcher = require('../dispatchers/TequileraDispatcher')
var TequileraConstants = require('../constants/index')

module.exports = {
	getTequilera : function(name) {
		TequileraDispatcher.handleGetAction({
			actionType: TequileraConstants.GET_TEQUILERA
		})

		TequilaAPI.getTequilera(name)
	}
}