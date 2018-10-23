export declare class Binding {
    elementBindings: any;
    value: any;
    valueGetter: Function;
    valueSetter: (val: any) => boolean;
    addBinding: (element: any, attribute: any, event: any) => any;
    constructor(b: {
        object: object;
        property: string;
    });
}
