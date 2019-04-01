var AppDispatcher = require('../dispatchers/AppDispatcher');
var AppConstants = require('../constants/UserConstants');
var ObjectAssign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change'

var _store = {
	usuario : false
}

var UserStore = ObjectAssign({}, EventEmitter.prototype,{
	addChangeListener : function(cb){
		this.on(CHANGE_EVENT,cb)
	},
	removeChangeListener: function(cb){
		this.removeListener(CHANGE_EVENT,cb)
	},
	isUserOnDB : function(){
		return _store.usuario
	},
	logout : function(){
		_store.usuario = false
	}
})

AppDispatcher.register(function(payload){
	var action = payload.action
	switch(action.actionType) {
		case AppConstants.LOGIN_USER:
			UserStore.emit(CHANGE_EVENT)
			break
		case AppConstants.LOGIN_USER_RESPONSE:
		alert(action.response)
			_store.usuario = action.response
			UserStore.emit(CHANGE_EVENT)
			break
	}
})

module.exports = UserStore