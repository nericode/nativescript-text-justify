import {
    TextJustifyCommon,
    textProperty,
    textAlignmentProperty,
    fontSizeProperty,
    textColorProperty,
    textTypefacePathProperty
} from "./text-justify.common";

declare const com: any;

const DocumentView = com.bluejamesbond.text.DocumentView;
const TextAlignment = com.bluejamesbond.text.style.TextAlignment;
const TypedValue = android.util.TypedValue;
const Color = android.graphics.Color;
const Typeface = android.graphics.Typeface;

export class TextJustify extends TextJustifyCommon {
    public nativeView;

    get android(): any {
        return this.nativeView;
    }

    [textAlignmentProperty.setNative](value: boolean) {
        if (value) {
            this.nativeView
                .getDocumentLayoutParams()
                .setTextAlignment(TextAlignment.JUSTIFIED);
        }
    }

    [textProperty.setNative](value: string) {
        this.nativeView.getLayout().setText(value);
    }

    [fontSizeProperty.setNative](value: number) {
        this.nativeView
            .getDocumentLayoutParams()
            .setTextSize(TypedValue.COMPLEX_UNIT_SP, value);
    }

    [textColorProperty.setNative](value: string) {
        this.nativeView
            .getDocumentLayoutParams()
            .setTextColor(Color.parseColor(value));
    }

    [textTypefacePathProperty.setNative](value: string) {
        this.nativeView
            .getDocumentLayoutParams()
            .setTextTypeface(this.getFont(this._context, value));
    }

    public createNativeView() {
        this.nativeView = new DocumentView(
            this._context,
            DocumentView.PLAIN_TEXT
        );

        this.nativeView.setCacheConfig(
            DocumentView.CacheConfig.NO_CACHE
        );

        this.nativeView
            .getDocumentLayoutParams()
            .setTextTypeface(
                this.getFont(this._context, "robotolight.ttf")
            );

        return this.nativeView;
    }

    public getFont(context, value) {
        return Typeface.createFromAsset(
            context.getAssets(),
            "fonts/" + value
        );
    }
}
