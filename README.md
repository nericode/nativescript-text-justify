# Text Justify

## Installation

Ideally it would be something like:

```javascript
tns plugin add nativescript-text-justify
```

## Usage

### Only Android

To establish a font type, it is necessary to create a directory `assets > fonts` with the fonts to be used:
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

| Property (Android) | Default                  | Description                                   |
| ------------------ | ------------------------ | --------------------------------------------- |
| text               | text: string             | Set the text                                  |
| alignment          | alignment: boolean       | Set true for justified or false               |
| textSize           | textSize: number         | Set textSize 1 and <= 23                      |
| textColor          | textColor: string        | Set textColor #RRGGBB 'white', 'black', etc.. |
| textTypefacePath   | textTypefacePath: string | Set textTypefacePath example: roboto.ttf      |

| Property (iOS) | Default            | Description                                   |
| -------------- | ------------------ | --------------------------------------------- |
| text           | text: string       | Set the text                                  |
| alignment      | alignment: boolean | Set true for justified or false               |
| color          | color: string      | Set textColor #RRGGBB 'white', 'black', etc.. |
| textWrap       | textWrap: boolean  | Property of Label                             |
| fontSize       | fontSize: number   | Property of Label                             |

## License

Apache License Version 2.0, January 2004
