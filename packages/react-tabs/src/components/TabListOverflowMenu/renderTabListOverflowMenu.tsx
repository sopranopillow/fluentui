import * as React from 'react';
import { Button } from '@fluentui/react-button';
import { Menu, MenuTrigger, MenuPopover, MenuList, MenuDivider, MenuItem } from '@fluentui/react-menu';
import type { TabListOverflowMenuState } from './TabListOverflowMenu.types';

/**
 * Render the final JSX of TabListOverflowMenu
 */
export const renderTabListOverflowMenu_unstable = (state: TabListOverflowMenuState) => {
  return (
    <Menu>
      <MenuTrigger>
        <Button ref={state.buttonRef}>{state.overflowCount} items</Button>
      </MenuTrigger>
      <MenuPopover>
        <MenuList>
          {state.overflowItemIds.map(itemId => {
            if (typeof itemId === 'string' && itemId.startsWith('divider')) {
              return <MenuDivider />;
            }
            return <MenuItem key={itemId}>Item {itemId}</MenuItem>;
          })}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};
