export class Binding{
    elementBindings:any = new Array;
    value:any;

    constructor(b:{object: object,property: string}) {
        //@ts-ignore
        this.value = b.object[b.property]
        Object.defineProperty(b.object, b.property, {
            get: this.valueGetter,
            set: this.valueSetter
        }); 
        //@ts-ignore
        b.object[b.property] = this.value;
    }
    valueGetter(){
        return this.value;
    }
    valueSetter(val:any){
        this.value = val
        if(this.elementBindings){
            for (var i = 0; i < this.elementBindings.length; i++) {
                var binding=this.elementBindings[i]
                binding.element[binding.attribute] = val
            }
        }
        return true
    }
    addBinding(element:any, attribute:any, event:any){
        var binding = {
            element: element,
            attribute: attribute,
            event:null
        }
        if (event){
            //@ts-ignore
            element.addEventListener(event,function(){this.valueSetter(element[attribute])},false)
            binding.event = event
        }       
        this.elementBindings.push(binding)
        element[attribute] = this.value
        
        return this
    }

       
    }

