"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_justify_common_1 = require("./text-justify.common");
var DocumentView = com.bluejamesbond.text.DocumentView;
var TextAlignment = com.bluejamesbond.text.style.TextAlignment;
var TypedValue = android.util.TypedValue;
var Color = android.graphics.Color;
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
        return this.nativeView;
    };
    return TextJustify;
}(text_justify_common_1.TextJustifyCommon));
exports.TextJustify = TextJustify;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1qdXN0aWZ5LmFuZHJvaWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXh0LWp1c3RpZnkuYW5kcm9pZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZEQU0rQjtBQUkvQixJQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDekQsSUFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztBQUNqRSxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUMzQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztBQUVyQztJQUFpQywrQkFBaUI7SUFBbEQ7O0lBMkNBLENBQUM7SUF4Q0csc0JBQUksZ0NBQU87YUFBWDtZQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVELHNCQUFDLDJDQUFxQixDQUFDLFNBQVMsQ0FBQyxHQUFqQyxVQUFrQyxLQUFjO1FBQzVDLElBQUksS0FBSyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFVBQVU7aUJBQ1YsdUJBQXVCLEVBQUU7aUJBQ3pCLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsRDtJQUNMLENBQUM7SUFFRCxzQkFBQyxrQ0FBWSxDQUFDLFNBQVMsQ0FBQyxHQUF4QixVQUF5QixLQUFhO1FBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxzQkFBQyxzQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBNUIsVUFBNkIsS0FBYTtRQUN0QyxJQUFJLENBQUMsVUFBVTthQUNWLHVCQUF1QixFQUFFO2FBQ3pCLFdBQVcsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxzQkFBQyx1Q0FBaUIsQ0FBQyxTQUFTLENBQUMsR0FBN0IsVUFBOEIsS0FBYTtRQUN2QyxJQUFJLENBQUMsVUFBVTthQUNWLHVCQUF1QixFQUFFO2FBQ3pCLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVNLHNDQUFnQixHQUF2QjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxZQUFZLENBQzlCLElBQUksQ0FBQyxRQUFRLEVBQ2IsWUFBWSxDQUFDLFVBQVUsQ0FDMUIsQ0FBQztRQUVGLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUMxQixZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FDcEMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBM0NELENBQWlDLHVDQUFpQixHQTJDakQ7QUEzQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIFRleHRKdXN0aWZ5Q29tbW9uLFxuICAgIHRleHRQcm9wZXJ0eSxcbiAgICB0ZXh0QWxpZ25tZW50UHJvcGVydHksXG4gICAgZm9udFNpemVQcm9wZXJ0eSxcbiAgICB0ZXh0Q29sb3JQcm9wZXJ0eVxufSBmcm9tIFwiLi90ZXh0LWp1c3RpZnkuY29tbW9uXCI7XG5cbmRlY2xhcmUgY29uc3QgY29tOiBhbnk7XG5cbmNvbnN0IERvY3VtZW50VmlldyA9IGNvbS5ibHVlamFtZXNib25kLnRleHQuRG9jdW1lbnRWaWV3O1xuY29uc3QgVGV4dEFsaWdubWVudCA9IGNvbS5ibHVlamFtZXNib25kLnRleHQuc3R5bGUuVGV4dEFsaWdubWVudDtcbmNvbnN0IFR5cGVkVmFsdWUgPSBhbmRyb2lkLnV0aWwuVHlwZWRWYWx1ZTtcbmNvbnN0IENvbG9yID0gYW5kcm9pZC5ncmFwaGljcy5Db2xvcjtcblxuZXhwb3J0IGNsYXNzIFRleHRKdXN0aWZ5IGV4dGVuZHMgVGV4dEp1c3RpZnlDb21tb24ge1xuICAgIHB1YmxpYyBuYXRpdmVWaWV3O1xuXG4gICAgZ2V0IGFuZHJvaWQoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmF0aXZlVmlldztcbiAgICB9XG5cbiAgICBbdGV4dEFsaWdubWVudFByb3BlcnR5LnNldE5hdGl2ZV0odmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLm5hdGl2ZVZpZXdcbiAgICAgICAgICAgICAgICAuZ2V0RG9jdW1lbnRMYXlvdXRQYXJhbXMoKVxuICAgICAgICAgICAgICAgIC5zZXRUZXh0QWxpZ25tZW50KFRleHRBbGlnbm1lbnQuSlVTVElGSUVEKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIFt0ZXh0UHJvcGVydHkuc2V0TmF0aXZlXSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmF0aXZlVmlldy5nZXRMYXlvdXQoKS5zZXRUZXh0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBbZm9udFNpemVQcm9wZXJ0eS5zZXROYXRpdmVdKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3XG4gICAgICAgICAgICAuZ2V0RG9jdW1lbnRMYXlvdXRQYXJhbXMoKVxuICAgICAgICAgICAgLnNldFRleHRTaXplKFR5cGVkVmFsdWUuQ09NUExFWF9VTklUX1NQLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgW3RleHRDb2xvclByb3BlcnR5LnNldE5hdGl2ZV0odmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hdGl2ZVZpZXdcbiAgICAgICAgICAgIC5nZXREb2N1bWVudExheW91dFBhcmFtcygpXG4gICAgICAgICAgICAuc2V0VGV4dENvbG9yKENvbG9yLnBhcnNlQ29sb3IodmFsdWUpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlTmF0aXZlVmlldygpIHtcbiAgICAgICAgdGhpcy5uYXRpdmVWaWV3ID0gbmV3IERvY3VtZW50VmlldyhcbiAgICAgICAgICAgIHRoaXMuX2NvbnRleHQsXG4gICAgICAgICAgICBEb2N1bWVudFZpZXcuUExBSU5fVEVYVFxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMubmF0aXZlVmlldy5zZXRDYWNoZUNvbmZpZyhcbiAgICAgICAgICAgIERvY3VtZW50Vmlldy5DYWNoZUNvbmZpZy5OT19DQUNIRVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiB0aGlzLm5hdGl2ZVZpZXc7XG4gICAgfVxufVxuIl19