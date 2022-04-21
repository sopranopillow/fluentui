import * as React from 'react';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import type { AvatarGroupSlots, AvatarGroupState } from './AvatarGroup.types';
import type { SlotClassNames } from '@fluentui/react-utilities';
import { tokens } from '../../../../react-theme/src/tokens';

export const avatarGroupClassNames: SlotClassNames<AvatarGroupSlots> = {
  root: 'fui-AvatarGroup',
  popoverTrigger: 'fui-AvatarGroup__popoverTrigger',
  popoverSurface: 'fui-AvatarGroup__popoverSurface',
  tooltip: 'fui-AvatarGroup__tooltip',
};

// TODO: add extra classnames

// TODO: once tokens are added, remove these placeholders
const spacingTokens = {
  s: '8px',
  mNudge: '10px',
  m: '12px',
  l: '16px',
  xl: '20px',
};

const overlapSpacingTokens = {
  xs: '2px',
  s: '4px',
  m: '8px',
  l: '8px',
  xl: '16px',
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
  icon16: { fontSize: '16px' },
  icon20: { fontSize: '20px' },
  icon24: { fontSize: '24px' },
  icon28: { fontSize: '28px' },
  icon32: { fontSize: '32px' },
  icon48: { fontSize: '48px' },
});

const usePopoverSurfaceStyles = makeStyles({
  base: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '220px',
    minHeight: '80px',
    width: '220px',
    ...shorthands.overflow('auto', 'scroll'),
    ...shorthands.gap(spacingTokens.s),

    ['& > .fui-AvatarGroup__popoverSurfaceItem']: {
      display: 'flex',
      alignItems: 'center',
      ...shorthands.gap(spacingTokens.s),
    },

    ['& > .fui-AvatarGroup__popoverSurfaceItem > .fui-Label']: {
      lineHeight: '20px',
      fontSize: '14px',
      fontWeight: 'regular',
      fontFamily: 'Segoe UI',
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
  xs: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, '-' + overlapSpacingTokens.xs) } },
  s: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, '-' + overlapSpacingTokens.s) } },
  m: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, '-' + overlapSpacingTokens.m) } },
  l: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, '-' + overlapSpacingTokens.l) } },
  xl: { '& > *:not(:first-child)': { ...shorthands.margin(0, 0, 0, '-' + overlapSpacingTokens.xl) } },
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
  20: { '& > .fui-Avatar': { width: '10px', height: '20px' } },
  24: { '& > .fui-Avatar': { width: '12px', height: '24px' } },
  28: { '& > .fui-Avatar': { width: '14px', height: '28px' } },
  32: { '& > .fui-Avatar': { width: '16px', height: '32px' } },
  36: { '& > .fui-Avatar': { width: '18px', height: '36px' } },
  40: { '& > .fui-Avatar': { width: '20px', height: '40px' } },
  48: { '& > .fui-Avatar': { width: '24px', height: '48px' } },
  56: { '& > .fui-Avatar': { width: '28px', height: '56px' } },
  64: { '& > .fui-Avatar': { width: '32px', height: '64px' } },
  72: { '& > .fui-Avatar': { width: '36px', height: '72px' } },
  96: { '& > .fui-Avatar': { width: '48px', height: '96px' } },
  120: { '& > .fui-Avatar': { width: '60px', height: '120px' } },
  128: { '& > .fui-Avatar': { width: '64px', height: '128px' } },
});

