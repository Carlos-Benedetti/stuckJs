/**
 * @fileOverview simple two way data bind for js.
 * @author <a href="https://gitlab.com/Cadub">Carlos Benedetti</a>
 * @version 0.1.2
 */
/**
 * Creates a two way bind with the elements that have the stuk attribute value equal to a variable name in the object sent as parameter e.g : ` <input stuk="name">` by having the "name" as attribute the value of that input in linked to the variable "name" sent with the object
 * 
 * @example
 * ```html
 * <input stuk="name"> 
 * <script>
 *      stuk.bindPage({name:"Benedetti"})
 * </script>
 * ```
 *
 * 
 * 
 */
module Stuk {
    export interface Binding {
        element: HTMLElement | Element | HTMLInputElement | HTMLSelectElement
        attribute: string
        event: string
    }
    export class BindingController {
        elementBindings: Binding[] = []
        value: any;
        constructor(b: { object: any, property: string }) {
            this.value = b.object[b.property]
            Object.defineProperty(b.object, b.property, {
                get: this.valueGetter.bind(this),
                set: this.valueSetter.bind(this)
            });
            b.object[b.property] = this.value;

        }
        valueGetter() {
            return this.value;
        }
        valueSetter(val: any) {
            this.value = val
            this.elementBindings.forEach(binding => {
                binding.element[binding.attribute] = val
            })
        }
        addBinding(element: HTMLElement | Element | HTMLInputElement | HTMLSelectElement, attribute: string, event: string) {
            var binding: Binding = {
                element: element,
                attribute: attribute,
                event: event ? event : "change"
            }
            if (event) {
                element.addEventListener(event, (event) => {
                    this.valueSetter(element[attribute]);
                })

            }
            this.elementBindings.push(binding)
            element[attribute] = this.value
            return this
        }


    }
    export function bindPage(page: Object) {
        var input = document.querySelectorAll('[stuk]');
        input.forEach(element => {
            const value = element.getAttribute("stuk")
            if (value) {
                new BindingController({
                    object: page,
                    property: value
                }).addBinding(element, "value", "keyup");
            }
        })
    }
}