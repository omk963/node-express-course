const { createReadStream } = require('fs')

const stream = createReadStream('../content/big.txt', {
    encoding: 'utf8',
    highWaterMark: 200 // max amount of bytes that node will read with each chunk of the stream
})

stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => console.log(err))