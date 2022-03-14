import * as React from 'react';
import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type TextAreaSlots = {
  root: NonNullable<Slot<'span'>>;

  textArea: NonNullable<Slot<'textarea'>>;
};

type TextAreaCommons = {
  /**
   * Which direction the TextArea is allowed to be resized.
   *
   * @defaultvalue none
   */
  resize: 'none' | 'horizontal' | 'vertical' | 'both';

  /**
   * Size of the TextArea.
   *
   * @defaultvalue medium
   */
  size: 'small' | 'medium' | 'large';

  /**
   * Styling the TextArea should use.
   *
   * @defaultvalue outline
   */
  appearance: 'outline' | 'underline' | 'filledDarker' | 'filledLighter';
};

type TextAreaOnChangeData = {
  value: string;
};

/**
 * TextArea Props
 */
export type TextAreaProps = Omit<
  ComponentProps<Partial<TextAreaSlots>, 'textArea'>,
  'value' | 'defaultValue' | 'onChange' | 'size'
> &
  Partial<TextAreaCommons> & {
    /**
     * The value of the TextArea.
     */
    value?: string;

    /**
     * The default value of the TextArea.
     */
    defaultValue?: string;

    /**
     * Callback for when the user changes the value.
     */
    onChange?: (ev: React.FormEvent<HTMLTextAreaElement>, data: TextAreaOnChangeData) => void;
  };

/**
 * State used in rendering TextArea
 */
export type TextAreaState = ComponentState<TextAreaSlots> & TextAreaCommons;
