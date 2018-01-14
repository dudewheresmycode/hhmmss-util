# hhmmss-util

## Installation

```bash
npm install --save hhmmss-util
```

## Basic Usage
### hhmmss(seconds, [options])
```js
var hhmmss = require("hhmmss-util");


//Basic usage, default outputs seconds as h:mm:ss
console.log(hhmmss(3601)); //outputs: 1:00:01
console.log(hhmmss(260)); //outputs: 04:20

```

## Options

### milliseconds
Duration is in milliseconds.

```js
//Use milliseconds instead of seconds
hhmmss(3601000, {milliseconds:true}); //outputs 1:00:01
```

### type
The type of data to return. Default is a h:mm:ss string.

| Option | Description |
|---|---|
| `string` | (default) Will return an string in hh:mm:ss format. |
| `array` | Will return an array containing [h, m, s]. |

```js
//Output an array containing hh mm ss digits
hhmmss(260); //outputs 04:20
hhmmss(260, {type:"array"}); //outputs [4,20]
```


### precision
The precision of the seconds field. Default is to round to nearest integer.
```js
//Output an array containing hh mm ss digits
hhmmss(260.215, {precision:2}); //outputs 04:20.22
```


### zeropad
Enable or disable zero padding. Default is true;
```js
//Output an array containing hh mm ss digits
hhmmss(260, {zeropad:false}); //outputs 4:20
```
