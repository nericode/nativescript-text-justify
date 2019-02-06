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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1qdXN0aWZ5LmNvbW1vbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRleHQtanVzdGlmeS5jb21tb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRUFHMEM7QUFFMUM7SUFBdUMscUNBQVc7SUFBbEQ7O0lBOEJBLENBQUM7SUFBRCx3QkFBQztBQUFELENBQUMsQUE5QkQsQ0FBdUMsMEJBQVcsR0E4QmpEO0FBOUJZLDhDQUFpQjtBQWdDakIsUUFBQSxxQkFBcUIsR0FBRyxJQUFJLHVCQUFRLENBRy9DO0lBQ0UsSUFBSSxFQUFFLGVBQWU7SUFDckIsY0FBYyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxFQUFMLENBQUs7Q0FDakMsQ0FBQyxDQUFDO0FBQ0gsNkJBQXFCLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFckMsUUFBQSxZQUFZLEdBQUcsSUFBSSx1QkFBUSxDQUE0QjtJQUNoRSxJQUFJLEVBQUUsTUFBTTtJQUNaLGNBQWMsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssRUFBTCxDQUFLO0NBQ2pDLENBQUMsQ0FBQztBQUNILG9CQUFZLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFFNUIsUUFBQSxnQkFBZ0IsR0FBRyxJQUFJLHVCQUFRLENBRzFDO0lBQ0UsSUFBSSxFQUFFLFVBQVU7SUFDaEIsY0FBYyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEVBQU4sQ0FBTTtDQUNsQyxDQUFDLENBQUM7QUFDSCx3QkFBZ0IsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUVoQyxRQUFBLGlCQUFpQixHQUFHLElBQUksdUJBQVEsQ0FHM0M7SUFDRSxJQUFJLEVBQUUsV0FBVztJQUNqQixjQUFjLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEVBQUwsQ0FBSztDQUNqQyxDQUFDLENBQUM7QUFDSCx5QkFBaUIsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29udGVudFZpZXcsXG4gICAgUHJvcGVydHlcbn0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvY29udGVudC12aWV3XCI7XG5cbmV4cG9ydCBjbGFzcyBUZXh0SnVzdGlmeUNvbW1vbiBleHRlbmRzIENvbnRlbnRWaWV3IHtcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBuYXRpdmUgW2FuZHJvaWQgd2lkZ2V0XShodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9yZWZlcmVuY2UvYW5kcm9pZC9zdXBwb3J0L3Y3L3dpZGdldC9DYXJkVmlldy5odG1sKSB0aGF0IHJlcHJlc2VudHMgdGhlIHVzZXIgaW50ZXJmYWNlIGZvciB0aGlzIGNvbXBvbmVudC4gVmFsaWQgb25seSB3aGVuIHJ1bm5pbmcgb24gQW5kcm9pZCBPUy5cbiAgICAgKi9cbiAgICBhbmRyb2lkOiBhbnkgLyogY29tLmJsdWVqYW1lc2JvbmQudGV4dC5Eb2N1bWVudFZpZXcgKi87XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBuYXRpdmUgW2lvcyB3aWRnZXRdKFVJVmlldykgdGhhdCByZXByZXNlbnRzIHRoZSB1c2VyIGludGVyZmFjZSBmb3IgdGhpcyBjb21wb25lbnQuIFZhbGlkIG9ubHkgd2hlbiBydW5uaW5nIG9uIGlPUy5cbiAgICAgKi9cbiAgICBpb3M6IGFueSAvKiBVSVZpZXcgKi87XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldCB0aGUgdGV4dCBvZiB0aGUgRG9jdW1lbnRWaWV3LlxuICAgICAqL1xuICAgIHRleHQ6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0IHRoZSB0ZXh0IGFsaWdubWVudCBvZiB0aGUgRG9jdW1lbnRWaWV3LlxuICAgICAqL1xuICAgIHRleHRBbGlnbm1lbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldCB0aGUgdGV4dCBmb250IHNpemUgb2YgdGhlIERvY3VtZW50Vmlldy5cbiAgICAgKi9cbiAgICB0ZXh0U2l6ZTogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyBvciBzZXQgdGhlIGNvbG9yIGZvbnQgc2l6ZSBvZiB0aGUgRG9jdW1lbnRWaWV3LlxuICAgICAqL1xuICAgIHRleHRDb2xvcjogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgdGV4dEFsaWdubWVudFByb3BlcnR5ID0gbmV3IFByb3BlcnR5PFxuICAgIFRleHRKdXN0aWZ5Q29tbW9uLFxuICAgIHN0cmluZ1xuPih7XG4gICAgbmFtZTogXCJ0ZXh0QWxpZ25tZW50XCIsXG4gICAgdmFsdWVDb252ZXJ0ZXI6IHZhbHVlID0+IHZhbHVlXG59KTtcbnRleHRBbGlnbm1lbnRQcm9wZXJ0eS5yZWdpc3RlcihUZXh0SnVzdGlmeUNvbW1vbik7XG5cbmV4cG9ydCBjb25zdCB0ZXh0UHJvcGVydHkgPSBuZXcgUHJvcGVydHk8VGV4dEp1c3RpZnlDb21tb24sIHN0cmluZz4oe1xuICAgIG5hbWU6IFwidGV4dFwiLFxuICAgIHZhbHVlQ29udmVydGVyOiB2YWx1ZSA9PiB2YWx1ZVxufSk7XG50ZXh0UHJvcGVydHkucmVnaXN0ZXIoVGV4dEp1c3RpZnlDb21tb24pO1xuXG5leHBvcnQgY29uc3QgZm9udFNpemVQcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eTxcbiAgICBUZXh0SnVzdGlmeUNvbW1vbixcbiAgICBudW1iZXJcbj4oe1xuICAgIG5hbWU6IFwidGV4dFNpemVcIixcbiAgICB2YWx1ZUNvbnZlcnRlcjogdmFsdWUgPT4gK3ZhbHVlXG59KTtcbmZvbnRTaXplUHJvcGVydHkucmVnaXN0ZXIoVGV4dEp1c3RpZnlDb21tb24pO1xuXG5leHBvcnQgY29uc3QgdGV4dENvbG9yUHJvcGVydHkgPSBuZXcgUHJvcGVydHk8XG4gICAgVGV4dEp1c3RpZnlDb21tb24sXG4gICAgc3RyaW5nXG4+KHtcbiAgICBuYW1lOiBcInRleHRDb2xvclwiLFxuICAgIHZhbHVlQ29udmVydGVyOiB2YWx1ZSA9PiB2YWx1ZVxufSk7XG50ZXh0Q29sb3JQcm9wZXJ0eS5yZWdpc3RlcihUZXh0SnVzdGlmeUNvbW1vbik7XG4iXX0=