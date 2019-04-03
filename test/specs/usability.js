const assert = require('assert');

describe('Basic Homepage Structure', () => {
    it('First Tab is <<Conoce tu Tequila>>', () => {
        browser.url('http://localhost:3000/')
		const elem = $('.el-tabs__nav .el-tabs__item:nth-child(1)')
		assert.equal(elem.getText(),"Conoce tu tequila")
	})
	
	it('Second Tab is << Conoce tu tequilera >>',() => {
		browser.url('http://localhost:3000/')
		const elem = $('.el-tabs__nav .el-tabs__item:nth-child(2)')
		assert.equal(elem.getText(),"Conoce tu tequilera")
	})

	it('Third Tab is << Conoce tu tequilera >>',() => {
		browser.url('http://localhost:3000/')
		const elem = $('.el-tabs__nav .el-tabs__item:nth-child(3)')
		assert.equal(elem.getText(),"Ve tu historial")
	})
});