// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, add details, press enter to skip)
// npm init -y (adds package.json with default values)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems)
