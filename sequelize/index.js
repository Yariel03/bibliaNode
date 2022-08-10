const { CRUD } = require("./helpers");
const db = require("./models");
const params = process.argv;
console.log(params);

if (params.length <= 2) {
  process.exit(0);
}

const args = params.slice(2);

const command = args[0].split("-")[0].substring(2);
const entity = args[0].split("-")[1].substring(2);

switch (command) {
  case CRUD.CREATE:
    console.log("create");
    break;
  case CRUD.UPDATE:
    console.log("update");
    break;
  case CRUD.DELETE:
    console.log("delete");
    break;
  case CRUD.READ:
    console.log("read");
    break;
  default:
    console.log("command not found");
    break;
}
