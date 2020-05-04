import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// Mocked context
import ContextWrapper from '../../__mocks__/ContextWrapper';

// Component
import Title from '../Title';

const TestComponent = (
  <ContextWrapper>
    <Title label="Test content" />
  </ContextWrapper>
);

it('Renders correctly Title component', () => {
  const title = renderer.create(TestComponent).toJSON();

  expect(title).toMatchSnapshot();
});
