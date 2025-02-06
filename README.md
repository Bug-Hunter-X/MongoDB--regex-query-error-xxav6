# MongoDB $regex Query Error

This repository demonstrates a common error when using regular expressions with MongoDB's `$regex` operator.  Incorrect usage can result in queries returning unexpected or incorrect results. 

The `bug.js` file shows an example of incorrect usage. The `bugSolution.js` file provides the correct implementation.

## Bug Description
The incorrect use of the `$regex` operator doesn't properly match documents. This may return no documents or an unexpected set of documents.

## Solution
The correct method involves using the `$regex` operator within a field's specification, correctly defining the regular expression pattern and modifiers.