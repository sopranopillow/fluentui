import * as React from 'react';
import { TextArea } from '../index';
import { Meta } from '@storybook/react';

export { Default } from './TextAreaDefault.stories';
export { Appearance } from './TextAreaAppearance.stories';
export { Controlled } from './TextAreaControlled.stories';
export { Size } from './TextAreaSize.stories';
export { Disabled } from './TextAreaDisabled.stories';
export { Placeholder } from './TextAreaPlaceholder.stories';
export { Resize } from './TextAreaResize.stories';
export { Uncontrolled } from './TextAreaUncontrolled.stories';

export default {
  title: 'Components/TextArea',
  component: TextArea,

  decorators: [
    Story => (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start', padding: '12px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;
