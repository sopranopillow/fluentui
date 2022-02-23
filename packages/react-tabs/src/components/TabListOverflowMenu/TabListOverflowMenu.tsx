import * as React from 'react';
import { useTabListOverflowMenu_unstable } from './useTabListOverflowMenu';
import { renderTabListOverflowMenu_unstable } from './renderTabListOverflowMenu';
import { useTabListOverflowMenuStyles_unstable } from './useTabListOverflowMenuStyles';
import type { TabListOverflowMenuProps } from './TabListOverflowMenu.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';

/**
 * TabListOverflowMenu component - TODO: add more docs
 */
export const TabListOverflowMenu: ForwardRefComponent<TabListOverflowMenuProps> = React.forwardRef((props, ref) => {
  const state = useTabListOverflowMenu_unstable(props, ref);

  useTabListOverflowMenuStyles_unstable(state);
  return renderTabListOverflowMenu_unstable(state);
});

TabListOverflowMenu.displayName = 'TabListOverflowMenu';
