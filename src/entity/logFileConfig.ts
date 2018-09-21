import { join } from "path";
import { mkdir as shelljsMkdir } from 'shelljs';
import { ILogFileConfig } from "../interfaces";
import { pathExists } from "../lib/fileHandle";
import { DEFAULT_FILENAME } from "../constant/defaults";

export class LogFileConfig implements ILogFileConfig {
	logsPath: string;
	baseFileName: string;
	logFilePath: string;

	// Create logsPath if not exists
	constructor(args: ILogFileConfig) {
		if (!pathExists(args.logsPath)) {
			shelljsMkdir('-p', args.logsPath);
		}

		this.logsPath = args.logsPath;
		this.baseFileName = (args.baseFileName) ? `${args.baseFileName}.log` : DEFAULT_FILENAME;
		this.logFilePath = join(this.logFilePath, this.baseFileName);
	}
}
