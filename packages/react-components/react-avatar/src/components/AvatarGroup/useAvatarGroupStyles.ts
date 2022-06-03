import { createCustomFocusIndicatorStyle } from '@fluentui/react-tabster';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { useSizeStyles } from '../Avatar/useAvatarStyles';
import { tokens } from '@fluentui/react-theme';
import { avatarGroupItemMarginVar, avatarGroupItemOutlineVar } from '../AvatarGroupItem';
import type { AvatarGroupSlots, AvatarGroupState } from './AvatarGroup.types';
import type { SlotClassNames } from '@fluentui/react-utilities';

export const avatarGroupClassNames: SlotClassNames<AvatarGroupSlots> = {
  root: 'fui-AvatarGroup',
  popoverSurface: 'fui-AvatarGroup__popoverSurface',
  popoverSurfaceList: 'fui-AvatarGroup__popoverSurfaceList',
  popoverTrigger: 'fui-AvatarGroup__popoverTrigger',
};

//TODO: popover trigger font sizes are wrong

/**
 * Styles for the root slot.
 */
const useRootStyles = makeStyles({
  base: {
    display: 'inline-flex',
    position: 'relative',
  },
  pie: {
    clipPath: 'circle(50%)',
  },
});

/**
 * Styles for the PopoverTrigger.
 */
const usePopoverTriggerStyles = makeStyles({
  base: {
    display: 'inline-flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    color: tokens.colorNeutralForeground1,
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderColor(tokens.colorNeutralStroke1),
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
    ...shorthands.borderStyle('solid'),
  },

  focusIndicator: createCustomFocusIndicatorStyle({
    ...shorthands.borderColor('transparent'),
    outlineColor: 'transparent',
    outlineWidth: tokens.strokeWidthThick,
    outlineStyle: 'solid',
    boxShadow: `
      ${tokens.shadow4},
      0 0 0 2px ${tokens.colorStrokeFocus2}
    `,
    zIndex: 1,
  }),

  states: {
    ':hover': {
      color: tokens.colorNeutralForeground1Hover,
      backgroundColor: tokens.colorNeutralBackground1Hover,
      ...shorthands.borderColor(tokens.colorNeutralStroke1Hover),
    },
    ':active': {
      color: tokens.colorNeutralForeground1Pressed,
      backgroundColor: tokens.colorNeutralBackground1Pressed,
      ...shorthands.borderColor(tokens.colorNeutralStroke1Pressed),
    },
    ':checked': {
      color: tokens.colorNeutralForeground1Selected,
      backgroundColor: tokens.colorNeutralBackground1Selected,
      ...shorthands.borderColor(tokens.colorNeutralStroke1Selected),
    },
  },

  pie: {
    backgroundColor: tokens.colorTransparentBackground,
    ...shorthands.borderColor(tokens.colorTransparentStroke),
    color: 'transparent',
  },

  stack: {
    outlineColor: tokens.colorNeutralBackground2,
    outlineStyle: 'solid',
    outlineWidth: `var(${avatarGroupItemOutlineVar})`,
    marginLeft: `var(${avatarGroupItemMarginVar})`,
  },

  spread: {
    marginLeft: `var(${avatarGroupItemMarginVar})`,
  },
});

const useStackStyles = makeStyles({
  thick: { [avatarGroupItemOutlineVar]: tokens.strokeWidthThick },
  thicker: { [avatarGroupItemOutlineVar]: tokens.strokeWidthThicker },
  thickest: { [avatarGroupItemOutlineVar]: tokens.strokeWidthThickest },
  xxs: { [avatarGroupItemMarginVar]: `calc(-1 * ${tokens.spacingHorizontalXXS})` },
  xs: { [avatarGroupItemMarginVar]: `calc(-1 * ${tokens.spacingHorizontalXS})` },
  s: { [avatarGroupItemMarginVar]: `calc(-1 * ${tokens.spacingHorizontalS})` },
  l: { [avatarGroupItemMarginVar]: `calc(-1 * ${tokens.spacingHorizontalL})` },
});

const useSpreadStyles = makeStyles({
  s: { [avatarGroupItemMarginVar]: tokens.spacingHorizontalS },
  mNudge: { [avatarGroupItemMarginVar]: tokens.spacingHorizontalMNudge },
  m: { [avatarGroupItemMarginVar]: tokens.spacingHorizontalM },
  l: { [avatarGroupItemMarginVar]: tokens.spacingHorizontalL },
  xl: { [avatarGroupItemMarginVar]: tokens.spacingHorizontalXL },
});

/**
 * Styles for the surface list slot.
 */
const usePopoverSurfaceListStyles = makeStyles({
  base: {
    listStyleType: 'none',
    ...shorthands.overflow('hidden', 'auto'),
    ...shorthands.padding(tokens.spacingHorizontalNone),
    ...shorthands.margin(tokens.spacingHorizontalNone),
  },
});

const usePopoverSurfaceStyles = makeStyles({
  base: {
    maxHeight: '220px',
    minHeight: '80px',
    ...shorthands.padding(tokens.spacingHorizontalS),
    width: '220px',
  },
});

/**
 * Apply styling to the AvatarGroup slots based on the state
 */
export const useAvatarGroupStyles_unstable = (state: AvatarGroupState): AvatarGroupState => {
  const { layout, size } = state;

  const rootStyles = useRootStyles();
  const sizeStyles = useSizeStyles();
  const popoverTriggerStyles = usePopoverTriggerStyles();
  const popoverSurfaceListStyles = usePopoverSurfaceListStyles();
  const popoverSurfaceStyles = usePopoverSurfaceStyles();
  const stackStyles = useStackStyles();
  const spreadStyles = useSpreadStyles();

  const rootClasses = [];

  if (layout === 'stack') {
    if (size < 56) {
      rootClasses.push(stackStyles.thick);
    } else if (size < 72) {
      rootClasses.push(stackStyles.thicker);
    } else {
      rootClasses.push(stackStyles.thickest);
    }

    if (size < 24) {
      rootClasses.push(stackStyles.xxs);
    } else if (size < 48) {
      rootClasses.push(stackStyles.xs);
    } else if (size < 96) {
      rootClasses.push(stackStyles.s);
    } else {
      rootClasses.push(stackStyles.l);
    }
  } else if (layout === 'spread') {
    if (size < 20) {
      rootClasses.push(spreadStyles.s);
    } else if (size < 32) {
      rootClasses.push(spreadStyles.mNudge);
    } else if (size < 64) {
      rootClasses.push(spreadStyles.l);
    } else {
      rootClasses.push(spreadStyles.xl);
    }
  }

  state.root.className = mergeClasses(
    avatarGroupClassNames.root,
    rootStyles.base,
    ...rootClasses,
    layout === 'pie' && rootStyles.pie,
    layout === 'pie' && sizeStyles[size],
    state.root.className,
  );

  if (state.popoverSurface) {
    state.popoverSurface.className = mergeClasses(
      avatarGroupClassNames.popoverSurface,
      popoverSurfaceStyles.base,
      state.popoverSurface.className,
    );
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
      popoverTriggerStyles.focusIndicator,
      layout !== 'pie' && popoverTriggerStyles.states,
      layout === 'pie' && popoverTriggerStyles.pie,
      layout === 'spread' && popoverTriggerStyles.spread,
      layout === 'stack' && popoverTriggerStyles.stack,
      state.popoverTrigger.className,
    );
  }

  return state;
};
