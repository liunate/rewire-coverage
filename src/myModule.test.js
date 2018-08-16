it(`should generate 100% coverage result by invoking rewire'd private function`, () => {
  const rewire = require('rewire');
  const privateFunction = rewire('./myModule').__get__('privateFunction');
  const returnValue = privateFunction('abc');
  expect(returnValue).toEqual('abc');
});
