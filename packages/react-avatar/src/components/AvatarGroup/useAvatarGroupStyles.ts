import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { AvatarGroupSlots, AvatarGroupState } from './AvatarGroup.types';
import type { SlotClassNames } from '@fluentui/react-utilities';
import { tokens } from '../../../../react-theme/src/tokens';

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
    boxSizing: 'border-box',
    position: 'relative',
  },
});

const usePopoverSurfaceStyles = makeStyles({
  base: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '233px',
    ...shorthands.overflow('auto', 'scroll'),
    ...shorthands.gap('5px'),

    ['& > .fui-AvatarGroup__popoverSurfaceItem']: {
      display: 'flex',
      alignItems: 'center',
      ...shorthands.gap('10px'),
    },
  },
});

const useGridSpacingStyles = makeStyles({
  mNudge: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, spacingTokens.mNudge) } },
  m: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, spacingTokens.m) } },
  l: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, spacingTokens.l) } },
  xl: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, spacingTokens.xl) } },
});

const useStackedSpacingStyles = makeStyles({
  mNudge: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, '-' + spacingTokens.mNudge) } },
  m: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, '-' + spacingTokens.m) } },
  l: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, '-' + spacingTokens.l) } },
  xl: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, '-' + spacingTokens.xl) } },
});

