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

/** 
 *  Get Tequileras
 */

AppDispatcher.handleGetTequileras = function(action) {
	this.dispatch({
		source: "GET_TEQUILERAS",
		action: action
	})
}

AppDispatcher.receiveTequileras = function(action){ 
	this.dispatch({
		source: "RECEIVE_TEQUILERAS",
		action: action
	})
}

/** 
 * Get Tequilera
*/

AppDispatcher.handleGetTequilera = function(action) {
	this.dispatch({
		source: "GET_TEQUILERA",
		action: action
	})
}

AppDispatcher.receiveTequilera = function(action) {
	this.dispatch({
		source: "RECEIVE_TEQUILERA",
		action: action
	})
}

/**
 * Login
 */

AppDispatcher.handleLogin = function(action) {
	this.dispatch({
		source: "LOGIN_USER",
		action: action
	})
}

AppDispatcher.receiveLogin = function(action) {
	this.dispatch({
		source: "LOGIN_USER_RESPONSE",
		action : action
	})
}

/**
 * Get Historial
 */

AppDispatcher.handleGetHistorial = function(action) {
	this.dispatch({
		source: "GET_HISTORIAL",
		action: action
	})
}

AppDispatcher.handleGetHistorialResponse = function(action) {
	this.dispatch({
		source: "GET_HISTORIAL_RESPONSE",
		action: action
	})
}

module.exports = AppDispatcher