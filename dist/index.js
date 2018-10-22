"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
* @Method: Returns Ok to test the package.
* @Param {string}
* @Return {string}
*/
function test(str) {
    return ("OK");
}
exports.test = test;
/**
* Return a list of elements that have the stuk attribute.
* @Param Array<HTMLDocument>
* @Return Array<string | null>
*/
function GetElementsStuk(pages) {
    var modelProperty = new Array();
    var input = document.querySelectorAll('[stuk]');
    input.forEach(function (element) {
        modelProperty.push(element.getAttribute('stuk'));
    });
    return modelProperty;
}
exports.GetElementsStuk = GetElementsStuk;
// /**
// * @Method: Return ChildNode with a functional stuk attribute.
// * @Param {string}
// * @Return {ChildNode |null}
// */
// export function htmlToElement(html?:string):ChildNode |null {
//   if(!html){
//     html = "<input stuk='name' value='teste'>"
//   }
//   var template = document.createElement('template');
//   html = html.trim(); // Never return a text node of whitespace as the result
//   template.innerHTML = html;
//   return template.content.firstChild;
// }
/**
* @Method: Start the binding of a clas with the tags.
* @Param {PAGE}
*/
function start(page) {
    var map = GetElementsStuk([document]);
    console.log(map);
    var input = document.querySelectorAll('[stuk]');
    input.forEach(function (element) {
        element.addEventListener('keyup', function (e) {
            var type = element.getAttribute('stuk');
            console.log(typeof page);
            // @ts-ignore
            var eventValue = e.target.value;
            if (type != null && eventValue != null) {
                // @ts-ignore
                page[type] = eventValue;
            }
        });
    });
}
exports.start = start;
