import { expect, should } from 'chai';
import { TneLogger } from '../../src/';
import { primitiveValues, complexValues } from '../fixtures/values';
import { customTransport } from '../fixtures/customTransport';
import { loggerKeys, settingsKeys, loggerMethods } from '../fixtures/loggerProps';
import { customFormat } from '../fixtures/customLogFormat';

should();
describe('@tne/logger  basic test', () => {
	it('should create a console logger', () => {
		const logger = new TneLogger;

		expect(logger).to.be.an('object')
			.that.has.keys(loggerKeys);

		expect(logger).to.have.property('logsPath');

		expect(logger.settings).to.be.an('object')
			.that.has.keys(settingsKeys);

		expect(logger.settings.levels).to.be.an('object');
		expect(logger.settings.fileCfg).to.be.equal(null);
		expect(logger.settings.transports).to.be.an('array');
	});

	it('should log primitive values', () => {
		const logger = new TneLogger;

		expect(logger).to.be.an('object');
		loggerMethods.forEach(method => {
			primitiveValues.forEach(val => {
				expect(() => logger[method](val)).to.not.throw();
			});
		});
	});

	it('should log non-primitive values', () => {
		const logger = new TneLogger;

		expect(logger).to.be.an('object');
		loggerMethods.forEach(method => {
			complexValues.forEach(val => {
				expect(() => logger[method](val)).to.not.throw();
			});
		});
	});

	it('should log when log methods are destructed', () => {
		const {
			emerg,
			alert,
			crit,
			error,
			warning,
			notice,
			info,
			debug,
		} = new TneLogger;

		expect(emerg).to.be.a('function');
		expect(alert).to.be.a('function');
		expect(crit).to.be.a('function');
		expect(error).to.be.a('function');
		expect(warning).to.be.a('function');
		expect(notice).to.be.a('function');
		expect(info).to.be.a('function');
		expect(debug).to.be.a('function');

		[...primitiveValues, ...complexValues].forEach(val => {
			expect(() => emerg(val)).to.not.throw();
			expect(() => alert(val)).to.not.throw();
			expect(() => crit(val)).to.not.throw();
			expect(() => error(val)).to.not.throw();
			expect(() => warning(val)).to.not.throw();
			expect(() => notice(val)).to.not.throw();
			expect(() => info(val)).to.not.throw();
			expect(() => debug(val)).to.not.throw();
		});
	});

	it('should create a logger an append a custom Transport', () => {
		const logger = new TneLogger(customTransport);

		expect(logger).to.be.an('object')
			.that.has.keys(loggerKeys);

		expect(logger).to.have.property('logsPath');

		expect(logger.settings).to.be.an('object')
			.that.has.keys(settingsKeys);

		expect(logger.settings.levels).to.be.an('object');
		expect(logger.settings.fileCfg).to.be.equal(null);
		expect(logger.settings.transports).to.be.an('array');

		loggerMethods.forEach(method => {
			[...primitiveValues, ...complexValues].forEach(val => {
				expect(() => logger[method](val)).to.not.throw();
			});
		});
	});

	it('should create a logger an append a custom logFormat', () => {
		const logger = new TneLogger(customFormat);

		expect(logger).to.be.an('object')
			.that.has.keys(loggerKeys);

		expect(logger).to.have.property('logsPath');

		expect(logger.settings).to.be.an('object')
			.that.has.keys(settingsKeys);

		expect(logger.settings.levels).to.be.an('object');
		expect(logger.settings.fileCfg).to.be.equal(null);
		expect(logger.settings.transports).to.be.an('array');

		loggerMethods.forEach(method => {
			[...primitiveValues, ...complexValues].forEach(val => {
				expect(() => logger[method](val)).to.not.throw();
			});
		});
	});
});
