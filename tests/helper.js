import * as sh from 'shelljs';

const opts = {
    maxBuffer: 10240 * 10240,
    silent: false
};

export const actCmd = (jobName) => {
    console.log(`Running Command: act -j ${jobName} -P ubuntu-latest=ghcr.io/catthehacker/ubuntu:act-latest`);
    const exec = sh.exec(`act -j ${jobName} -P ubuntu-latest=ghcr.io/catthehacker/ubuntu:act-latest`, opts);
    if (exec.code !== 0) {
        console.error('WARNING');
        console.error(`Non-zero exit code. Code was ${exec.code}`);
        console.error('WARNING');
    }
    return exec.stdout;
}