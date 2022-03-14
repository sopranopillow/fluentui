import * as React from 'react';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import { TextArea } from './TextArea';
import { isConformant } from '../../common/isConformant';

function getTextArea(): HTMLTextAreaElement {
  return screen.getByPlaceholderText('textarea placeholder') as HTMLTextAreaElement;
}

describe('TextArea', () => {
  let renderedComponent: RenderResult | undefined;

  isConformant({
    Component: TextArea,
    displayName: 'TextArea',
    primarySlot: 'textArea',
    skipAsPropTests: true,
  });

  // TODO add more tests here, and create visual regression tests in /apps/vr-tests

  it('renders a default state', () => {
    const result = render(<TextArea />);
    expect(result.container).toMatchSnapshot();
  });

  it('respects value', () => {
    renderedComponent = render(<TextArea placeholder="textarea placeholder" value="foo" />);
    expect(getTextArea().value).toEqual('foo');
  });

  it('respects updates to value', () => {
    renderedComponent = render(<TextArea placeholder="textarea placeholder" value="foo" />);
    expect(getTextArea().value).toEqual('foo');

    renderedComponent.rerender(<TextArea placeholder="textarea placeholder" value="bar" />);
    expect(getTextArea().value).toEqual('bar');
  });

  it('respects updated to value', () => {
    renderedComponent = render(<TextArea placeholder="textarea placeholder" defaultValue="foo" />);
    expect(getTextArea().value).toEqual('foo');
  });

  it('ignores updated to defaultValue', () => {
    renderedComponent = render(<TextArea placeholder="textarea placeholder" defaultValue="foo" />);
    expect(getTextArea().value).toEqual('foo');

    renderedComponent.rerender(<TextArea placeholder="textarea placeholder" defaultValue="bar" />);
    expect(getTextArea().value).toEqual('foo');
  });

  it('prefers value over defaultValue', () => {
    renderedComponent = render(<TextArea placeholder="textarea placeholder" value="bar" defaultValue="foo" />);
    expect(getTextArea().value).toEqual('bar');
  });

  it('with value, calls onChange but does not update on text entry', () => {
    const onChange = jest.fn();
    renderedComponent = render(<TextArea value="foo" onChange={onChange} placeholder="textarea placeholder" />);
    const textarea = getTextArea();
    fireEvent.change(textarea, { target: { value: 'bar' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][1]).toEqual({ value: 'bar' });
    expect(textarea.value).toBe('foo');
  });

  it('with defaultValue, calls onChange and updates value on text entry', () => {
    const onChange = jest.fn();
    renderedComponent = render(<TextArea defaultValue="foo" onChange={onChange} placeholder="textarea placeholder" />);
    const textarea = getTextArea();
    fireEvent.change(textarea, { target: { value: 'bar' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][1]).toEqual({ value: 'bar' });
    expect(textarea.value).toBe('bar');
  });

  it('does not call onChange when value prop updates', () => {
    const onChange = jest.fn();
    renderedComponent = render(<TextArea value="foo" onChange={onChange} placeholder="textarea placeholder" />);
    renderedComponent.rerender(<TextArea value="bar" onChange={onChange} placeholder="textarea placeholder" />);
    expect(onChange).toHaveBeenCalledTimes(0);
  });
});
