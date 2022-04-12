import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { AvatarGroupState } from './AvatarGroup.types';

export const avatarGroupClassNames = { root: 'fui-AvatarGroup', avatarMenu: 'fui-AvatarGroup__menu' };
/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  base: {
    boxSizing: 'border-box',
    height: 'fit-content',
    // minWidth: '150px',
    resize: 'horizontal',
    width: '300px',
    ...shorthands.border('2px', 'solid', 'grey'),
    ...shorthands.overflow('hidden'),
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the AvatarGroup slots based on the state
 */
export const useAvatarGroupStyles_unstable = (state: AvatarGroupState): AvatarGroupState => {
  const styles = useStyles();
  state.root.className = mergeClasses(avatarGroupClassNames.root, styles.base, state.root.className);
  if (state.avatarMenu) {
    state.avatarMenu.className = mergeClasses(avatarGroupClassNames.avatarMenu, state.avatarMenu.className);
  }
  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
