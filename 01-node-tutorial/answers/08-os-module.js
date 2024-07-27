const os = require("os");

const user = os.userInfo()
console.log(user)

const currentOS = {
  name: os.type(),
  version: os.version(),
  platform: os.platform(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)