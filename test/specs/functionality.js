const assert = require('assert');

describe('Functionality from the homepage', () => {
    it('should allow a registered user to look for a bottle', () => {
        browser.url('http://localhost:3000/')
		$('#sku-sku').setValue('XXXX-XXXX-XXXX-XXXX-XXXX')
		$('#sku-username').setValue('spiderman')
		$('#sku-password').setValue('notpeterparker1')
		$('.wow').click()
		assert($('.not-found').isExisting(),false)
	})

	it('should tell the user their bottle doesnt exist', () => {
        browser.url('http://localhost:3000/')
		$('#sku-sku').setValue('XXXX-XXxX-XXXX-XXXX-XXXX')
		$('#sku-username').setValue('spiderman')
		$('#sku-password').setValue('notpeterparker1')
		$('.wow').click()
		assert($('.not-found').isExisting(),true)
	})

	it('should tell the user their password is not right',()=>{
		browser.url('http://localhost:3000/')
		$('#sku-sku').setValue('XXXX-XXxX-XXXX-XXXX-XXXX')
		$('#sku-username').setValue('spiderman')
		$('#sku-password').setValue('s')
		$('.wow').click()
		const data = $(".el-form-item__error").getText()
		assert(data, "Tu contraseña no contiene el formato necesario (&gt; 1 mayuscula, &gt; 1 miniscula, 1&gt; numero, 6 &gt; caracteres")
	})

	it('should tell the user their username is empty',()=>{
		browser.url('http://localhost:3000/')
		$('#sku-sku').setValue('XXXX-XXxX-XXXX-XXXX-XXXX')
		$('#sku-username').setValue('spiderman')
		$('#sku-username').setValue('')
		$('#sku-password').setValue('kdsjsdajlsdjklasdljk234K')
		$('.wow').click()
		const data = $(".el-form-item__error").getText()
		assert(data, "Favor de ingresar el nombre de usuario")
		

	})

});