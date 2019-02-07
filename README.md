# Text Justify

## Installation

Ideally it would be something like:

```javascript
tns plugin add nativescript-text-justify
```

## Usage

To establish a font type, it is necessary to create a font with the fonts to be used:

Directory:

`App_Resources > Android > src > main > <create paths> assets > fonts > <name>.ttf`

Show demo for more info.

```xml
<Page
    xmlns="http://schemas.nativescript.org/tns.xsd"
    xmlns:textJustify="nativescript-text-justify"
    loaded="pageLoaded">
    <StackLayout>
        <textJustify:TextJustify
            textColor="black"
            textSize="22"
            textAlignment="true"
            textTypefacePath="robotoitalic.ttf"
            text="This text is for test, This text is for test, This text is for test, This text is for test.">
        </textJustify:TextJustify>
    </StackLayout>
</Page>
```

## Angular

Add element in `app.module.ts`:

```ts
import { registerElement } from "nativescript-angular/element-registry";
import { TextJustify } from "nativescript-text-justify";

registerElement("TextJustify", () => TextJustify);
```

In .html:

```html
<TextJustify
    textColor="black"
    textSize="22"
    textAlignment="true"
    textTypefacePath="robotoitalic.ttf"
    text="This text is for test, This text is for test, This text is for test, This text is for test."
>
</TextJustify>
```

## API

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.

| Property         | Default                  | Description                                   |
| ---------------- | ------------------------ | --------------------------------------------- |
| text             | text: string             | Set the text                                  |
| textAlignment    | textAlignment: boolean   | Set true for justified or false               |
| textSize         | textSize: number         | Set textSize 1 and <= 23                      |
| textColor        | textColor: string        | Set textColor #RRGGBB 'white', 'black', etc.. |
| textTypefacePath | textTypefacePath: string | Set textTypefacePath example: roboto.ttf      |

## License

Apache License Version 2.0, January 2004
