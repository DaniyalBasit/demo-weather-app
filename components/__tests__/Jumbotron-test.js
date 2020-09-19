import * as React from 'react';
import renderer from 'react-test-renderer';

import Jumbotron from '../Jumbotron';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Jumbotron heading="Heading" subHeading="SubHeading" />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
