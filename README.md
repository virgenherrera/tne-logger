# @tne/logger
A basic logger for __Node.js__ applications, completely written with __typescript__, is not only the basic logger for the entire `@tne` platform, since being completely decoupled from tne is free to use for any other application __Node.js__

<a name="main_menu"></a>
## Menu
- [Installation](#installation)
- [Constructor Args](#constructor_args)
- [Constructor/simple](#constructor_simple)
- [Constructor/file](#constructor_file)
- [Constructor/transports](#constructor_transports)

<a name="installation"></a>
## Installation
`npm i -S @tne/logger`

<a name="constructor_args"></a>
## Constructor Arguments
|Param|Type|Required?|Description|
|-|-|-|-|
|fileConfig|ILogFileConfig|false|an ILogFileConfig config object.|
|customTransports|Transport[]|false|A custom [`winston-transport`](https://github.com/winstonjs/winston-transport) Array.|

### Type ILogFileConfig
|Param|Type|Required?|Description|
|-|-|-|-|
|logsPath|string|true|The path (existing or to be created) where the log file will be created/updated.|
|baseFileName|string|false|The name of the log file itself.|

[Back to Menu](#main_menu)

<a name="constructor_simple"></a>
## @tne/logger basic implementation
Implement a basic console logger with `@tne/logger` Is as simple as requiring the library and creating an instance.
```
import { TneLogger } from '@tne/logger';

const logger = new TneLogger;
```

This gives you the methods: __"info, warn__ and __error"__ through which you can visualize your logs in the console.

### Example Config

```
import { TneLogger } from '@tne/logger';

const logger = new TneLogger;

logger.info('info message 1537574380254');
logger.warn('warn message 1537574380254');
logger.error('error message 1537574380254');
```

The above code will have an output to console as follows:

```
info:   info message 1537574380254
warn:   warn message 1537574380254
error:  error message 1537574380254
```

[Back to Menu](#main_menu)


<a name="constructor_file"></a>
## @tne/logger file Implementation
In order to create a implementation of `@tne/logger` with console and file outputs, you must to send the logs path in the param `fileConfig` during the instantiation of `@tne/logger`.

### Example Config
```
import { join } from 'path';
import { TneLogger } from '@tne/logger';

const tneConfig = { fileConfig: { logsPath: join(__dirname, './logs') } };
const logger = new TneLogger(tneConfig);

logger.info('info message 1537574380254');
logger.warn('warn message 1537574380254');
logger.error('error message 1537574380254');
```

### Example Console Output
The above code will have an output to console as follows:

```
info:   info message 1537574380254
warn:   warn message 1537574380254
error:  error message 1537574380254
```

### Example file Output "`join(__dirname, './logs')`"
```
2018-09-24T15:28:28.960Z info: info message 1537574380254
2018-09-24T15:28:28.961Z warn: warn message 1537574380254
2018-09-24T15:28:28.961Z error: error message 1537574380254
```

[Back to Menu](#main_menu)

<a name="constructor_transports"></a>
## @tne/logger custom Transport(s) implementation
If what you want is to provide your own Winston Transporter, you simply have to send it or send as many as you need, within an array in the parameter: `customTransports`.

### Example Config
```
import { yourCustomWinstonTransport } from './localProject/customTransport';
import { TneLogger } from '@tne/logger';

const tneConfig = { customTransports: [yourCustomWinstonTransport] };
const logger = new TneLogger(tneConfig);

logger.info('info message 1537574380254');
logger.warn('warn message 1537574380254');
logger.error('error message 1537574380254');
```

### Example Console Output
The above code will have an output to console as follows and also will use your custom transports as well:

```
info:   info message 1537574380254
warn:   warn message 1537574380254
error:  error message 1537574380254
```

[Back to Menu](#main_menu)
