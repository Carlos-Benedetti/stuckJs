"use strict";
/**
 * @fileOverview simple two way data bind for js.
 * @author <a href="https://gitlab.com/Cadub">Carlos Benedetti</a>
 * @version 0.0.1
 */
/**
 * <b> Creates a two way bind with the elements that have the stuk attribute value equal to a variable name in the object sent as parameter e.g : <input stuk="name"> by having the "name" as attribute the value of that input in linked to the variable "name" sent with the object </b>
 * @example
 * <input stuk="name">
 * <script>
 *      stuk.bindPage({name:"Benedetti"})
 * </script>
 *
 * @param {object} (all your page variables)
 *
 */
var Stuk;
(function (Stuk) {
    var BindingController = /** @class */ (function () {
        function BindingController(b) {
            this.elementBindings = [];
            this.value = b.object[b.property];
            Object.defineProperty(b.object, b.property, {
                get: this.valueGetter.bind(this),
                set: this.valueSetter.bind(this)
            });
            b.object[b.property] = this.value;
        }
        BindingController.prototype.valueGetter = function () {
            return this.value;
        };
        BindingController.prototype.valueSetter = function (val) {
            this.value = val;
            this.elementBindings.forEach(function (binding) {
                binding.element[binding.attribute] = val;
            });
        };
        BindingController.prototype.addBinding = function (element, attribute, event) {
            var _this = this;
            var binding = {
                element: element,
                attribute: attribute,
                event: event ? event : "change"
            };
            if (event) {
                element.addEventListener(event, function (event) {
                    _this.valueSetter(element[attribute]);
                });
            }
            this.elementBindings.push(binding);
            element[attribute] = this.value;
            return this;
        };
        return BindingController;
    }());
    Stuk.BindingController = BindingController;
    function bindPage(page) {
        var input = document.querySelectorAll('[stuk]');
        input.forEach(function (element) {
            var value = element.getAttribute("stuk");
            if (value) {
                new BindingController({
                    object: page,
                    property: value
                }).addBinding(element, "value", "keyup");
            }
        });
    }
    Stuk.bindPage = bindPage;
})(Stuk || (Stuk = {}));
