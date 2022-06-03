import * as React from 'react';
import { Popover, PopoverTrigger } from '@fluentui/react-popover';
import { Tooltip } from '@fluentui/react-tooltip';
import { getSlots } from '@fluentui/react-utilities';
import type { AvatarGroupState, AvatarGroupSlots } from './AvatarGroup.types';
import { AvatarGroupContext } from '../../contexts/AvatarGroupContext';

/**
 * Render the final JSX of AvatarGroup
 */
export const renderAvatarGroup_unstable = (state: AvatarGroupState) => {
  const { slots, slotProps } = getSlots<AvatarGroupSlots>(state);
  const { size, layout } = state;
  const avatarCount = React.Children.count(state.root.children);
  return (
    <AvatarGroupContext.Provider value={{ layout, size, avatarCount }}>
      <slots.root {...slotProps.root}>
        {state.root.children}
        {state.hasOverflow && (
          <Popover trapFocus size="small">
            <PopoverTrigger>
              <Tooltip content={state.tooltipContent} relationship="description" appearance="inverted">
                <slots.popoverTrigger {...slotProps.popoverTrigger} />
              </Tooltip>
            </PopoverTrigger>
            <slots.popoverSurface {...slotProps.popoverSurface}>
              <AvatarGroupContext.Provider value={{ layout, isOverflow: true, size: 24 }}>
                <slots.popoverSurfaceList {...slotProps.popoverSurfaceList} />
              </AvatarGroupContext.Provider>
            </slots.popoverSurface>
          </Popover>
        )}
      </slots.root>
    </AvatarGroupContext.Provider>
  );
};
