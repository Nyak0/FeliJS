import { Client, ClientOptions } from "oceanic.js"

interface BotOptions extends ClientOptions {
    prefixes:string[]
}

export default class Bot extends Client {
    constructor(options:BotOptions) {
        super(options)
        console.log(options.prefixes)
    }
    public start():void {
        this.connect()
    }
}