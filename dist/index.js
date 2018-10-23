"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var binding = require("./Binding");
console.log(binding)
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
