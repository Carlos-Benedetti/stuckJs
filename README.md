# stukJs- Simplified two-way data bind for JS

[![NPM](https://nodei.co/npm/stukjs.png)](https://nodei.co/npm/stukjs/)

## Installation
### npm:
```shell
$ npm i stukjs --save
```
### browser:
```html
<script src="https://unpkg.com/stukjs@latest/Stuk.js"></script>
```

## Usage

Pass an object containing all the variables that will be used by the page to `stuk.bindpage()`, and then add the `stuk` attribute to elements that should bind to a variable. The value passed to the `stuk` attribute should be an existing key in the object passed to `stuk.bindpage()`.
Changes to the bound variable's value will be reflected in the page, and changes made to the bound element's value will also propagate back to the script.

## Example

```html
<input stuk="name">
<script>
    Stuk.bindPage({name:"Benedetti"});
</script>
```

### Notes

this code was based on: [wintellect](https://www.wintellect.com/data-binding-pure-javascript/).