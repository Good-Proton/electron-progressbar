import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';

export default class ProgressBar {
    public value: number
    public text: string
    public detail: string
    public title: string

    constructor(options: {
        abortOnError?: boolean
        indeterminate?: boolean
        initialValue?: number
        maxValue?: number
        closeOnComplete?: boolean
        title?: string
        text?: string
        detail?: string
        browserWindow?: BrowserWindowConstructorOptions
        style?: {
            text?: { [key: string]: string }
            detail?: { [key: string]: string }
            bar?: { [key: string]: string }
            value?: { [key: string]: string }
        }
    });

    public setCompleted(): void
    public close(): void
    public isInProgress(): boolean
    public isCompleted(): boolean

    public _window: BrowserWindow
}
