import * as React from 'react';
import { TextArea, TextAreaProps } from '../index';
import { Label } from '@fluentui/react-label';
import { useId } from '@fluentui/react-utilities';

export const Default = (props: TextAreaProps) => {
  const textareaId = useId('textarea');
  return (
    <>
      <Label htmlFor={textareaId}>Default TextArea</Label>
      <TextArea id={textareaId} />
    </>
  );
};
