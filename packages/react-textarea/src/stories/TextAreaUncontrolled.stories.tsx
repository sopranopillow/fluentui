import * as React from 'react';
import { TextArea, TextAreaProps } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

const onChange: TextAreaProps['onChange'] = (ev, data) => {
  // Uncontrolled inputs can be notified of changes to the value
  console.log(`New value: "${data.value}"`);
};

export const Uncontrolled = () => {
  const textareaId = useId('textarea');
  return (
    <>
      <Label htmlFor={textareaId}>Uncontrolled TextArea with placeholder.</Label>
      <TextArea id={textareaId} onChange={onChange} placeholder="Check console for new value." />
    </>
  );
};
