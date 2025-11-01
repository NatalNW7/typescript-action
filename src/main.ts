import { motivationalMessage } from './MotivationalAPI';
import * as core from '@actions/core';

async function run() {
    const message = await motivationalMessage();
    console.log(message);
    core.setOutput('quote', message);
}

run();