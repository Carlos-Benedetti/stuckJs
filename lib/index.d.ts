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
declare module Stuk {
    interface Binding {
        element: HTMLElement | Element | HTMLInputElement | HTMLSelectElement;
        attribute: string;
        event: string;
    }
    class BindingController {
        elementBindings: Binding[];
        value: any;
        constructor(b: {
            object: any;
            property: string;
        });
        valueGetter(): any;
        valueSetter(val: any): void;
        addBinding(element: HTMLElement | Element | HTMLInputElement | HTMLSelectElement, attribute: string, event: string): this;
    }
    function bindPage(page: Object): void;
}
