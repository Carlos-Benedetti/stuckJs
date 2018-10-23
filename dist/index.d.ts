/**
 * <b> Creates a two way bind with the elements that have the stuk attribute value equal to a variable name in the object sent as parameter e.g : <input stuk="name"> by having the "name" as attribute the value of that input in linked to the variable "name" sent with the object </b>
 * @example
 * // returns undefined
 * <input stuk="name"> 
 * <script>
 * stuk.bindPage({name:"Benedetti"})
 * </script>
 *
 * @param {object} (your page variables object)
 * 
 * @fileOverview simple two way data bind for js.
 * @author <a href="https://gitlab.com/Cadub">Carlos Benedetti</a>
 * @version 1.0.1
 */
export declare function bindPage(page: object): void;

 
