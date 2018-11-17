# @tne/logger
A basic logger for __Node.js__ applications, completely written with __typescript__, is not only the basic logger for the entire `@tne` platform, since being completely decoupled from tne is free to use for any other application __Node.js__

<a name="main_menu"></a>
## Menu
### [Installation](#installation)
### [@tne/logger](#tne_logger)
### [interfaces](#app_interfaces)
- [ISettings](#i_settings)
- [IFileSettings](#i_file_settings)


---
<a name="installation"></a>
[Back to Menu](#main_menu)
## Installation
You can install through the node package managers:

### NPM
```
$ npm i -S @tne/logger
```

### Yarn
```
$ yarn add @tne/logger
```

---
<a name="tne_logger"></a>
[Back to Menu](#main_menu)
## @tne/logger
`@tne/logger` is the main library which is responsible for making 'winston' coverage and standardizing the use for @tne.
[@tne/logger](#tne_logger)

### Example basic usage
just create an instance without providing arguments
```
import { TneLogger } from '@tne/logger';

// create a simple console logger
const logger = new TneLogger;

logger.info('hello!')	// outputs-> [timestamp] info: hello!
logger.info('message 1537574380254');	// outputs -> [timestamp] info: message 1537574380254
logger.warn('message 1537574380254');	// outputs -> [timestamp] warn: message 1537574380254
logger.error('message 1537574380254');	// outputs -> [timestamp] error: message 1537574380254
```

### Example usage with file logger
provide a config object that implements the [ISettings](#i_settings) interface
```
import { TneLogger } from '@tne/logger';

// ISettings
const config = {
	fileCfg: {
		logsPath: process.pwd() + '/logs',
		logFile: 'someFileName',
	}
};


// create a console logger with file persistence
const logger = new TneLogger(config);

logger.info('hello!')	// outputs-> [timestamp] info: hello!
logger.info('message 1537574380254');	// outputs -> [timestamp] info: message 1537574380254
logger.warn('message 1537574380254');	// outputs -> [timestamp] warn: message 1537574380254
logger.error('message 1537574380254');	// outputs -> [timestamp] error: message 1537574380254
```
The above code will also dump logs to a several logs files placed on path specified by `logsPath` argument.

---
<a name="app_interfaces"></a>
[Back to Menu](#main_menu)
### Interfaces
The interfaces that this library provides and that are described here provide help to the developer that will consume this library to build incredible web applications.

#### Constraints
The interfaces mentioned in this section will be importable only if you are developing your web application with `typescript`.

---
<a name="i_settings"></a>
[Back to Menu](#main_menu)
### ISettings
Used as a constructor argument for `TneLogger` class.

#### Parameters
|Param|Type|Required?|Description|
|-|-|-|-|
| level | string | false | [winston logging level](https://github.com/winstonjs/winston#logging-levels) |
| fileCfg | IFileSettings| false | [IFileSettings](#i_file_settings) object |
| customTransports | Transport[] | false | A custom [`winston-transport`](https://github.com/winstonjs/winston-transport) Array.|

---
<a name="i_settings"></a>
[IFileSettings](#i_file_settings)
[Back to Menu](#main_menu)
### IFileSettings
Used as a nested config on constructor argument for `TneLogger` class.

When you provide this config object a log file will be created per day.

#### Parameters
|Param|Type|Required?|Description|
|-|-|-|-|
| logsPath | string | true | valid path where `TneLogger` will create the log files. |
| logFile | string | false | filename for the further log files `default: 'log.log'` |
| datePattern | string | false | data pattern for the further log files `default: 'YYYMMDD'` |

[Back to Menu](#main_menu)
