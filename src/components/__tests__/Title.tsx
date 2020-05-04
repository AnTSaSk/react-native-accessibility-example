import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// Mocked context
import ThemeWrapper from '../../__mocks__/ThemeWrapper';

// Component
import Title from '../Title';

const TestComponent = (
  <ThemeWrapper>
    <Title label="Test content" />
  </ThemeWrapper>
);

it('Renders correctly Title component', () => {
  const title = renderer.create(TestComponent).toJSON();

  expect(title).toMatchSnapshot();
});
