var TextJustify = require("nativescript-text-justify").TextJustify;
var textJustify = new TextJustify();

describe("greet function", function() {
    it("exists", function() {
        expect(textJustify.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(textJustify.greet()).toEqual("Hello, NS");
    });
});