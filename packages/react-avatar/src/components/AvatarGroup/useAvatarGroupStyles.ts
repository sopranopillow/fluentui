import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { AvatarGroupSlots, AvatarGroupState } from './AvatarGroup.types';
import type { SlotClassNames } from '@fluentui/react-utilities';

export const avatarGroupClassNames: SlotClassNames<AvatarGroupSlots> = {
  root: 'fui-AvatarGroup',
  popoverTrigger: 'fui-AvatarGroup__popoverTrigger',
  popoverSurface: 'fui-AvatarGroup__popoverSurface',
};

const spacingTokens = {
  mNudge: '10px',
  m: '12px',
  l: '16px',
  xl: '20px',
};

/**
 * Styles for the root slot
 */
const useRootStyles = makeStyles({
  base: {
    display: 'inline-flex',
  },
});

const usePopoverSurfaceStyles = makeStyles({
  base: {
    display: 'flex',
    flexDirection: 'column',

    ['& > .fui-AvatarGroup__popoverSurfaceItem']: {
      display: 'inline-flex',
      ...shorthands.gap('5px'),
    },
  },
});

const useGridSpacingStyles = makeStyles({
  mNudge: {
    ['& > *']: {
      ...shorthands.margin(0, 0, 0, spacingTokens.mNudge),
    },
  },
  m: {
    ['& > *']: {
      ...shorthands.margin(0, 0, 0, spacingTokens.m),
    },
  },
  l: {
    ['& > *']: {
      ...shorthands.margin(0, 0, 0, spacingTokens.l),
    },
  },
  xl: {
    ['& > *']: {
      ...shorthands.margin(0, 0, 0, spacingTokens.xl),
    },
  },
});

const useStackedSpacingStyles = makeStyles({
  mNudge: {
    ['& > *']: {
      ...shorthands.margin(0, 0, 0, '-' + spacingTokens.mNudge),
    },
  },
  m: {
    ['& > *']: {
      ...shorthands.margin(0, 0, 0, '-' + spacingTokens.m),
    },
  },
  l: {
    ['& > *']: {
      ...shorthands.margin(0, 0, 0, '-' + spacingTokens.l),
    },
  },
  xl: {
    ['& > *']: {
      ...shorthands.margin(0, 0, 0, '-' + spacingTokens.xl),
    },
  },
});

const usePopoverTriggerSizeStyles = makeStyles({
  20: { width: '20px', height: '20px' },
  24: { width: '24px', height: '24px' },
  28: { width: '28px', height: '28px' },
  32: { width: '32px', height: '32px' },
  36: { width: '36px', height: '36px' },
  40: { width: '40px', height: '40px' },
  48: { width: '48px', height: '48px' },
  56: { width: '56px', height: '56px' },
  64: { width: '64px', height: '64px' },
  72: { width: '72px', height: '72px' },
  96: { width: '96px', height: '96px' },
  120: { width: '120px', height: '120px' },
  128: { width: '128px', height: '128px' },
});

const usePopoverTriggerStyles = makeStyles({
  base: {
    minWidth: 0,
    minHeight: 0,
    ...shorthands.padding(0),
  },
});

/**
 * Apply styling to the AvatarGroup slots based on the state
 */
export const useAvatarGroupStyles_unstable = (state: AvatarGroupState): AvatarGroupState => {
  const { size, layout } = state;
  const rootStyles = useRootStyles();
  const rootClasses = [rootStyles.base];
  const gridSpacingStyles = useGridSpacingStyles();
  const stackedSpacingStyles = useStackedSpacingStyles();

  if (size <= 28) {
    rootClasses.push(layout === 'grid' ? gridSpacingStyles.mNudge : stackedSpacingStyles.mNudge);
  } else if (size <= 56) {
    rootClasses.push(layout === 'grid' ? gridSpacingStyles.m : stackedSpacingStyles.m);
  } else if (size <= 72) {
    rootClasses.push(layout === 'grid' ? gridSpacingStyles.l : stackedSpacingStyles.l);
  } else {
    rootClasses.push(layout === 'grid' ? gridSpacingStyles.xl : stackedSpacingStyles.xl);
  }

  state.root.className = mergeClasses(avatarGroupClassNames.root, ...rootClasses, state.root.className);

  const popoverTriggerStyles = usePopoverTriggerStyles();
  const popoverTriggerSizeStyles = usePopoverTriggerSizeStyles();

  if (state.popoverTrigger) {
    state.popoverTrigger.className = mergeClasses(
      avatarGroupClassNames.popoverTrigger,
      popoverTriggerStyles.base,
      popoverTriggerSizeStyles[size],
      state.popoverTrigger.className,
    );
  }

  const popoverSurfaceStyles = usePopoverSurfaceStyles();
  if (state.popoverSurface) {
    state.popoverSurface.className = mergeClasses(
      avatarGroupClassNames.popoverSurface,
      popoverSurfaceStyles.base,
      state.popoverSurface.className,
    );
  }

  return state;
};
