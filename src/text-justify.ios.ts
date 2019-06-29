import {
    TextJustifyCommon,
    textProperty,
    alignmentProperty,
    fontSizeProperty,
    colorProperty
} from "./text-justify.common";
import { Color } from "tns-core-modules/color/color";

export class TextJustify extends TextJustifyCommon {
    [alignmentProperty.setNative](value: string) {
        if (value === "true") {
            this.nativeView.textAlignment = 3;
        }
    }

    [textProperty.setNative](value: string) {
        this.nativeView.text = value;
    }

    [fontSizeProperty.setNative](value: number) {
        this.nativeView.fontSize = value;
    }

    [colorProperty.setNative](value: string) {
        this.nativeView.color = new Color(value);
    }

    public initNativeView() {
        (<any>this.nativeView).owner = this;
        super.initNativeView();
    }
}
