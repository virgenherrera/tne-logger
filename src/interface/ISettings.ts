import * as Transport from 'winston-transport';
import { IFileSettings } from './IFileSettings';
import { Format } from 'logform';

export interface ILoggerOpts {
	format?: Format;
	fileCfg?: IFileSettings;
	customTransports?: Transport[];
}
