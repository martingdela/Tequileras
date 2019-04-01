var AppDispatcher = require('../dispatchers/AppDispatcher')
var AppConstants = require('../constants/UserConstants')
var UserAPI = require('../utils/index')

module.exports = {
	login: function(username, password) {
		AppDispatcher.handleLogin({
			actionType: AppConstants.LOGIN_USER
		})

		UserAPI.login(username,password)
	}
}