import * as Transport from 'winston-transport';
import { join } from 'path';

class CustomTransport extends Transport {
	constructor(opts = {}) {
		super(opts);
	}

	log(info, callback) {
		setImmediate(() => {
			this.emit('logged', info);
		});

		callback();
	}
}

export const logsPath = join(__dirname, './logs');
export const fileConfig = { logsPath: logsPath };
export const customTransport = { customTransports: [new CustomTransport] };
export const customTransportWithFileConf = { fileConfig, customTransports: [new CustomTransport] };
