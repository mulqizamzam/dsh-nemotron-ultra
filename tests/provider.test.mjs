import test from 'node:test';
import assert from 'node:assert/strict';
import { name, inject, apply } from '../src/index.js';

test('exports the expected plugin identifier and skills injection', () => {
  assert.equal(name, 'nemotron-ultra');
  assert.deepEqual(inject, ['skills']);
});

test('registers a provider with the DSH skills service', () => {
  let factory;
  apply({ skills: { registerProvider(value) { factory = value; } } });
  assert.equal(typeof factory, 'function');
  const provider = factory();
  assert.equal(provider.name, 'dsh-nemotron-ultra');
  assert.equal(typeof provider.list, 'function');
  assert.equal(typeof provider.get, 'function');
});

test('fails clearly when the DSH skills service is unavailable', () => {
  assert.throws(() => apply({}), /requires the DSH skills service/);
});
