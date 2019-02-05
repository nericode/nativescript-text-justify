import { ContentView, Property } from "tns-core-modules/ui/content-view";
export declare class TextJustifyCommon extends ContentView {
    android: any;
    ios: any;
    text: string;
    textAlignment: boolean;
    textSize: number;
    textColor: string;
}
export declare const textAlignmentProperty: Property<TextJustifyCommon, string>;
export declare const textProperty: Property<TextJustifyCommon, string>;
export declare const fontSizeProperty: Property<TextJustifyCommon, number>;
export declare const textColorProperty: Property<TextJustifyCommon, string>;
