import * as React from 'react';
import { getSlots } from '@fluentui/react-utilities';
import type { AvatarGroupState, AvatarGroupSlots } from './AvatarGroup.types';
import { Overflow } from '../../overflow/react/Overflow';
import { OverflowItem } from '../../overflow/react/OverflowItem';
import { Avatar } from '../Avatar/Avatar';

/**
 * Render the final JSX of AvatarGroup
 */
export const renderAvatarGroup_unstable = (state: AvatarGroupState) => {
  const { slots, slotProps } = getSlots<AvatarGroupSlots>(state);

  // TODO Add additional slots in the appropriate place
  return (
    <slots.root {...slotProps.root}>
      <Overflow minimumVisible={2}>
        <div>{state.root.children}</div>
      </Overflow>
      {slots.avatarMenu && <slots.avatarMenu {...slotProps.avatarMenu} />}
    </slots.root>
  );
};
