import { Property } from "tns-core-modules/ui/content-view";
import { Label } from "tns-core-modules/ui/label/label";

export class TextJustifyCommon extends Label {
    /**
     * Gets or set the text alignment of the DocumentView.
     */
    aligment: string;

    /**
     * Gets or set the text family of the DocumentView.
     */
    textTypefacePath: string;
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

export const fontSizeProperty = new Property<TextJustifyCommon, number>({
    name: "fontSize",
    valueConverter: value => +value
});
fontSizeProperty.register(TextJustifyCommon);

export const colorProperty = new Property<TextJustifyCommon, string>({
    name: "color",
    valueConverter: value => value
});
colorProperty.register(TextJustifyCommon);

export const textTypefacePathProperty = new Property<TextJustifyCommon, string>(
    {
        name: "textTypefacePath",
        valueConverter: value => value
    }
);
textTypefacePathProperty.register(TextJustifyCommon);
