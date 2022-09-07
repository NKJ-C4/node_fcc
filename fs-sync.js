const { readFileSync, writeFileSync } = require('fs')
console.log('start') // just to test the synchronous behaviour
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} // Appends into the file, doesn't overwrite the content
)

console.log('done with the task') // just to test the synchronous behaviour
console.log('starting with the next one...') // just to test the synchronous behaviour