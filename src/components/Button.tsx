import { Component } from '../systems/Component'
import { Theme } from '../systems/Theme'

export class Button extends Component implements Button.Options {

    public color = Theme.Palette.Primary
    public shape = Button.Shape.Rounded
    public size = Theme.Size.Medium
    public variant = Button.Variant.Contained

    public render(): Component.Element[] {
        const attributes = {
            color: this.color,
            shape: this.shape,
            size: this.size,
            variant: this.variant
        }

        return [
            <HTMLButtonElement attributes={ attributes }>
                <HTMLSlotElement/>
            </HTMLButtonElement>
        ]
    }

    public theme(): Component.StyleSheet {
        const theme = this.getContext(Theme)

        return `
            :host {
                display: contents;
            }

            .${ HTMLButtonElement.name } {
                background-color: transparent;
                border: none;
                color: transparent;
                font-family: inherit;
                font-size: inherit;
            }

            [color = ${ Theme.Palette.Primary }] {
                color: ${ theme.palette.primary };
            }

            [color = ${ Theme.Palette.Secondary }] {
                color: ${ theme.palette.secondary };
            }

            [color = ${ Theme.Palette.Tertiary }] {
                color: ${ theme.palette.tertiary };
            }

            [color = ${ Theme.Palette.Quaternary }] {
                color: ${ theme.palette.quaternary };
            }
            
            [shape = ${ Button.Shape.Circle }] {
                border-radius: 100%;
            }

            [shape = ${ Button.Shape.Pill }] {
                border-radius: 100vh;
            }

            [shape = ${ Button.Shape.Rounded }] {
                border-radius: 4px;
            }

            [shape = ${ Button.Shape.Sharp }] {
                border-radius: 0;
            }

            [size = ${ Theme.Size.Small }] {
                font-size: 1em;
                padding: 0.5em 1.25em;
            }

            [size = ${ Theme.Size.Medium }] {
                font-size: 1.25em;
                padding: 0.75em 1.5em;
            }

            [size = ${ Theme.Size.Large }] {
                font-size: 1.5em;
                padding: 1em 1.75em;
            }

            [variant = ${ Button.Variant.Contained }] {
                background-color: currentcolor;
                color: ${ theme.common.white };
            }

            [variant = ${ Button.Variant.Inverted }] {
                color: currentcolor;
            }

            [variant = ${ Button.Variant.Outlined }] {
                box-shadow: inset 0 0 0 3px currentcolor;
            }
        `
    }
}

export namespace Button {

    export interface Options {
        color: Theme.Palette
        shape: Shape
        size: Theme.Size
        variant: Variant
    }

    export enum Shape {
        Circle,
        Pill,
        Rounded,
        Sharp
    }

    export enum Variant {
        Contained,
        Inverted,
        Outlined,
    }
}