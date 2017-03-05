# CoderDojo Workshop Core

A basic workshop package that converts Markdown to PDF using CoderDojo Rotterdam (SF) theming.

## Install
- Create a new folder that'll hold your manual
- `cd` into your folder and run `npm init -y` to initialize a new node project
- Pull in this core dependency by running:
  `npm install coderdojorotterdam-workshop-core --save`

## Config
In your `package.json` you can override the input and output files by adding this segment to it:

```json
  "coderdojo_workshop_options": {
    "file_in": "love2d_lua_installatie.md",
    "file_out": "love2d_lua_installatie.pdf"
  }
```

## Run
To run the converter, easiest thing is to link to the `.bin/core` in the package.json start script like so:

```json
  "scripts": {
    "start": "./node_modules/.bin/core"
  }
```

Run `npm start` to start the conversion.

## Examples
To get a general idea on how to use this, have a look at some examples:
- [Installing Love2D, Lua & Atom](https://github.com/CoderDojoRotterdam/installing-love2d)
- [Building Pong using Love2D and Lua](https://github.com/CoderDojoRotterdam/love2d-pong)

## Components
All markdown tags are supported as well as custom styling using HTML / CSS. For available CSS classes have a look in our [CSS file](main.css).

## License
[MIT](LICENSE)