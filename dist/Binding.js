"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Binding = /** @class */ (function () {
    function Binding(b) {
        this.elementBindings = new Array;
        //@ts-ignore
        this.value = b.object[b.property];
        Object.defineProperty(b.object, b.property, {
            get: this.valueGetter,
            set: this.valueSetter
        });
        //@ts-ignore
        b.object[b.property] = this.value;
    }
    Binding.prototype.valueGetter = function () {
        return this.value;
    };
    Binding.prototype.valueSetter = function (val) {
        this.value = val;
        if (this.elementBindings) {
            for (var i = 0; i < this.elementBindings.length; i++) {
                var binding = this.elementBindings[i];
                binding.element[binding.attribute] = val;
            }
        }
        return true;
    };
    Binding.prototype.addBinding = function (element, attribute, event) {
        var binding = {
            element: element,
            attribute: attribute,
            event: null
        };
        if (event) {
            //@ts-ignore
            element.addEventListener(event, function () { this.valueSetter(element[attribute]); }, false);
            binding.event = event;
        }
        this.elementBindings.push(binding);
        element[attribute] = this.value;
        return this;
    };
    return Binding;
}());
exports.Binding = Binding;
