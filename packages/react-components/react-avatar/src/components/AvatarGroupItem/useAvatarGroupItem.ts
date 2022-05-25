import * as React from 'react';
import { AvatarNamedColor, useAvatar_unstable } from '../Avatar';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import { Label } from '@fluentui/react-label';
import { useContextSelector } from '@fluentui/react-context-selector';
import { AvatarGroupContext } from '../../contexts';
import type { AvatarGroupItemProps, AvatarGroupItemState } from './AvatarGroupItem.types';
import { PresenceBadge } from '@fluentui/react-badge';

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
  // const groupLayout = useContextSelector(AvatarGroupContext, ctx => ctx.layout);
  const groupIndex = useContextSelector(AvatarGroupContext, ctx => ctx.currentIndex);
  console.log(groupIndex);

  const groupOverflowItem = useContextSelector(AvatarGroupContext, ctx => ctx.overflowItem);
  const groupSize = useContextSelector(AvatarGroupContext, ctx => ctx.size);

  // TODO: update color to use order
  const { color, name } = props;

  // TODO: verify if mixing up roots messes up everything
  const avatarState = useAvatar_unstable({ color, size: groupSize, ...props }, ref);

  return {
    ...avatarState,
    isOverflowItem: groupOverflowItem,
    components: {
      avatarGroupItem: 'li',
      root: 'span',
      initials: 'span',
      icon: 'span',
      image: 'img',
      badge: PresenceBadge,
      label: Label,
    },
    avatarGroupItem: getNativeElementProps('li', {
      role: 'listitem',
      tabIndex: groupOverflowItem ? 0 : undefined,
      ...props,
    }),
    label: resolveShorthand(props.label, {
      required: true,
      defaultProps: {
        children: groupOverflowItem ? name : null,
      },
    }),
  };
};

const colorOrder: { [key: number]: AvatarNamedColor } = {
  1: 'red',
  2: 'blue',
  3: 'purple',
  4: 'forest',
  5: 'pink',
  6: 'lavender',
  7: 'teal',
  8: 'gold',
  9: 'cranberry',
  10: 'cornflower',
  11: 'lilac',
  12: 'anchor',
  13: 'darkGreen',
  14: 'pumpkin',
  15: 'darkRed',
  16: 'mink',
  17: 'grape',
  18: 'platinum',
  19: 'royalBlue',
  20: 'brown',
  21: 'peach',
  22: 'steel',
  23: 'navy',
  24: 'seafoam',
  25: 'magenta',
  26: 'beige',
  27: 'lightTeal',
  28: 'gold',
  29: 'plum',
  30: 'marigold',
};
