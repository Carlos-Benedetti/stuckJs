import {Binding} from "./Binding"
export function bindPage(page:object){
  var input = document.querySelector('[stuk]');
  new Binding({
    object: page,
    property: "a"
  })
    .addBinding(input, "value", "keyup")
  
}

