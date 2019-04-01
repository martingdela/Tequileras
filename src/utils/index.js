/** Simulator */
var fs = require('browserify-fs')
var obj = require('./response.json')
var us = require('./userresponse.json')
/** Flux stuff */
var TequilaServerActions = require('../actions/TequilaServerActions')
var UserServerActions = require('../actions/UserServerActions')

module.exports = {
	getTequilera: function (marca) {
		for (var i = 0; i < obj.tequileras.length; i++) {
			if (obj.tequileras[i].marca == marca) {
				TequilaServerActions.receiveTequilera(obj.tequileras[i])
			}
		}

	},
	getTequileras: function () {
		var tequileras = []
		for (var i = 0; i < obj.tequileras.length; i++) {
			tequileras.push(obj.tequileras[i].marca)
		}

		TequilaServerActions.receiveTequileras(tequileras)
	},
	getTequila: function (sku) {
		for (var i = 0; i < obj.tequileras.length; i++) {
			for (var x = 0; x < obj.tequileras[i].tequilas.length; x++) {
				if (obj.tequileras[i].tequilas[x].sku === sku) {
					TequilaServerActions.receiveTequila(obj.tequileras[i].tequilas[x])
				}
			}
		}
	},
	getHistorial: function () {
		return obj.historial
	},
	addTequilaToHistorial: function (tequila, username) {
		tequila.fechaCompra = new Date().toUTCString()
		tequila.username = username
		obj.historial.push(tequila)
		TequilaServerActions.receiveAddTequilaToHistorialResponse(obj.historial)
	},
	login : function(username,password){
		let found = false
		for(var i = 0; i < us.users.length; i++){
			if(us.users[i].username == username && us.users[i].password == password){
				found = true
			}
		}
		UserServerActions.receiveLogin(found)
	}
}

