const { readFileSync, writeFileSync } = require('fs')

writeFileSync('./temporary/fileA.txt', `First line\n`)
writeFileSync('./temporary/fileA.txt', `Second line\n`, {flag: 'a'})
writeFileSync('./temporary/fileA.txt', `Third line\n`, {flag: 'a'})

console.log(readFileSync('./temporary/fileA.txt', 'utf8'))