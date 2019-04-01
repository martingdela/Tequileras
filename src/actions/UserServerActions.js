var AppDispatcher = require('../dispatchers/AppDispatcher')
var AppConstants = require('../constants/UserConstants')
var UserAPI = require('../utils/index')

module.exports = {
	receiveLogin: function(response) {
		AppDispatcher.handleLogin({
			actionType: AppConstants.LOGIN_USER_RESPONSE,
			response: response
		})
	}
}