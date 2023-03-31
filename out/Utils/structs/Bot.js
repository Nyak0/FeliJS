import { Client } from "oceanic.js";
export default class Bot extends Client {
    constructor(options) {
        super(options);
        console.log(options.prefixes);
    }
    start() {
        this.connect();
    }
}
