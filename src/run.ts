import * as core from '@actions/core';
import getOpts from './getOpts';
import operationSwitch from './operationSwitch';

async function run() {
  try {
    const opts = getOpts();
    await operationSwitch(opts);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
