import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// Mocked context
import ContextWrapper from '../../__mocks__/ContextWrapper';

// Component
import Paragraph from '../Paragraph';

const TestComponent = (
  <ContextWrapper>
    <Paragraph>Test content</Paragraph>
  </ContextWrapper>
);

it('Renders correctly Paragraph component', () => {
  const paragraph = renderer.create(TestComponent).toJSON();

  expect(paragraph).toMatchSnapshot();
});
