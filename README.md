# `[BETA]` stukJs- Simplified two way data bind for JS

[![NPM](https://nodei.co/npm/stukjs.png)](https://nodei.co/npm/stukjs/)

## Instalation

`$ npm i stukjs --save`.

## Using

as most ts/js frameworks Nowadays for each page you have a main object containing all the page variables
in this pluging you can easily bind a variable's value with one or multiple html elements just addind the `stuk` attribute as your variable's name as value.

## Exemple

```html
<input stuk="name"> 
<script>
    stuk.bindPage({name:"Benedetti"})
</script>
```

### Notes

Basecode source: [wintellect](https://www.wintellect.com/data-binding-pure-javascript/).