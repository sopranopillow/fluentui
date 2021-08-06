import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Checkbox } from './Checkbox';
import { isConformant } from '../../common/isConformant';
import { resetIdsForTests } from '@fluentui/react-utilities';

// TODO: create visual regression tests in /apps/vr-tests

describe('Checkbox', () => {
  let renderedComponent: RenderResult | undefined;

  beforeEach(() => {
    resetIdsForTests();
  });

  isConformant({
    Component: Checkbox,
    displayName: 'Checkbox',
  });

  it('renders a default state', () => {
    renderedComponent = render(<Checkbox>Default Checkbox</Checkbox>);
    expect(renderedComponent.container).toMatchSnapshot();
  });

  it('renders unchecked correctly', () => {
    renderedComponent = render(<Checkbox>Default Checkbox</Checkbox>);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('renders checked correctly', () => {
    renderedComponent = render(<Checkbox checked>Default Checkbox</Checkbox>);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('renders mixed correctly', () => {
    renderedComponent = render(<Checkbox checked="mixed">Default Checkbox</Checkbox>);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('renders circular correctly', () => {
    renderedComponent = render(<Checkbox circular>Default Checkbox</Checkbox>);
    expect(renderedComponent).toMatchSnapshot();
  });

  it('respects id prop', () => {
    renderedComponent = render(<Checkbox id="checkbox">Default Checkbox</Checkbox>);
    expect(renderedComponent.getByRole('checkbox').id).toEqual('checkbox');
  });

  it('defaults to unchecked non-mixed', () => {
    const checkboxRef = React.createRef<HTMLInputElement>();
    renderedComponent = render(<Checkbox input={{ ref: checkboxRef }}>Default Checkbox</Checkbox>);

    expect(renderedComponent.getByRole('checkbox').getAttribute('checked')).toBeNull();
    expect(checkboxRef.current?.checked).toBe(false);
  });

  it('respects defaultChecked prop', () => {
    let checkboxRef = React.createRef<HTMLInputElement>();
    renderedComponent = render(
      <Checkbox defaultChecked input={{ ref: checkboxRef }}>
        Default Checkbox
      </Checkbox>,
    );

    expect(renderedComponent.getByRole('checkbox').getAttribute('checked')).not.toBeNull();
    expect(checkboxRef.current?.checked).toBe(true);
    expect(checkboxRef.current?.indeterminate).toBe(false);

    renderedComponent.unmount();
    checkboxRef = React.createRef<HTMLInputElement>();
    renderedComponent = render(
      <Checkbox defaultChecked="mixed" input={{ ref: checkboxRef }}>
        Default Checkbox
      </Checkbox>,
    );

    expect(renderedComponent.getByRole('checkbox').getAttribute('checked')).toBeNull();
    expect(checkboxRef.current?.checked).toBe(false);
    expect(checkboxRef.current?.indeterminate).toBe(true);
  });

  it('respects checked prop', () => {
    let checkboxRef = React.createRef<HTMLInputElement>();
    renderedComponent = render(
      <Checkbox checked input={{ ref: checkboxRef }}>
        Default Checkbox
      </Checkbox>,
    );

    expect(renderedComponent.getByRole('checkbox').getAttribute('checked')).not.toBeNull();
    expect(checkboxRef.current?.checked).toBe(true);

    renderedComponent.unmount();
    checkboxRef = React.createRef<HTMLInputElement>();
    renderedComponent = render(
      <Checkbox checked="mixed" input={{ ref: checkboxRef }}>
        Default Checkbox
      </Checkbox>,
    );

    expect(renderedComponent.getByRole('checkbox').getAttribute('checked')).toBeNull();
    expect(checkboxRef.current?.checked).toBe(false);
  });

  it('correctly sets indeterminate state through javascript', () => {
    const checkboxRef = React.createRef<HTMLInputElement>();
    renderedComponent = render(
      <Checkbox defaultChecked="mixed" input={{ ref: checkboxRef }}>
        Default Checkbox
      </Checkbox>,
    );

    expect(renderedComponent.getByRole('checkbox').getAttribute('checked')).toBeNull();
    expect(checkboxRef.current?.checked).toEqual(false);
    expect(checkboxRef.current?.indeterminate).toEqual(true);
  });
});
