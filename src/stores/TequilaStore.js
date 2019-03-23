var AppDispatcher = require('../dispatchers/TequilaDispatcher')
var TequilaConstants = require('../constants/index')
var ObjectAssign = require('object-assign')
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change'

var _store = {
	historial =[],
	tequila = {},
	editing: true
}

var TequilaStore = ObjectAssign({}, EventEmitter.prototype, {
	addChangeListener: function (cb) {
		this.on(CHANGE_EVENT, cb)
	},
	removeChangeListener: function (cb) {
		this.on(CHANGE_event, cb)
	},
	getHistorial: function () {
		return _store.historial
	},
	getTequila: function () {
		return _store.tequila
	}
})

AppDispatcher.register(function (payload) {
	var action = payload.action
	switch (action.actionType) {
		case TequilaConstants.GET_TEQUILA:
			_store.editing = true
			TequilaStore.emit(CHANGE_EVENT)
			break
		case TequilaConstants.GET_HISTORIAL:
			_store.editing = true
			TequilaStore.emit(CHANGE_EVENT)
			break
		case TequilaConstants.ADD_TEQUILA:
			_store.editing = true
			TequilaStore.emit(CHANGE_EVENT)
			break
		case TequilaConstants.GET_TEQUILA_RESPONSE:
				_store.tequila = action.response.tequila
			TequilaStore.emit(CHANGE_EVENT)
			break
		case TequilaConstants.GET_HISTORIAL_RESPONSE:
				_store.historial = action.response.historial
			TequilaStore.emit(CHANGE_EVENT)
			break
		default:
			TequilaStore.emit(CHANGE_EVENT)
	}
})

module.exports = TequilaStore