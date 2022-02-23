import { makeStyles, mergeClasses } from '@griffel/react';
import type { TabListOverflowMenuState } from './TabListOverflowMenu.types';

export const tabListOverflowMenuClassName = 'fui-TabListOverflowMenu';
/**
 * Styles for the root slot
 */
const useStyles = makeStyles({
  root: {
    // TODO Add default styles for the root element
  },

  // TODO add additional classes for different states and/or slots
});

/**
 * Apply styling to the TabListOverflowMenu slots based on the state
 */
export const useTabListOverflowMenuStyles_unstable = (state: TabListOverflowMenuState): TabListOverflowMenuState => {
  const styles = useStyles();
  state.root.className = mergeClasses(tabListOverflowMenuClassName, styles.root, state.root.className);

  // TODO Add class names to slots, for example:
  // state.mySlot.className = mergeClasses(styles.mySlot, state.mySlot.className);

  return state;
};
