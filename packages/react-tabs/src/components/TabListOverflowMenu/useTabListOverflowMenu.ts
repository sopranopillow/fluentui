import * as React from 'react';
import { getNativeElementProps } from '@fluentui/react-utilities';
import type { TabListOverflowMenuProps, TabListOverflowMenuState } from './TabListOverflowMenu.types';
import { useOverflowMenu } from '../../overflow/react/useOverflowMenu';
import { useOverflowContext } from '../../overflow/react/overflowContext';

/**
 * Create the state required to render TabListOverflowMenu.
 *
 * The returned state can be modified with hooks such as useTabListOverflowMenuStyles_unstable,
 * before being passed to renderTabListOverflowMenu_unstable.
 *
 * @param props - props from this instance of TabListOverflowMenu
 * @param ref - reference to root HTMLElement of TabListOverflowMenu
 */
export const useTabListOverflowMenu_unstable = (
  props: TabListOverflowMenuProps,
  ref: React.Ref<HTMLElement>,
): TabListOverflowMenuState => {
  const { ref: buttonRef, overflowCount, isOverflowing } = useOverflowMenu<HTMLButtonElement>();

  const itemVisibility = useOverflowContext(ctx => ctx.itemVisibility);
  const overflowItemIds = props.itemIds.filter(itemId => !itemVisibility[itemId]);

  return {
    components: {
      root: 'div',
    },
    root: getNativeElementProps('div', {
      ref,
      ...props,
    }),
    isOverflowing,
    overflowCount,
    overflowItemIds,
    buttonRef,
  };
};
