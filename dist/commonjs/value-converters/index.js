Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
function configure(config) {
    config
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/array/index'))
        .feature(aurelia_framework_1.PLATFORM.moduleName('aurelia-toolbelt/value-converters/fuse/index'));
}
exports.configure = configure;
