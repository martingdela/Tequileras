var Dispatcher = require('flux').Dispatcher
var AppDispatcher = new Dispatcher()

AppDispatcher.handleGetAction = function(action) {
	this.dispatch({
		source: 'GET_TEQUILA',
		action: action
	})
}

AppDispatcher.handleAddAction = function(action){
	this.dispatch({
		source: 'ADD_TEQUILA',
		action: action
	})
}

AppDispatcher.handleListAction = function(action){
	this.dispatch({
		source: 'GET_HISTORIAL',
		action: action
	})
}

AppDispatcher.handleServerTequilaAction = function(action) {
	this.dispatch({
		source: 'GET_TEQUILA_RESPONSE',
		action: action
	})
}

AppDispatcher.handleServerHistorialAction = function(action) {
	this.dispatch({
		source: 'GET_HISTORIAL_RESPONSE',
		action: action
	})
}

module.exports = AppDispatcher