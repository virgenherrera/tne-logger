import { sync as rimrafSync } from 'rimraf';
import { readdirSync, unlinkSync } from 'fs';
import { join } from 'path';

// rimraf || unlinkSync not working on windows :/
// https://github.com/nodejs/node-v0.x-archive/issues/3051
export function dropLogs(logsPath: string) {
	return (process.platform === 'win32')
		? readdirSync(logsPath).forEach(file => unlinkSync(join(logsPath, file)))
		: rimrafSync(logsPath);
}
