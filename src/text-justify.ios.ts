import {
    TextJustifyCommon,
    alignmentProperty,
    textProperty
} from "./text-justify.common";
import { Color } from "tns-core-modules/color/color";
import { fontSizeProperty, colorProperty } from "tns-core-modules/ui/core/view";
import { Label } from "tns-core-modules/ui/label/label";

export class TextJustify extends Label implements TextJustifyCommon {
    textSize: number;
    textColor: string;
    aligment: string;
    textTypefacePath: string;

    [alignmentProperty.setNative](value: string) {
        if (value === "true") {
            this.nativeView.textAlignment = 3;
        }
    }

    [textProperty.setNative](value: string) {
        this.nativeView.text = value;
    }

    // [fontSizeProperty.setNative](value: number) {
    //     this.nativeView.fontSize = value;
    // }

    // [colorProperty.setNative](value: string) {
    //     this.nativeView.color = new Color(value);
    // }

    public initNativeView() {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }
}
