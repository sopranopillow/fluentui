import { makeStyles, mergeClasses } from '@griffel/react';
import type { AvatarGroupItemSlots, AvatarGroupItemState } from './AvatarGroupItem.types';
import type { SlotClassNames } from '@fluentui/react-utilities';
import { useAvatarStyles_unstable } from '../Avatar/useAvatarStyles';
import { tokens } from '@fluentui/react-theme';

export const avatarGroupItemClassNames: SlotClassNames<AvatarGroupItemSlots> = {
  root: 'fui-AvatarGroupItem',
  avatarGroupItem: 'fui-AvatarGroupItem__avatarGroupItem',
  image: 'fui-AvatarGroupItem__image',
  initials: 'fui-AvatarGroupItem__initials',
  icon: 'fui-AvatarGroupItem__icon',
  badge: 'fui-AvatarGroupItem__badge',
  label: 'fui-AvatarGroupItem__label',
};

/**
 * Styles for the root slot
 */
const useRootStyles = makeStyles({
  base: {
    alignItems: 'center',
    display: 'flex',
  },
  overflowItem: {
    '&:not(:first-child)': {
      marginTop: tokens.spacingVerticalS,
    },
  },
});

const useLabelStyles = makeStyles({
  overflowItem: {
    marginLeft: tokens.spacingHorizontalS,
    position: 'relative',
  },
});

/**
 * Apply styling to the AvatarGroupItem slots based on the state
 */
export const useAvatarGroupItemStyles_unstable = (state: AvatarGroupItemState): AvatarGroupItemState => {
  const { isOverflowItem } = state;

  const rootStyles = useRootStyles();
  const labelStyles = useLabelStyles();

  useAvatarStyles_unstable(state);

  state.avatarGroupItem.className = mergeClasses(
    avatarGroupItemClassNames.avatarGroupItem,
    rootStyles.base,
    isOverflowItem && rootStyles.overflowItem,
    state.avatarGroupItem.className,
  );

  if (state.label) {
    state.label.className = mergeClasses(
      avatarGroupItemClassNames.label,
      isOverflowItem && labelStyles.overflowItem,
      state.label.className,
    );
  }

  return state;
};
