const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
    try {
        await writeFile('./temp.txt', `First line\n`);
        await writeFile('./temp.txt', `Second line\n`, { flag: 'a' });
        await writeFile('./temp.txt', `Third line\n`, { flag: 'a' });
    }
    catch (error) {
        console.error('Error writing file:', error);
    }
};

const reader = async () => {
    try {
        const data = await readFile('./temp.txt', 'utf8');
        console.log('Reader result:', data);
    }
    catch (error) {
        console.error('Error writing file:', error);
    }
};

const readWrite = async () => {
    await reader();
    await writer();
};

readWrite();