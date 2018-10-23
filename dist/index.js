/**
 * @fileOverview simple two way data bind for js.
 * @author <a href="https://gitlab.com/Cadub">Carlos Benedetti</a>
 * @version 0.0.1
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binding = require("./Binding");
    /**
	 * <b> Creates a two way bind with the elements that have the stuk attribute value equal to a variable name in the object sent as parameter e.g : <input stuk="name"> by having the "name" as attribute the value of that input in linked to the variable "name" sent with the object </b>
     * @example
     * // returns undefined
     * <input stuk="name"> 
     * <script>
     * stuk.bindPage({name:"Benedetti"})
     * </script>
	 *
	 * @param {object} (all your page variables)
	 * 
	 */
function bindPage(page) {
    var input = document.querySelectorAll('[stuk]');
    input.forEach(element =>{
        new binding.Binding({
            object: page,
            property: element.getAttribute("stuk")
        })
            .addBinding(element, "value", "keyup");
            page[element.getAttribute("stuk")] = 456;
    })
}
exports.bindPage = bindPage;
