import * as React from 'react';
import { FocusZone, IFocusZoneProps } from '@fluentui/react-focus';
import { useProps } from '../../../e2e/utils';

export const Basic = () => {
  const props = useProps<IFocusZoneProps>();

  return (
    props && (
      <FocusZone {...props}>
        <button className="a">a</button>
        <button className="b">b</button>
        <button className="c">c</button>
      </FocusZone>
    )
  );
};
