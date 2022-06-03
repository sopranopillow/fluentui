import { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { AvatarGroupProps } from '../AvatarGroup/AvatarGroup.types';
import type { Avatar } from '../../Avatar';

export type AvatarGroupItemSlots = {
  root: NonNullable<Slot<'div', 'li'>>;
  avatar: NonNullable<Slot<typeof Avatar>>;
  overflowLabel: NonNullable<Slot<'span'>>;
};

/**
 * AvatarGroupItem Props
 */
export type AvatarGroupItemProps = ComponentProps<Partial<AvatarGroupItemSlots>, 'avatar'>;

/**
 * State used in rendering AvatarGroupItem
 */
export type AvatarGroupItemState = ComponentState<AvatarGroupItemSlots> & {
  isOverflowItem?: boolean;
  layout: AvatarGroupProps['layout'];
};
