import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

// Mocked context
import ThemeWrapper from '../../__mocks__/ThemeWrapper';

// Component
import Paragraph from '../Paragraph';

const TestComponent = (
  <ThemeWrapper>
    <Paragraph>Test content</Paragraph>
  </ThemeWrapper>
);

it('Renders correctly Paragraph component', () => {
  const paragraph = renderer.create(TestComponent).toJSON();

  expect(paragraph).toMatchSnapshot();
});
