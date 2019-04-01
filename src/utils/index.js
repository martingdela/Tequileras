/** Simulator */
var obj = require('./response.json')
var us = require('./userresponse.json')
const superagent = require('superagent')
/** Flux stuff */
var TequilaServerActions = require('../actions/TequilaServerActions')
var UserServerActions = require('../actions/UserServerActions')

module.exports = {
	getTequilera: function (marca) {
		superagent.get('http://127.0.0.1:6969/getTequilera')
		.withCredentials()
		.query({marca})
		.end((err,res)=>{
			if(err) { return console.log(err) }
			TequilaServerActions.receiveTequilera(res.body)
		})
	},
	getTequileras: function () {
		superagent.get('http://127.0.0.1:6969/getTequileras')
		.withCredentials()
		.end((err,res)=>{
			if(err) { return console.log(err) }
			TequilaServerActions.receiveTequileras(res.body)
		})
	},
	getTequila: function (sku) {
		superagent.get('http://127.0.0.1:6969/getTequila')
		.withCredentials()
		.query({sku: sku})
		.end((err,res)=>{
			if(err) { return console.log(err)}
			TequilaServerActions.receiveTequila(res)
		})
	},
	getHistorial: function () {
		superagent.get('http://127.0.0.1:6969/getHistorial')
		.withCredentials()
		.end((err,res) => {
			if(err) { return console.log(err) }
			TequilaServerActions.getHistorialResponse(res.body)
		})
	},
	addTequilaToHistorial: function (tequila, username) {
		superagent.get('http://127.0.0.1:6969/addTequilaToHistorial')
		.withCredentials()
		.query({tequila,username})
		.end((err,response)=>{
			if(err) { return console.log(err) }
			TequilaServerActions.receiveAddTequilaToHistorialResponse(response.body)
		})
	},
	login : function(username,password){
		superagent.get('http://127.0.0.1:6969/login')
		.withCredentials()
		.query({username, password})
		.end((err,res)=>{
			if(err) { return console.log(err)}
			UserServerActions.receiveLogin(res)
		})
		// UserServerActions.receiveLogin(found)
	}
}

