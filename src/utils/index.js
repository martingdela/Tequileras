/** Simulator */
var fs = require('fs')
var obj = require('./response.json')
/** Flux stuff */
var TequilaServerActions = require('../actions/TequilaServerActions') 
// var TequileraActions = require('../actions/TequileraActions')

module.exports = {
	getTequilera : function(marca) {
		for(var i = 0 ; i < obj.tequileras.length; i++){
			return obj.tequileras[i].marca == marca ? obj.tequileras[i] : {}
		}
	},
	getTequila : function(sku){
		for(var i = 0 ; i < obj.tequileras.length; i++){
			for(var x = 0; x < obj.tequileras[i].tequilas.length; x++){
				if(obj.tequileras[i].tequilas[x].sku === sku){
					TequilaServerActions.receiveTequila(obj.tequileras[i].tequilas[x])
				}
			}
		}
	},
	getHistorial : function(){
		return obj.historial
	},
	addTequilaToHistorial : function(tequila){
		tequila.fechaCompra = new Date().toUTCString()
		obj.historial.push(tequila)
	}
}

