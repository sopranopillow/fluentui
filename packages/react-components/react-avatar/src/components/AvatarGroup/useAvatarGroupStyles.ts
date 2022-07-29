import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';
import { useSizeStyles } from '../Avatar/useAvatarStyles';
import type { AvatarGroupSlots, AvatarGroupState } from './AvatarGroup.types';
import type { SlotClassNames } from '@fluentui/react-utilities';

export const avatarGroupClassNames: SlotClassNames<AvatarGroupSlots> = {
  root: 'fui-AvatarGroup',
};

/**
 * Styles for the root slot.
 */
const useStyles = makeStyles({
  base: {
    display: 'inline-flex',
    position: 'relative',
  },
  pie: {
    clipPath: 'circle(50%)',
    backgroundColor: tokens.colorTransparentStroke,
    '@media (forced-colors: active)': {
      backgroundColor: 'CanvasText',
    },
  },
  pieFocusIndicator: createCustomFocusIndicatorStyle(
    {
      ...shorthands.borderColor('transparent'),
      outlineColor: tokens.colorStrokeFocus2,
      outlineWidth: tokens.strokeWidthThick,
      outlineStyle: 'solid',
    },
    { selector: 'focus-within' },
  ),
});

/**
 * Apply styling to the AvatarGroup slots based on the state
 */
export const useAvatarGroupStyles_unstable = (state: AvatarGroupState): AvatarGroupState => {
  const { size, layout } = state;
  const styles = useStyles();
  const sizeStyles = useSizeStyles();

  state.root.className = mergeClasses(
    avatarGroupClassNames.root,
    styles.base,
    sizeStyles[size],
    layout === 'pie' && styles.pie,
    state.root.className,
  );

  return state;
};
