import 'react-native';
import React, { FunctionComponent } from 'react';
import renderer from 'react-test-renderer';

// Mocked context
import ContextWrapper from '../../../__mocks__/ContextWrapper';

// Component
import Paragraph from '..';

const TestComponent: FunctionComponent<{}> = () => (
  <ContextWrapper>
    <Paragraph>Test content</Paragraph>
  </ContextWrapper>
);

describe('Component - Paragraph', () => {
  it('Renders correctly component', () => {
    const component = renderer.create(<TestComponent />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