const useSizeStyles = makeStyles({
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

const useFouthPieSizeStyles = makeStyles({
  20: { '& > .fui-Avatar:not(:first-child)': { width: '10px', height: '10px', fontSize: tokens.fontSizeBase100 } },
  24: { '& > .fui-Avatar:not(:first-child)': { width: '12px', height: '12px', fontSize: tokens.fontSizeBase100 } },
  28: { '& > .fui-Avatar:not(:first-child)': { width: '14px', height: '14px', fontSize: tokens.fontSizeBase100 } },
  32: { '& > .fui-Avatar:not(:first-child)': { width: '16px', height: '16px', fontSize: tokens.fontSizeBase100 } },
  36: { '& > .fui-Avatar:not(:first-child)': { width: '18px', height: '18px', fontSize: tokens.fontSizeBase100 } },
  40: { '& > .fui-Avatar:not(:first-child)': { width: '20px', height: '20px', fontSize: tokens.fontSizeBase100 } },
  48: { '& > .fui-Avatar:not(:first-child)': { width: '24px', height: '24px', fontSize: tokens.fontSizeBase100 } },
  56: { '& > .fui-Avatar:not(:first-child)': { width: '28px', height: '28px', fontSize: tokens.fontSizeBase200 } },
  64: { '& > .fui-Avatar:not(:first-child)': { width: '32px', height: '32px', fontSize: tokens.fontSizeBase300 } },
  72: { '& > .fui-Avatar:not(:first-child)': { width: '36px', height: '36px', fontSize: tokens.fontSizeBase300 } },
  96: { '& > .fui-Avatar:not(:first-child)': { width: '48px', height: '48px', fontSize: tokens.fontSizeBase400 } },
  120: { '& > .fui-Avatar:not(:first-child)': { width: '60px', height: '60px', fontSize: tokens.fontSizeBase500 } },
  128: { '& > .fui-Avatar:not(:first-child)': { width: '64px', height: '64px', fontSize: tokens.fontSizeBase500 } },
});

const useHalfPieSizeStyles = makeStyles({
  20: { '& > .fui-Avatar': { width: '10px', height: '20px', fontSize: tokens.fontSizeBase100 } },
  24: { '& > .fui-Avatar': { width: '12px', height: '24px', fontSize: tokens.fontSizeBase100 } },
  28: { '& > .fui-Avatar': { width: '14px', height: '28px', fontSize: tokens.fontSizeBase200 } },
  32: { '& > .fui-Avatar': { width: '16px', height: '32px', fontSize: tokens.fontSizeBase300 } },
  36: { '& > .fui-Avatar': { width: '18px', height: '36px', fontSize: tokens.fontSizeBase300 } },
  40: { '& > .fui-Avatar': { width: '20px', height: '40px', fontSize: tokens.fontSizeBase300 } },
  48: { '& > .fui-Avatar': { width: '24px', height: '48px', fontSize: tokens.fontSizeBase400 } },
  56: { '& > .fui-Avatar': { width: '28px', height: '56px', fontSize: tokens.fontSizeBase400 } },
  64: { '& > .fui-Avatar': { width: '32px', height: '64px', fontSize: tokens.fontSizeBase500 } },
  72: { '& > .fui-Avatar': { width: '36px', height: '72px', fontSize: tokens.fontSizeBase500 } },
  96: { '& > .fui-Avatar': { width: '48px', height: '96px', fontSize: tokens.fontSizeBase500 } },
  120: { '& > .fui-Avatar': { width: '60px', height: '120px', fontSize: tokens.fontSizeBase600 } },
  128: { '& > .fui-Avatar': { width: '64px', height: '128px', fontSize: tokens.fontSizeBase600 } },
});

const useVerticalDividerStyles = makeStyles({
  thick: {
    '& > .fui-Avatar': {
      clipPath: `inset(0 calc(${tokens.strokeWidthThick} / 2) 0 0)`,
    },
    '& > .fui-Avatar:not(:first-child)': {
      clipPath: `inset(0 0 0 calc(${tokens.strokeWidthThick} / 2))`,
    },
  },
  thicker: {
    '& > .fui-Avatar': {
      clipPath: `inset(0 calc(${tokens.strokeWidthThicker} / 2) 0 0)`,
    },
    '& > .fui-Avatar:not(:first-child)': {
      clipPath: `inset(0 0 0 calc(${tokens.strokeWidthThicker} / 2))`,
    },
  },
  thickest: {
    '& > .fui-Avatar': {
      clipPath: `inset(0 calc(${tokens.strokeWidthThickest} / 2) 0 0)`,
    },
    '& > .fui-Avatar:not(:first-child)': {
      clipPath: `inset(0 0 0 calc(${tokens.strokeWidthThickest} / 2))`,
    },
  },
});

const useHorizontalDividerStyles = makeStyles({
  thick: {
    '& > .fui-Avatar:nth-child(2)': {
      clipPath: `inset(0 0 calc(${tokens.strokeWidthThick} / 2) calc(${tokens.strokeWidthThick} / 2))`,
    },
    '& > .fui-Avatar:nth-child(3)': {
      clipPath: `inset(calc(${tokens.strokeWidthThick} / 2) 0 0 calc(${tokens.strokeWidthThick} / 2))`,
    },
  },
  thicker: {
    '& > .fui-Avatar:nth-child(2)': {
      clipPath: `inset(0 0 calc(${tokens.strokeWidthThicker} / 2) calc(${tokens.strokeWidthThicker} / 2)))`,
    },
    '& > .fui-Avatar:nth-child(3)': {
      clipPath: `inset(calc(${tokens.strokeWidthThicker} / 2) 0 0 calc(${tokens.strokeWidthThicker} / 2))`,
    },
  },
  thickest: {
    '& > .fui-Avatar:nth-child(2)': {
      clipPath: `inset(0 0 calc(${tokens.strokeWidthThickest} / 2) calc(${tokens.strokeWidthThickest} / 2))`,
    },
    '& > .fui-Avatar:nth-child(3)': {
      clipPath: `inset(calc(${tokens.strokeWidthThickest} / 2) 0 0 calc(${tokens.strokeWidthThickest} / 2))`,
    },
  },
});

const usePopoverTriggerStyles = makeStyles({
  base: {
    minWidth: 0,
    minHeight: 0,
    ...shorthands.padding(0),
    fontFamily: tokens.fontFamilyBase,
    fontWeight: tokens.fontWeightSemibold,
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderColor(tokens.colorNeutralStroke1),
    color: tokens.colorNeutralForeground3,
  },
});

const usePieLayoutStyles = makeStyles({
  base: {
    clipPath: 'circle(50%)',
    '& > .fui-Avatar': {
      ...shorthands.borderRadius(0),
      ...shorthands.overflow('hidden'),
    },
  },
  three: {
    '& > .fui-Avatar': {
      position: 'absolute',
      // ...shorthands.overflow('hidden')
    },
    '& > .fui-Avatar:not(:first-child)': {
      left: 'calc(100% / 2)',
    },
    '& > .fui-Avatar:nth-child(3)': {
      top: 'calc(100% / 2)',
    },
  },
});

const useAvatarBorderStyle = makeStyles({
  thin: {
    '& > .fui-Avatar': {
      ...shorthands.border(tokens.strokeWidthThin, 'solid', tokens.colorNeutralBackground2),
    },
  },
  thick: {
    '& > .fui-Avatar': {
      ...shorthands.border(tokens.strokeWidthThick, 'solid', tokens.colorNeutralBackground2),
    },
  },
  thicker: {
    '& > .fui-Avatar': {
      ...shorthands.border(tokens.strokeWidthThicker, 'solid', tokens.colorNeutralBackground2),
    },
  },
  thickest: {
    '& > .fui-Avatar': {
      ...shorthands.border(tokens.strokeWidthThickest, 'solid', tokens.colorNeutralBackground2),
    },
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
  const pieLayoutStyles = usePieLayoutStyles();
  const popoverTriggerStyles = usePopoverTriggerStyles();
  const sizeStyles = useSizeStyles();
  const popoverSurfaceStyles = usePopoverSurfaceStyles();
  const halfPieSizeStyles = useHalfPieSizeStyles();
  const fouthPieSizeStyles = useFouthPieSizeStyles();
  const verticalDividerStyles = useVerticalDividerStyles();
  const horizontalDividerStyles = useHorizontalDividerStyles();
  const avatarBorderStyle = useAvatarBorderStyle();

  // Root styles
  if (layout === 'grid' || layout === 'stacked') {
    if (size <= 28) {
      rootClasses.push(layout === 'grid' ? gridSpacingStyles.mNudge : stackedSpacingStyles.mNudge);
    } else if (size <= 56) {
      rootClasses.push(layout === 'grid' ? gridSpacingStyles.m : stackedSpacingStyles.m);
    } else if (size <= 72) {
      rootClasses.push(layout === 'grid' ? gridSpacingStyles.l : stackedSpacingStyles.l);
    } else {
      rootClasses.push(layout === 'grid' ? gridSpacingStyles.xl : stackedSpacingStyles.xl);
    }

    if (size < 36) {
      rootClasses.push(avatarBorderStyle.thin);
    } else if (size < 56) {
      rootClasses.push(avatarBorderStyle.thick);
    } else if (size < 72) {
      rootClasses.push(avatarBorderStyle.thicker);
    } else {
      rootClasses.push(avatarBorderStyle.thickest);
    }
  } else {
    const childrenCount = React.Children.count(state.root.children);
    rootClasses.push(pieLayoutStyles.base);
    rootClasses.push(sizeStyles[size]);

    if (childrenCount > 1) {
      rootClasses.push(halfPieSizeStyles[size]);

      if (size < 56) {
        rootClasses.push(verticalDividerStyles.thick);
      } else if (size < 72) {
        rootClasses.push(verticalDividerStyles.thicker);
      } else {
        rootClasses.push(verticalDividerStyles.thickest);
      }
    }

    if (childrenCount >= 3) {
      rootClasses.push(fouthPieSizeStyles[size]);
      rootClasses.push(pieLayoutStyles.three);

      if (size < 56) {
        rootClasses.push(horizontalDividerStyles.thick);
      } else if (size < 72) {
        rootClasses.push(horizontalDividerStyles.thicker);
      } else {
        rootClasses.push(horizontalDividerStyles.thickest);
      }
    }
  }

  state.root.className = mergeClasses(avatarGroupClassNames.root, ...rootClasses, state.root.className);

  // Popover Trigger styles
  if (state.popoverTrigger) {
    const popoverTriggerClassNames = [sizeStyles[size]];

    if (layout !== 'pie') {
      popoverTriggerClassNames.push(popoverTriggerStyles.base);
    }

    state.popoverTrigger.className = mergeClasses(
      avatarGroupClassNames.popoverTrigger,
      ...popoverTriggerClassNames,
      state.popoverTrigger.className,
    );
  }

  // Popover Surface styles
  if (state.popoverSurface) {
    state.popoverSurface.className = mergeClasses(
      avatarGroupClassNames.popoverSurface,
      popoverSurfaceStyles.base,
      state.popoverSurface.className,
    );
  }

  return state;
};
