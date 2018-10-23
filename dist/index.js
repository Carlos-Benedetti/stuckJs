"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Binding_1 = require("./Binding");
function bindPage(page) {
    var input = document.querySelector('[stuk]');
    new Binding_1.Binding({
        object: page,
        property: "a"
    })
        .addBinding(input, "value", "keyup");
}
exports.bindPage = bindPage;
