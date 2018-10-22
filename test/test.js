/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');

describe('getPlural function test', () => {
    it('should return OK', () => {
        var result = index.test('OK');
        expect(result).to.equal('OK');
    });
    it('should return htmlElement', () => {

        var result = htmlToElement("<input stuk='name' value='teste'>");
        expect(result).to.equal(typeof HTMLElement);
    });
    // it('should return a list', () => {
    //     var result = index.DataBind();
    //     expect(result).to.equal('OK');
    // });
    
});