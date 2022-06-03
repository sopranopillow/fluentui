import * as React from 'react';
import { Avatar } from '../Avatar';
import { AvatarGroupContext } from '../../contexts';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { getInitials } from '../../utils/getInitials';
import { useContextSelector } from '@fluentui/react-context-selector';
import type { AvatarGroupItemProps, AvatarGroupItemState } from './AvatarGroupItem.types';

/**
 * Create the state required to render AvatarGroupItem.
 *
 * The returned state can be modified with hooks such as useAvatarGroupItemStyles_unstable,
 * before being passed to renderAvatarGroupItem_unstable.
 *
 * @param props - props from this instance of AvatarGroupItem
 * @param ref - reference to root HTMLElement of AvatarGroupItem
 */
export const useAvatarGroupItem_unstable = (
  props: AvatarGroupItemProps,
  ref: React.Ref<HTMLElement>,
): AvatarGroupItemState => {
  const groupIsOverflowItem = useContextSelector(AvatarGroupContext, ctx => ctx.isOverflow);
  const groupLayout = useContextSelector(AvatarGroupContext, ctx => ctx.layout);
  const groupSize = useContextSelector(AvatarGroupContext, ctx => ctx.size);
  const rootComponentType = groupIsOverflowItem ? 'li' : 'div';
  const { style, className, ...primarySlotProps } = props;

  const firstInitialOnly = groupSize && groupSize <= 36;

  return {
    isOverflowItem: groupIsOverflowItem,
    layout: groupLayout,
    components: {
      root: 'div',
      avatar: Avatar,
      overflowLabel: 'span',
    },
    root: getNativeElementProps(rootComponentType, {
      as: rootComponentType,
      role: groupIsOverflowItem ? 'listitem' : undefined,
      style,
      className,
    }),
    avatar: resolveShorthand(props.avatar, {
      required: true,
      defaultProps: {
        size: groupSize,
        color: 'colorful',
        initials: firstInitialOnly ? getInitials(props.name, false, { firstInitialOnly: firstInitialOnly }) : undefined,
        ...primarySlotProps,
      },
    }),
    overflowLabel: resolveShorthand(props.overflowLabel, {
      required: true,
      defaultProps: {
        children: props.name,
      },
    }),
  };
};
