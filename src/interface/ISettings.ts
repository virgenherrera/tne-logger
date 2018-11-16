import * as Transport from 'winston-transport';
import { IFileSettings } from './IFileSettings';

export interface ISettings {
	level?: string;
	fileCfg?: IFileSettings;
	customTransports?: Transport[];
}
