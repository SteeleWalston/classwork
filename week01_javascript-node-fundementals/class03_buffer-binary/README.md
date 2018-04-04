# Class 03 Buffer and Binary Data

## Questions and Feedback
* ?

## Learning Objectives

* Explain what binary data means
* Ditto Hex
* Read, write, and manipulate encoded binary data using the Buffer class
* Continue focusing on library design...

## JavaScript numbers
* Binary: `0b01001101`
* Hex: `0x4D`

## Binary Data and Buffer

### Binary Data
* What is meaning?
* Bits, Bytes, Words, DWords
* BE LE "Endianness" byte order
* signed/unsigned
* "encoding"
* "serialization"/"deserialization"

### Meet `Buffer`
* Data managed outside of JavaScript
* Binary representation
* Stored in Heap memory
* Buffers access this memory
* I/O methods
* Beware of the number constructor
* Binary Data

### Hexidecimal and Tools
* Lots of free editors - `iHex`
* What is Hexidecimal?
* Why does it fit well with binary?

## Reading and writing a file

* Sychronous read and write

## Publish to npm

* Create an npm account
* `npm adduser` (or `npm login`)
* package name (kebob-case)
* version (1.0.0)
* `main`