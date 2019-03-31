var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/TequilaConstants');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change'

var _store = {
	tequila : {},
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
		return _store
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
			alert(action.response)
			_store.tequila = action.response
			TequilaStore.emit(CHANGE_EVENT)
			break
	}
})

module.exports = TequilaStore