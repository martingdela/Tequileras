var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/TequilaConstants');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change'

var _store = {
	tequila : {},
	tequileras: [],
	tequilera: {},
	historial: [],
	successhist: false,
	editing: false
}

var TequilaStore = ObjectAssign({}, EventEmitter.prototype, {
	addChangeListener : function(cb){
		this.on(CHANGE_EVENT,cb)
	},
	removeChangeListener: function(cb){
		this.removeListener(CHANGE_EVENT,cb)
	},
	getTequila: function() {
		return _store.tequila
	},
	getTequileras : function () {
		return _store.tequileras
	},
	getTequilera : function() {
		return _store.tequilera
	},	
	getHistorialSuccess : function() {
		return _store.successhist
	},
	getHistorial: function(){
		return _store.historial
	},
	clearTequila : function(){
		_store.tequila = {}
	}
})

AppDispatcher.register(function(payload){
	var action = payload.action
	switch(action.actionType) {
		case AppConstants.GET_TEQUILA:
			_store.editing = true
			TequilaStore.emit(CHANGE_EVENT)
			break
		
		case AppConstants.RECEIVE_TEQUILA:
			_store.tequila = action.response
			TequilaStore.emit(CHANGE_EVENT)
			break
		
		case AppConstants.ADD_HISTORIAL:
			_store.editing = true
			TequilaStore.emit(CHANGE_EVENT)
			break
		
		case AppConstants.RECEIVE_HISTORIAL:
			_store.historial = action.response
			TequilaStore.emit(CHANGE_EVENT)
			break

		case AppConstants.GET_TEQUILERAS:
			_store.editing = true
			TequilaStore.emit(CHANGE_EVENT)
			break

		case AppConstants.RECEIVE_TEQUILERAS:
			_store.tequileras = action.response
			TequilaStore.emit(CHANGE_EVENT)
			break

		case AppConstants.GET_TEQUILERA:
			_store.editing = true
			TequilaStore.emit(CHANGE_EVENT)
			break

		case AppConstants.RECEIVE_TEQUILERA:
			_store.tequilera = action.response
			TequilaStore.emit(CHANGE_EVENT)
			break

	}
})

module.exports = TequilaStore