# Visualizer for Graph Search Algorithms

### Under Construction

The purpose of this repository is to create a generic visualizer for real-time graph search algorithms (A* or other).

### Thrift

There is no automated build yet. Included in this repo is the 0.11.0 Windows executable.

```
cd thrift_compiler
win-thrift.exe -gen js -gen js:node visualizer.thrift
```

Then, copy the `gen-js` directory to `/public/js/thrift`.

*Then* modify the files to export all structs and services. (This repo uses ES6 modules, but Thrift codegen apparently does not... and doesn't even "use strict")