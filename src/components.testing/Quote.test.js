import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/calculatorPage/DisplayQuote';

test('Quote SnapShot test ', () => {
  const component = renderer.create(
    <Quote />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
