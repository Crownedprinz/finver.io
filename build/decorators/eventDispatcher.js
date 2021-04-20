"use strict";
/**
 * Originally taken from 'w3tecch/express-typescript-boilerplate'
 * Credits to the author
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventDispatcherInterface = exports.EventDispatcher = void 0;
var event_dispatch_1 = require("event-dispatch");
var typedi_1 = require("typedi");
function EventDispatcher() {
    return function (object, propertyName, index) {
        var eventDispatcher = new event_dispatch_1.EventDispatcher();
        typedi_1.Container.registerHandler({
            object: object,
            propertyName: propertyName,
            index: index,
            value: function () { return eventDispatcher; },
        });
    };
}
exports.EventDispatcher = EventDispatcher;
var event_dispatch_2 = require("event-dispatch");
Object.defineProperty(exports, "EventDispatcherInterface", { enumerable: true, get: function () { return event_dispatch_2.EventDispatcher; } });
//# sourceMappingURL=eventDispatcher.js.map