import { Property, View } from "tns-core-modules/ui/content-view";
import { TextJustify as TextJustifyDefinition } from "./index";

export class TextJustifyCommon extends View implements TextJustifyDefinition {
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

export const alignmentProperty = new Property<TextJustifyCommon, string>({
    name: "aligment",
    valueConverter: value => value
});
alignmentProperty.register(TextJustifyCommon);

export const textProperty = new Property<TextJustifyCommon, string>({
    name: "text",
    valueConverter: value => value
});
textProperty.register(TextJustifyCommon);
