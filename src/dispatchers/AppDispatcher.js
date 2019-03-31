var Dispatcher = require('flux').Dispatcher
var AppDispatcher = new Dispatcher()

/**
 * Get Tequila dispactcher
 */
AppDispatcher.handleViewAction = function(action) {
	this.dispatch({
		source: "VIEW_ACTION",
		action: action
	})
}

AppDispatcher.handleServerAction = function(action) {
	this.dispatch({
		source: "SERVER_ACTION",
		action: action
	})
}

/**
 * Get Historial 
 */

AppDispatcher.handleGetHistorialAction = function(action){
	this.dispatch({
		source: "ADD_HISTORIAL",
		action: action
	})
}

AppDispatcher.receiveAddTequilaToHistorialResponse = function(action){
	this.dispatch({
		source: "RECEIVE_HISTORIAL",
		action: action
	})
}

module.exports = AppDispatcher