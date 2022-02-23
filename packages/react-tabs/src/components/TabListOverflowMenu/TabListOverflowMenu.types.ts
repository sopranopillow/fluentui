import * as React from 'react';
import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';

export type TabListOverflowMenuSlots = {
  root: Slot<'div'>;
};

/**
 * TabListOverflowMenu Props
 */
export type TabListOverflowMenuProps = ComponentProps<TabListOverflowMenuSlots> & {
  itemIds: (string | number)[];
};

/**
 * State used in rendering TabListOverflowMenu
 */
export type TabListOverflowMenuState = ComponentState<TabListOverflowMenuSlots> & {
  isOverflowing: boolean;
  overflowCount: number;
  overflowItemIds: (string | number)[];
  buttonRef: React.Ref<HTMLButtonElement>;
};
