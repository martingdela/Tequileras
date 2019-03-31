var AppDispatcher = require('../dispatchers/TequileraDispatcher')
var TequilaConstants = require('../constants/index')
var ObjectAssign = require('object-assign')
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change'

var _store = {
	tequilera = {},
	editing: true
}

var TequileraStore = ObjectAssign({}, EventEmitter.prototype, {
	addChangeListener: function (cb) {
		this.on(CHANGE_EVENT, cb)
	},
	removeChangeListener: function (cb) {
		this.on(CHANGE_EVENT, cb)
	},
	getTequilera: function () {
		return _store.tequilera
	}
})

AppDispatcher.register(function (payload) {
	var action = payload.action
	switch (action.actionType) {
		case TequilaConstants.GET_TEQUILERA:
			_store.editing = true
			TequileraStore.emit(CHANGE_EVENT)
			break
		case TequilaConstants.GET_TEQUILERA_RESPONSE:
			_store.tequilera = action.response.tequilera
            TequileraStore.emit(CHANGE_EVENT)
			break
		default:
			TequileraStore.emit(CHANGE_EVENT)
	}
})

module.exports = TequileraStore