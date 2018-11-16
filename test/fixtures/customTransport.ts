import { Transport } from '../../src';

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

export const customTransport: any = { customTransports: [new CustomTransport] };
