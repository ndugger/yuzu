import { Button } from '../components/Button';
import { Pattern } from '../systems/Pattern';
import { Theme } from '../systems/Theme'

export class ButtonPattern extends Pattern<Button.Options> {

    protected readonly component = Button

    protected readonly metadata = {
        title: 'Button',
        description: 'Element which is intentionally clickable'
    }

    protected readonly options = {
        color: {
            label: 'Button Color',
            default: Theme.Palette.Primary,
            options: [
                {
                    label: 'Primary',
                    value: Theme.Palette.Primary
                },
                {
                    label: 'Secondary',
                    value: Theme.Palette.Secondary
                },
                {
                    label: 'Tertiary',
                    value: Theme.Palette.Tertiary
                },
                {
                    label: 'Quaternary',
                    value: Theme.Palette.Quaternary
                }
            ]
        },
        shape: {
            label: 'Button Shape',
            default: Button.Shape.Rounded,
            options: [
                { 
                    label: 'Circle', 
                    value: Button.Shape.Circle
                },
                { 
                    label: 'Pill', 
                    value: Button.Shape.Pill
                },
                { 
                    label: 'Rounded', 
                    value: Button.Shape.Rounded
                },
                { 
                    label: 'Sharp', 
                    value: Button.Shape.Sharp
                }
            ]
        },
        size: {
            label: 'Button Size',
            default: Theme.Size.Medium,
            options: [
                {
                    label: 'Small',
                    value: Theme.Size.Small
                },
                {
                    label: 'Medium',
                    value: Theme.Size.Medium
                },
                {
                    label: 'Large',
                    value: Theme.Size.Large
                }
            ]
        },
        variant: {
            label: 'Button Variant',
            default: Button.Variant.Contained,
            options: [
                { 
                    label: 'Contained', 
                    value: Button.Variant.Contained
                },
                { 
                    label: 'Inverted', 
                    value: Button.Variant.Inverted
                },
                { 
                    label: 'Outlined', 
                    value: Button.Variant.Outlined
                }
            ]
        }
    }
}
