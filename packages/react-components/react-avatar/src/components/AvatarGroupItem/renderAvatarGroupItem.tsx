import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { AvatarGroupItemState, AvatarGroupItemSlots } from './AvatarGroupItem.types';

/**
 * Render the final JSX of AvatarGroupItem
 */
export const renderAvatarGroupItem_unstable = (state: AvatarGroupItemState) => {
  const { slots, slotProps } = getSlots<AvatarGroupItemSlots>(state);

  return (
    <slots.avatarGroupItem {...slotProps.avatarGroupItem}>
      <slots.root {...slotProps.root}>
        {slots.initials && <slots.initials {...slotProps.initials} />}
        {slots.icon && <slots.icon {...slotProps.icon} />}
        {slots.image && <slots.image {...slotProps.image} />}
        {slots.badge && <slots.badge {...slotProps.badge} />}
      </slots.root>
      {slots.label && <slots.label {...slotProps.label} />}
    </slots.avatarGroupItem>
  );
};
