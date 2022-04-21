import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import { PopoverSurface } from '@fluentui/react-popover';
import { AvatarSizes } from '../Avatar/Avatar.types';
import { Button } from '@fluentui/react-button';
import { Tooltip } from '@fluentui/react-tooltip';

export type AvatarGroupSlots = {
  root: Slot<'div'>;

  popoverTrigger?: Slot<typeof Button>;

  popoverSurface?: Slot<typeof PopoverSurface>;

  //TODO: figure out tooltip once in spec
  tooltip?: Slot<typeof Tooltip>;
};

type AvatarGroupCommons = {
  layout: 'grid' | 'stacked' | 'pie';

  maxAvatars: number;

  size: AvatarSizes;

  iconOverflowIndicator: boolean;
};

/**
 * AvatarGroup Props
 */
export type AvatarGroupProps = ComponentProps<AvatarGroupSlots> & Partial<AvatarGroupCommons>;

/**
 * State used in rendering AvatarGroup
 */
export type AvatarGroupState = ComponentState<AvatarGroupSlots> & AvatarGroupCommons;
