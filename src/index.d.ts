import { ContentView } from "tns-core-modules/ui/content-view";

export class TextJustify extends ContentView {
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
     * Gets or set the text font size of the DocumentView.
     */
    textSize: number;

    /**
     * Gets or set the color font size of the DocumentView.
     */
    textColor: string;
}
