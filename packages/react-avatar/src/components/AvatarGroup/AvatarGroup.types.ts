import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import * as React from 'react';
import type { AvatarSizes } from '../Avatar/Avatar.types';

export type AvatarGroupSlots = {
  root: Slot<'div'>;
  avatarMenu?: Slot<'div'>;
};

type AvatarGroupCommons = {
  layout: 'grid' | 'stacked' | 'pie';

  size: Omit<128, AvatarSizes>;

  overflowed: boolean;

  min: number;

  max: number;
};

/**
 * AvatarGroup Props
 */
export type AvatarGroupProps = Omit<ComponentProps<AvatarGroupSlots>, 'children'> &
  Partial<AvatarGroupCommons> & {
    children: React.ReactElement | React.ReactElement[] | never;
  };

/**
 * State used in rendering AvatarGroup
 */
export type AvatarGroupState = ComponentState<AvatarGroupSlots> & AvatarGroupCommons;
