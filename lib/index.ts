/**
* @Method: Returns Ok to test the package.
* @Param {string}
* @Return {string}
*/
export function test (str: any) : string {
  return("OK")
}
/**
* Return a list of elements that have the stuk attribute.
* @Param Array<HTMLDocument> 
* @Return Array<string | null>
*/
export function GetElementsStuk(pages:Array<HTMLDocument>):Array<string | null> {
  var modelProperty:Array<string | null> = new Array();
  var input = document.querySelectorAll('[stuk]');
  input.forEach(element => {
    modelProperty.push(element.getAttribute('stuk'))  
  });
  return modelProperty
}
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
export function start(page:object){
  let map = GetElementsStuk([document])
  console.log(map)
  var input = document.querySelectorAll('[stuk]');
  input.forEach(element => {
    element.addEventListener('keyup', function (e) {
      let type = element.getAttribute('stuk')
      console.log(typeof page)
      // @ts-ignore
      let eventValue = e.target.value
      if(type != null && eventValue != null){
        // @ts-ignore
        page[type] = eventValue
      }
      
    })
    
  });
}

