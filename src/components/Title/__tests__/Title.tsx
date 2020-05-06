import { Text } from 'react-native';
import React, { FunctionComponent } from 'react';
import renderer from 'react-test-renderer';

// Mocked context
import ContextWrapper from '../../../__mocks__/ContextWrapper';

// Component
import Title from '..';

const text = 'Test content';

const TestComponent: FunctionComponent<{}> = () => (
  <ContextWrapper>
    <Title label={text} />
  </ContextWrapper>
);

describe('Component - Title', () => {
  const instance = renderer.create(<TestComponent />);

  it('Renders correctly component', () => {
    const JSON = instance.toJSON();

    expect(JSON).toMatchSnapshot();
  });

  it('Display correctly title', () => {
    const title = instance.root.findByType(Text);

    expect(title.props.children).toBe(text);
  });
});
