"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var content_view_1 = require("tns-core-modules/ui/content-view");
var TextJustifyCommon = (function (_super) {
    __extends(TextJustifyCommon, _super);
    function TextJustifyCommon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TextJustifyCommon;
}(content_view_1.ContentView));
exports.TextJustifyCommon = TextJustifyCommon;
exports.textAlignmentProperty = new content_view_1.Property({
    name: "textAlignment",
    valueConverter: function (value) { return value; }
});
exports.textAlignmentProperty.register(TextJustifyCommon);
exports.textProperty = new content_view_1.Property({
    name: "text",
    valueConverter: function (value) { return value; }
});
exports.textProperty.register(TextJustifyCommon);
exports.fontSizeProperty = new content_view_1.Property({
    name: "textSize",
    valueConverter: function (value) { return +value; }
});
exports.fontSizeProperty.register(TextJustifyCommon);
exports.textColorProperty = new content_view_1.Property({
    name: "textColor",
    valueConverter: function (value) { return value; }
});
exports.textColorProperty.register(TextJustifyCommon);
//# sourceMappingURL=text-justify.common.js.map