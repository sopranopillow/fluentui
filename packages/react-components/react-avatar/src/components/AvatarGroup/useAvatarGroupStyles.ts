import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { useSizeStyles } from '../Avatar/useAvatarStyles';
import type { AvatarGroupSlots, AvatarGroupState } from './AvatarGroup.types';
import type { SlotClassNames } from '@fluentui/react-utilities';
import { tokens } from '@fluentui/react-theme';

export const avatarGroupClassNames: SlotClassNames<AvatarGroupSlots> = {
  root: 'fui-AvatarGroup',
  popoverSurface: 'fui-AvatarGroup__popoverSurface',
  popoverSurfaceList: 'fui-AvatarGroup__popoverSurfaceList',
  popoverTrigger: 'fui-AvatarGroup__popoverTrigger',
};

/**
 * Styles for the root slot.
 */
const useStyles = makeStyles({
  base: {
    display: 'inline-flex',
    position: 'relative',
  },
});

/**
 * Styles for the PopoverTrigger.
 */
const usePopoverTriggerStyles = makeStyles({
  base: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: tokens.colorNeutralForeground1,
    ...shorthands.borderColor(tokens.colorNeutralStroke1),
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
    ...shorthands.borderStyle('solid'),
  },
  pie: {
    backgroundColor: tokens.colorTransparentBackground,
    color: 'transparent',
  },
});

const usePopoverSurfaceListStyles = makeStyles({
  base: {
    listStyleType: 'none',
    ...shorthands.margin(tokens.spacingHorizontalNone),
    maxHeight: '220px',
    minHeight: '80px',
    ...shorthands.overflow('hidden', 'auto'),
    ...shorthands.padding(tokens.spacingHorizontalNone),
    width: '220px',
  },
});

/**
 * Apply styling to the AvatarGroup slots based on the state
 */
export const useAvatarGroupStyles_unstable = (state: AvatarGroupState): AvatarGroupState => {
  const { layout, size } = state;
  const styles = useStyles();
  const sizeStyles = useSizeStyles();
  const popoverTriggerStyles = usePopoverTriggerStyles();
  const popoverSurfaceListStyles = usePopoverSurfaceListStyles();

  state.root.className = mergeClasses(avatarGroupClassNames.root, styles.base, state.root.className);

  if (state.popoverSurface) {
    state.popoverSurface.className = mergeClasses(avatarGroupClassNames.popoverSurface, state.popoverSurface.className);
  }

  if (state.popoverSurfaceList) {
    state.popoverSurfaceList.className = mergeClasses(
      avatarGroupClassNames.popoverSurfaceList,
      popoverSurfaceListStyles.base,
      state.popoverSurfaceList.className,
    );
  }

  if (state.popoverTrigger) {
    state.popoverTrigger.className = mergeClasses(
      avatarGroupClassNames.popoverTrigger,
      popoverTriggerStyles.base,
      sizeStyles[size],
      layout === 'pie' && popoverTriggerStyles.pie,
      state.popoverTrigger.className,
    );
  }

  return state;
};
