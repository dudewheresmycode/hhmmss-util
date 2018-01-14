# hhmmss-util

## Installation

```
npm install --save hhmmss-util
```

## Usage

```
var hhmmss = require("hhmmss-util");


//Basic usage, prints string as h:mm:ss
hhmmss(3601); //outputs 1:00:01
hhmmss(260); //outputs 04:20

//Use milliseconds instead of seconds
hhmmss(3601000, {milliseconds:true}); //outputs 1:00:01

//Output an array containing hh mm ss digits
hhmmss(3601, {type:"array"}); //outputs [1,0,1];
```
