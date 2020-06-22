import { Component } from '../systems/Component'

export class Dialog extends Component implements Dialog.Options {

    public modal = false;
    
}

export namespace Dialog {

    export interface Options {
        modal: boolean
    }
}