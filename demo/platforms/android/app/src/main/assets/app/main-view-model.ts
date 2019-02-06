import { Observable } from "tns-core-modules/data/observable";
import { TextJustify } from "nativescript-text-justify";

export class HelloWorldModel extends Observable {
    public message: string;

    constructor() {
        super();
    }
}
