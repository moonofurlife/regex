import Validator from '../app';

const dataList = [
  ['Иван', false],
  ['Ivan-_123V', true],
  ['Ivan123', false],
  ['123Ivan', false],
  ['Ivan12345V', false],
  ['_Ivan', false],
  ['Ivan_', false],
  ['Ivan-', false],
  ['-Ivan', false]];

test.each(dataList)('validating user name with %s nickname', (name, expected) => {
  expect(Validator.validateUsername(name)).toBe(expected);
});
