import test from 'ava';
import normalizeConfig from './normalizeConfig';

test('adds default value for retry if not defined', t => {
  t.deepEqual(normalizeConfig({}), {
    retry: 0
  });
});

test('passes original value for retry if defined', t => {
  t.deepEqual(normalizeConfig({ retry: 3 }), {
    retry: 3
  });
});