const useFontSizeStyles = makeStyles({
  20: { '& > *': { fontSize: tokens.fontSizeBase100 } },
  24: { '& > *': { fontSize: tokens.fontSizeBase100 } },
  28: { '& > *': { fontSize: tokens.fontSizeBase100 } },
  32: { '& > *': { fontSize: tokens.fontSizeBase200 } },
  36: { '& > *': { fontSize: tokens.fontSizeBase300 } },
  40: { '& > *': { fontSize: tokens.fontSizeBase300 } },
  48: { '& > *': { fontSize: tokens.fontSizeBase400 } },
  56: { '& > *': { fontSize: tokens.fontSizeBase400 } },
  64: { '& > *': { fontSize: tokens.fontSizeBase500 } },
  72: { '& > *': { fontSize: tokens.fontSizeBase500 } },
  96: { '& > *': { fontSize: tokens.fontSizeBase500 } },
  120: { '& > *': { fontSize: tokens.fontSizeBase600 } },
  128: { '& > *': { fontSize: tokens.fontSizeBase600 } },
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

// TODO: fix pie overlap thing
const usePopoverTriggerStyles = makeStyles({
  base: {
    minWidth: 0,
    minHeight: 0,
    maxWidth: 'unset',
    maxHeight: 'unset',
    ...shorthands.padding(0),
    fontFamily: tokens.fontFamilyBase,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground3,
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderColor(tokens.colorNeutralStroke1),
    flexShrink: 0,
    boxSizing: 'content-box',
  },
  pie: {
    backgroundColor: 'transparent',
    ':focus': {
      backgroundColor: 'transparent',
    },
  },
  thin: { ...shorthands.borderWidth(tokens.strokeWidthThin) },
  thick: { ...shorthands.borderWidth(tokens.strokeWidthThick) },
  thicker: { ...shorthands.borderWidth(tokens.strokeWidthThicker) },
  thickest: { ...shorthands.borderWidth(tokens.strokeWidthThickest) },
});

const usePieLayoutStyles = makeStyles({
  base: {
    clipPath: 'circle(50%)',
    '& > .fui-Avatar': {
      ...shorthands.borderRadius(0),
    },
  },
  three: {
    '& > .fui-Avatar': {
      position: 'absolute',
    },
    '& > .fui-Avatar:not(:first-child)': {
      left: 'calc(100% / 2)',
    },
    '& > .fui-Avatar:nth-child(3)': {
      top: 'calc(100% / 2)',
    },
  },
});

const useStackedAvatarOutlineStyle = makeStyles({
  thick: {
    '& > *': {
      outlineWidth: tokens.strokeWidthThick,
      outlineStyle: 'solid',
      outlineColor: tokens.colorNeutralBackground2,
    },
  },
  thicker: {
    '& > *': {
      outlineWidth: tokens.strokeWidthThicker,
      outlineStyle: 'solid',
      outlineColor: tokens.colorNeutralBackground2,
    },
  },
  thickest: {
    '& > *': {
      outlineWidth: tokens.strokeWidthThickest,
      outlineStyle: 'solid',
      outlineColor: tokens.colorNeutralBackground2,
    },
  },
});

/**
 * Apply styling to the AvatarGroup slots based on the state
 */
export const useAvatarGroupStyles_unstable = (state: AvatarGroupState): AvatarGroupState => {
  const { size, layout, iconOverflowIndicator } = state;
  const rootStyles = useRootStyles();
  const popoverTriggerStyles = usePopoverTriggerStyles();
  const popoverSurfaceStyles = usePopoverSurfaceStyles();

  const gridSpacingStyles = useGridSpacingStyles();
  const stackedSpacingStyles = useStackedSpacingStyles();
  const pieLayoutStyles = usePieLayoutStyles();

  const verticalDividerStyles = useVerticalDividerStyles();
  const horizontalDividerStyles = useHorizontalDividerStyles();

  const sizeStyles = useSizeStyles();
  const fontSizeStyles = useFontSizeStyles();
  const halfPieSizeStyles = useHalfPieSizeStyles();
  const fouthPieSizeStyles = useFouthPieSizeStyles();

  const stackedAvatarOutlineStyle = useStackedAvatarOutlineStyle();
  // TODO: figure out icon size logic, if needed??
  // const iconSizeStyles = useIconSizeStyles();

  // Root styles
  const rootClasses = [rootStyles.base, fontSizeStyles[size]];

  if (layout === 'grid') {
    if (size <= 28) {
      rootClasses.push(gridSpacingStyles.mNudge);
    } else if (size <= 56) {
      rootClasses.push(gridSpacingStyles.m);
    } else if (size <= 72) {
      rootClasses.push(gridSpacingStyles.l);
    } else {
      rootClasses.push(gridSpacingStyles.xl);
    }
  } else if (layout === 'stacked') {
    if (size < 24) {
      rootClasses.push(stackedSpacingStyles.xs);
    } else if (size < 48) {
      rootClasses.push(stackedSpacingStyles.s);
    } else if (size < 96) {
      rootClasses.push(stackedSpacingStyles.l);
    } else {
      rootClasses.push(stackedSpacingStyles.xl);
    }

    if (size < 56) {
      rootClasses.push(stackedAvatarOutlineStyle.thick);
    } else if (size < 72) {
      rootClasses.push(stackedAvatarOutlineStyle.thicker);
    } else {
      rootClasses.push(stackedAvatarOutlineStyle.thickest);
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
    const popoverTriggerClassNames = [sizeStyles[size], popoverTriggerStyles.base];

    if (layout === 'pie') {
      popoverTriggerClassNames.push(popoverTriggerStyles.pie);
    }

    if (size < 36) {
      popoverTriggerClassNames.push(popoverTriggerStyles.thin);
    } else if (size < 56) {
      popoverTriggerClassNames.push(popoverTriggerStyles.thick);
    } else if (size < 72) {
      popoverTriggerClassNames.push(popoverTriggerStyles.thicker);
    } else {
      popoverTriggerClassNames.push(popoverTriggerStyles.thickest);
    }

    if (iconOverflowIndicator) {
      if (size < 28) {
        popoverTriggerClassNames.push(rootStyles.icon16);
      } else if (size < 48) {
        popoverTriggerClassNames.push(rootStyles.icon20);
      } else if (size < 56) {
        popoverTriggerClassNames.push(rootStyles.icon24);
      } else if (size < 64) {
        popoverTriggerClassNames.push(rootStyles.icon28);
      } else if (size < 96) {
        popoverTriggerClassNames.push(rootStyles.icon32);
      } else {
        popoverTriggerClassNames.push(rootStyles.icon48);
      }
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
