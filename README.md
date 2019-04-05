# Await once

Created to make testing of an event to be emitted more developer friendly. It’s easy-peasy; 

```js
    const once = require("await-once");

    describe('test case', async () => {
        
        // will return a promise we can await
        const message = once(emitter, 'message', 2500);

        // emit an event
        emitter.emit('message', payload);

        // and simply await that message
        // (yes that can be done within an expect)
        expect(await message).to.equal(payload);
    });

```

When passed a `ttl` argument, it will timeout after the given amount of ms, when the event we listen for has not been received yet. It will resolve with a specific message, instead of rejecting or throwing an error.