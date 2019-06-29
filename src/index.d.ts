import { Label } from "tns-core-modules/ui/label/label";
import { View, Property } from "tns-core-modules/ui/core/view";

export class TextJustify extends View {
    /**
     * Common
     */
    text: string;
    aligment: string;

    /**
     * Android Only
     */
    textTypefacePath: string;
    textSize: number;
    textColor: string;
}

export const aligment: Property<TextJustify, string>;
export const textTypefacePath: Property<TextJustify, string>;
export const text: Property<TextJustify, string>;
export const textSize: Property<TextJustify, number>;
export const textColor: Property<TextJustify, string>;
