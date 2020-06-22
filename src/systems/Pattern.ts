import { Component } from './Component'

export class Pattern<Options extends object> extends Component {

    protected readonly component: any

    protected readonly metadata: {
        description: string
        title: string
    }

    protected readonly options: {
        [ key in keyof Options ]: {
            default?: Options[ key ]
            label: string
            multiple?: boolean
            options?: Pattern.Option<Options[ key ]>[]
        }
    }
}

export namespace Pattern {

    export type Datum =
        | Date
        | bigint
        | boolean
        | number
        | string

    export class Layer extends Component {
        
    }

    export interface Option<Value> {
        label: string
        value: Value
    }

    export enum Type {
        Date,
        BigInt,
        Boolean,
        Number,
        String
    }
}