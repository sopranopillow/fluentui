import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import { PopoverSurface } from '@fluentui/react-popover';
import { AvatarSizes } from '../Avatar/Avatar.types';
import { Button } from '@fluentui/react-button';
import { TooltipProps } from '@fluentui/react-tooltip';

export type AvatarGroupSlots = {
  root: Slot<'div'>;

  popoverTrigger?: Slot<typeof Button>;

  popoverSurface?: Slot<typeof PopoverSurface>;
};

type AvatarGroupCommons = {
  layout: 'grid' | 'stacked' | 'pie';

  maxAvatars: number;

  size: AvatarSizes;

  iconOverflowIndicator: boolean;

  /**
   * Strings for localizing text in the control.
   */
  strings?: AvatarGroupStrings;
};

/**
 * AvatarGroup Props
 */
export type AvatarGroupProps = ComponentProps<AvatarGroupSlots> & Partial<AvatarGroupCommons>;

/**
 * State used in rendering AvatarGroup
 */
export type AvatarGroupState = ComponentState<AvatarGroupSlots> &
  AvatarGroupCommons & {
    tooltipContent: TooltipProps['content'];
  };

export type AvatarGroupStrings = {
  tooltipLabel: string;
};
