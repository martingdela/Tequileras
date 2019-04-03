const assert = require('assert');

describe('Basic Cleansing Test', () => {
    it('should have the right title', () => {
        browser.url('http://localhost:3000/');
        const title = browser.getTitle();
        assert.equal(title, 'React App');
    });
});