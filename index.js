#!/usr/bin/env node

const pjson = require(__dirname + '/package.json');
const prog = require('caporal');
const fs = require('fs');
const path = require('path');

let version = pjson ? pjson.version : '<unknown version>';

prog
    .version(version)

    .argument('<scale>', 'What scale to use')

    .option('-d', 'Degrees of separation')
    .option('--degrees', 'Degrees of separation')

    .action((args, o, logger) => {

        console.log(`Running color-harmonizer v${version} ...`)

        // first see if there's a configuration file available, and start with that
        // const { configFilePath, config } = _findConfig();
        // if (config) console.log(`Using ${configFilePath} settings...`);

        // make containing folder for the module, if using, or otherwise the package name
        let outPath = path.resolve((o.prefix ? o.prefix : './'));

        fs.mkdirSync(outPath, { recursive: true });
    });

prog.parse(process.argv);


// Utils ------------------------

function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function _getFileName(className, type, casing) {
    let _default = `${className.toLowerCase()}.${type}`;
    return casing ? (casing === 'pascal' ? `${_capitalize(className)}${_capitalize(type)}` : _default) : _default;
}

function _ensureTrailingSlash(str) {
    return str.charAt(str.length - 1) !== '/' ? (str + '/') : str;
}








// todo: look into parent directories if not found?
// function _findConfig() {
//     let config;
//     let configFilePath;

//     function _read(filePath) {
//         if (fs.existsSync(filePath)) {
//             let _config = require(filePath);
//             if (_config['ngen-config']) {
//                 configFilePath = filePath;
//                 return _config['ngen-config'];
//             }
//         }
//     }

//     // look in tsconfig.app.json?
//     config = _read(path.resolve("./tsconfig.app.json"));

//     // look in tsconfig.json?
//     if (!config) {
//         config = _read(path.resolve("./tsconfig.json"));
//     }

//     return { configFilePath, config };
// }
