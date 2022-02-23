import * as React from 'react';
import { render } from '@testing-library/react';
import { TabListOverflowMenu } from './TabListOverflowMenu';
import { isConformant } from '../../common/isConformant';

describe('TabListOverflowMenu', () => {
  isConformant({
    Component: TabListOverflowMenu,
    displayName: 'TabListOverflowMenu',
  });

  // TODO add more tests here, and create visual regression tests in /apps/vr-tests

  it('renders a default state', () => {
    const result = render(<TabListOverflowMenu>Default TabListOverflowMenu</TabListOverflowMenu>);
    expect(result.container).toMatchSnapshot();
  });
});
