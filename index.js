"use strict";

module.exports = async (emitter, type, ttl) => {

    return new Promise(resolve => {

        let timeout = undefined;

        const cb = msg => {
            if (timeout) clearTimeout(timeout);
            resolve(msg);
        };

        if (ttl) {
            timeout = setTimeout(
                () => {
                    emitter.removeListener(type, cb);
                    resolve(`timed out after ${ttl}ms`);
                },
                ttl
            );
        }
        emitter.once(type, cb);
    });

};
