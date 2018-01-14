# hhmmss-util

## Installation

```
npm install --save hhmmss-util
```

## Usage

```
//Basic usage, prints string as h:mm:ss
var hhmmss = require("hhmmss-util");
hhmmss(3601); //outputs 1:00:01

//Use milliseconds instead of seconds
hhmmss(3601000, {milliseconds:true}); //outputs 1:00:01

//Output an array containing hh mm ss digits
hhmmss(3601000, {type:"array", zeropad:false}); //outputs [1,0,1];
```
