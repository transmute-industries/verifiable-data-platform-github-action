const core = require("@actions/core");

const getOpts = require("./getOpts");
const operationSwitch = require("./operationSwitch");

async function run() {
  try {
    const opts = getOpts();
    await operationSwitch(opts);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
