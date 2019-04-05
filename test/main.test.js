const { expect } = require('chai');
const once = require("../index");
const EventEmitter = require('events');

const emitter = new EventEmitter;
const payload = 'sup sup';

it('shouldn’t await message event to be emitted', async function () {
    const message = once(emitter, 'message', 2500);
    emitter.emit('message', payload);
    expect(await message).to.equal(payload);
});

it('should time out after 1000ms when message is not emitted yet', async function () {
    const message = once(emitter, 'message', 1000);
    expect(await message).to.equal('timed out after 1000ms');
});
