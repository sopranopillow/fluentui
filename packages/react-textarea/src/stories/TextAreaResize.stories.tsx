import * as React from 'react';
import { useId } from '@fluentui/react-utilities';
import { TextArea } from '../index';
import { Label } from '@fluentui/react-label';
import { makeStyles, shorthands } from '@griffel/react';

const useStyles = makeStyles({
  container: {
    '> div': { ...shorthands.padding('20px') },
    '& label': { display: 'block', marginBottom: '10px' },
  },
});

export const Resize = () => {
  const noneId = useId('textarea-none');
  const underlineId = useId('textarea-underline');
  const filledDarkerId = useId('textarea-filleddarker');
  const filledLighterId = useId('textarea-filledlighter');
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div>
        <Label htmlFor={noneId}>TextArea with resize set to "none".</Label>
        <TextArea id={noneId} appearance="outline" placeholder="Placeholder text" resize="none" />
      </div>
      <div>
        <Label htmlFor={underlineId}>TextArea with Underline appearance.</Label>
        <TextArea id={underlineId} appearance="underline" placeholder="Placeholder text" resize="vertical" />
      </div>
      <div>
        <Label htmlFor={filledDarkerId}>TextArea with Filled Darker appearance.</Label>
        <TextArea id={filledDarkerId} appearance="filledDarker" placeholder="Placeholder text" resize="horizontal" />
      </div>
      <div>
        <Label htmlFor={filledLighterId}>TextArea with Filled Lighter appearance.</Label>
        <TextArea id={filledLighterId} appearance="filledLighter" placeholder="Placeholder text" resize="both" />
      </div>
    </div>
  );
};
