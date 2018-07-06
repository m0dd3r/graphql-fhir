/**
 * @name VERSION
 * @summary Versions constants. These are the versions we support
 */
const VERSION = {
	// DSTU2: 'dstu2',
	'3_0_1': '3_0_1',
	// R4: 'r4'
};

/**
 * @name DATE_CONFIG
 * @summary Date configurations.
 */
const DATE_CONFIG = {
	timezone: 'America/New_York',
	date_format: 'YYYY-MM-DD',
	time_format: 'HH:mm:ss',
	datetime_format: 'YYYY-MM-DDTHH:mm:ss.SSSSZ'
};

/**
 * @name SERVER_CONFIG
 * @summary Server configurations.
 */
const SERVER_CONFIG = {
	// Default version of FHIR, needed to know which version of OperationOutcome to
	// use for 404 errors if a valid version is not present
	defaultVersion: '3_0_1',
	// defaut port for the app
	port: 3000,
	// Logger configurations
	logging: {
		level: 'debug'
	}
};

/**
 * @name RESOURCE_CONFIG
 * @summary Resource configurations.
 */
const RESOURCE_CONFIG = {
	// base folder for all the resources relative to src
	resource_base: 'resources',
	// Path is relative to version folder under resources
	profiles_relative_path: 'profiles/**/index.js'
};

module.exports = {
	RESOURCE_CONFIG,
	SERVER_CONFIG,
	DATE_CONFIG,
	VERSION
};