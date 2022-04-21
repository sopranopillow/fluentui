import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { AvatarGroupState, AvatarGroupSlots } from './AvatarGroup.types';
import { Popover, PopoverTrigger } from '@fluentui/react-popover';

/**
 * Render the final JSX of AvatarGroup
 */
export const renderAvatarGroup_unstable = (state: AvatarGroupState) => {
  const { slots, slotProps } = getSlots<AvatarGroupSlots>(state);

  return (
    <slots.root {...slotProps.root}>
      {state.root.children}
      {slots.popoverSurface && slots.popoverTrigger && slotProps.popoverSurface.children && (
        <Popover trapFocus size="small">
          <PopoverTrigger>
            <slots.tooltip {...slotProps.tooltip}>
              <slots.popoverTrigger {...slotProps.popoverTrigger} />
            </slots.tooltip>
          </PopoverTrigger>
          <slots.popoverSurface {...slotProps.popoverSurface} />
        </Popover>
      )}
    </slots.root>
  );
};
