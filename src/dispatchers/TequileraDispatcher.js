var Dispatcher = require('flux').Dispatcher
var AppDispatcher = new Dispatcher()

AppDispatcher.handleGetAction = function(action) {
	this.dispatch({
		source: 'GET_TEQUILERA',
		action: action
	})
}

AppDispatcher.handleServerAction = function(action) {
	this.dispatch({
		source: 'GET_TEQUILERA_RESPONSE',
		action: action
	})
}

module.exports = AppDispatcher