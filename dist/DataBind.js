"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @Method: Returns the plural form of any noun.
* @Param {Array<HTMLDocument>}
* @Return {Array<string | null>}
*/
function DataBind(pages) {
    var modelProperty = new Array();
    var input = document.querySelectorAll('[stuk]');
    input.forEach(function (element) {
        modelProperty.push(element.getAttribute('stuk'));
    });
    return modelProperty;
}
exports.DataBind = DataBind;
