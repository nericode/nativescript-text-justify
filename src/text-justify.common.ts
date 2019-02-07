import {
    ContentView,
    Property
} from "tns-core-modules/ui/content-view";

export class TextJustifyCommon extends ContentView {
    /**
     * Gets the native [android widget](https://developer.android.com/reference/android/support/v7/widget/CardView.html) that represents the user interface for this component. Valid only when running on Android OS.
     */
    android: any /* com.bluejamesbond.text.DocumentView */;

    /**
     * Gets the native [ios widget](UIView) that represents the user interface for this component. Valid only when running on iOS.
     */
    ios: any /* UIView */;

    /**
     * Gets or set the text of the DocumentView.
     */
    text: string;

    /**
     * Gets or set the text alignment of the DocumentView.
     */
    textAlignment: boolean;

    /**
     * Gets or set the text of the DocumentView.
     */
    textSize: number;

    /**
     * Gets or set the color of the DocumentView.
     */
    textColor: string;

    /**
     * Gets or set the text family of the DocumentView.
     */
    textTypefacePath: string;
}

export const textAlignmentProperty = new Property<
    TextJustifyCommon,
    string
>({
    name: "textAlignment",
    valueConverter: value => value
});
textAlignmentProperty.register(TextJustifyCommon);

export const textProperty = new Property<TextJustifyCommon, string>({
    name: "text",
    valueConverter: value => value
});
textProperty.register(TextJustifyCommon);

export const fontSizeProperty = new Property<
    TextJustifyCommon,
    number
>({
    name: "textSize",
    valueConverter: value => +value
});
fontSizeProperty.register(TextJustifyCommon);

export const textColorProperty = new Property<
    TextJustifyCommon,
    string
>({
    name: "textColor",
    valueConverter: value => value
});
textColorProperty.register(TextJustifyCommon);

export const textTypefacePathProperty = new Property<
    TextJustifyCommon,
    string
>({
    name: "textTypefacePath",
    valueConverter: value => value
});
textTypefacePathProperty.register(TextJustifyCommon);
