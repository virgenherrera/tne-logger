import { expect, should } from 'chai';
import { TneLogger } from '../../src/tneLogger';

should();
describe('@tne/logger  basic test', () => {
	it('should create a functional console logger', () => {
		const logger = new TneLogger;

		expect(logger).to.be.an('object');
		expect(logger).to.have.property('settings');
		expect(logger).to.have.property('logger');
		expect(logger).to.have.property('error');
		expect(logger).to.have.property('warn');
		expect(logger).to.have.property('info');

		expect(logger.settings).to.be.an('object').that.has.keys('fileConfig', 'customTransports');
		expect(logger.settings.fileConfig).to.be.equal(null);
		expect(logger.settings.customTransports).to.be.eql([]);
	});

	it('should log primitive values', (done) => {
		const logger = new TneLogger;

		expect(logger).to.be.an('object');
		expect(logger).to.have.property('settings');
		expect(logger).to.have.property('logger');
		expect(logger).to.have.property('error');
		expect(logger).to.have.property('warn');
		expect(logger).to.have.property('info');

		try {
			logger.info(1);
			logger.warn(true);
			logger.error('true');

			done();
		} catch (E) {
			done(E);
		}
	});

	it('should log non-primitive values', (done) => {
		const logger = new TneLogger;

		expect(logger).to.be.an('object');
		expect(logger).to.have.property('settings');
		expect(logger).to.have.property('logger');
		expect(logger).to.have.property('error');
		expect(logger).to.have.property('warn');
		expect(logger).to.have.property('info');

		try {
			logger.info([0, 1, 2, 3, 4, 5]);
			logger.warn(new RegExp('string'));
			logger.error(new Date);
			logger.info(Array(6));

			done();
		} catch (E) {
			done(E);
		}
	});
});


