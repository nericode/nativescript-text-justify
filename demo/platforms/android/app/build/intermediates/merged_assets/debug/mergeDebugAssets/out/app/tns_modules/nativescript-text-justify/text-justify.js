"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_justify_common_1 = require("./text-justify.common");
var DocumentView = com.bluejamesbond.text.DocumentView;
var TextAlignment = com.bluejamesbond.text.style.TextAlignment;
var TypedValue = android.util.TypedValue;
var Color = android.graphics.Color;
var Typeface = android.graphics.Typeface;
var TextJustify = (function (_super) {
    __extends(TextJustify, _super);
    function TextJustify() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TextJustify.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    TextJustify.prototype[text_justify_common_1.textAlignmentProperty.setNative] = function (value) {
        if (value) {
            this.nativeView
                .getDocumentLayoutParams()
                .setTextAlignment(TextAlignment.JUSTIFIED);
        }
    };
    TextJustify.prototype[text_justify_common_1.textProperty.setNative] = function (value) {
        this.nativeView.getLayout().setText(value);
    };
    TextJustify.prototype[text_justify_common_1.fontSizeProperty.setNative] = function (value) {
        this.nativeView
            .getDocumentLayoutParams()
            .setTextSize(TypedValue.COMPLEX_UNIT_SP, value);
    };
    TextJustify.prototype[text_justify_common_1.textColorProperty.setNative] = function (value) {
        this.nativeView
            .getDocumentLayoutParams()
            .setTextColor(Color.parseColor(value));
    };
    TextJustify.prototype.createNativeView = function () {
        this.nativeView = new DocumentView(this._context, DocumentView.PLAIN_TEXT);
        this.nativeView.setCacheConfig(DocumentView.CacheConfig.NO_CACHE);
        this.nativeView
            .getDocumentLayoutParams()
            .setTextTypeface("fonts/Roboto.ttf");
        return this.nativeView;
    };
    return TextJustify;
}(text_justify_common_1.TextJustifyCommon));
exports.TextJustify = TextJustify;
//# sourceMappingURL=text-justify.js.map