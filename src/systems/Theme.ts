import { Context } from 'cortex'

export class Theme extends Context<Theme.Context> {
    public value = {
        common: {
            black: new Theme.Color(Theme.Color.HEX, 0x000000),
            white: new Theme.Color(Theme.Color.HEX, 0xFFFFFF)
        },
        font: {
            family: 'Arial, sans-serif',
            size: 16
        },
        palette: {
            primary: new Theme.Color(Theme.Color.HEX, 0x000000),
            secondary: new Theme.Color(Theme.Color.HEX, 0x000000),
            tertiary: new Theme.Color(Theme.Color.HEX, 0x000000),
            quaternary: new Theme.Color(Theme.Color.HEX, 0x000000)
        }
    }
}

export namespace Theme {

    export class Color {

        private opacity: number;
        private format: Color.Format;
        private values: number[];

        public constructor(format: Color.Format, ...values: number[]) {
            this.opacity = 1;
            this.format = format;
            this.values = values;
        }

        public alpha(percent: number): Color {
            return Object.assign(new Color(this.format, ...this.values), { opacity: percent / 100 });
        }

        public toString(): string {
            switch (this.format) {
                case Color.Format.HEX:
                    return `#${ this.values[ 0 ].toString(16) }${ Math.round(this.opacity * 255).toString(16) }`
                case Color.Format.HSL:
                    return `hsla(${ this.values.join(', ') }, ${ this.opacity })`
                case Color.Format.RGB:
                    return `rgba(${ this.values.join(', ') }, ${ this.opacity })`
            }
        }
    }

    export namespace Color {
        
        export enum Format {
            HEX,
            HSL,
            RGB
        }

        export const HEX = Format.HEX
        export const HSL = Format.HSL
        export const RGB = Format.RGB
    }

    export interface Context {
        common: {
            black: Color
            white: Color
        }
        font: Font
        palette: {
            primary: Color
            secondary: Color
            tertiary: Color
            quaternary: Color
        }
    }

    export interface Font {
        family: string
        size: number
    }

    export enum Palette {
        Primary,
        Secondary,
        Tertiary,
        Quaternary
    }

    export enum Size {
        Small,
        Medium,
        Large
    }
}