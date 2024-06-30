const { writeFile, readFile } = require("fs").promises;

writeFile('./temp.txt', 'write line 1\n', { flag: 'a' })
    .then(() => {
        return writeFile('./temp.txt', 'write line 2\n', { flag: 'a' })
    })
    .then(() => {
        return writeFile('./temp.txt', 'write line 3\n', { flag: 'a' })
    })
    .then(() => {
        return readFile('./temp.txt', 'utf8')
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log("An error occurred: ", error)
    })  