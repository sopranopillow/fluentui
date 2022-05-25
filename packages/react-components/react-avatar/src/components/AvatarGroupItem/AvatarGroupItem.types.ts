import { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import { Label } from '@fluentui/react-label';
import type { AvatarProps, AvatarSlots, AvatarState } from '../../Avatar';

export type AvatarGroupItemSlots = AvatarSlots & {
  avatarGroupItem: NonNullable<Slot<'li'>>;
  label?: Slot<typeof Label>;
};

/**
 * AvatarGroupItem Props
 */
export type AvatarGroupItemProps = AvatarProps & ComponentProps<Partial<AvatarGroupItemSlots>>;

/**
 * State used in rendering AvatarGroupItem
 */
export type AvatarGroupItemState = AvatarState &
  ComponentState<AvatarGroupItemSlots> & {
    isOverflowItem?: boolean;
  };
