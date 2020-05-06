import React, { FunctionComponent } from 'react';
import renderer from 'react-test-renderer';

// Mocked context
import ContextWrapper from '../../__mocks__/ContextWrapper';

// Route
import Home from '../Home';

const TestComponent: FunctionComponent<{}> = () => (
  <ContextWrapper>
    <Home />
  </ContextWrapper>
);

describe('Route - Home', () => {
  const instance = renderer.create(<TestComponent />);

  it('Renders correctly component', () => {
    const JSON = instance.toJSON();

    expect(JSON).toMatchSnapshot();
  });
});
