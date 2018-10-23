export declare class Binding {
    elementBindings: any;
    value: any;
    constructor(b: {
        object: object;
        property: string;
    });
    valueGetter(): any;
    valueSetter(val: any): boolean;
    addBinding(element: any, attribute: any, event: any): this;
}
