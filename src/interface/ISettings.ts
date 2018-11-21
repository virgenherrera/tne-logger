import * as Transport from 'winston-transport';
import { IFileSettings } from './IFileSettings';
import { Format } from 'logform';

export interface ISettings {
	format?: Format;
	level?: string;
	fileCfg?: IFileSettings;
	customTransports?: Transport[];
}
