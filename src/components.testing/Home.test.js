import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/homePage/home';

test('Home SnapShot test ', () => {
  const component = renderer.create(
    <Home />,
  );
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
