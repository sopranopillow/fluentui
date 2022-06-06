import { useSizeStyles } from '../Avatar/useAvatarStyles';
import { makeStyles, mergeClasses, shorthands } from '@griffel/react';
import { tokens } from '@fluentui/react-theme';
import type { AvatarGroupItemSlots, AvatarGroupItemState } from './AvatarGroupItem.types';
import type { SlotClassNames } from '@fluentui/react-utilities';
import { useContextSelector } from '@fluentui/react-context-selector';
import { AvatarGroupContext } from '../../contexts/AvatarGroupContext';

export const avatarGroupItemClassNames: SlotClassNames<AvatarGroupItemSlots> = {
  root: 'fui-AvatarGroupItem',
  avatar: 'fui-AvatarGroupItem__avatar',
  overflowLabel: 'fui-AvatarGroupItem__overflowLabel',
};

export const avatarGroupItemMarginVar = '--fuiAvatarGroupItem--margin';
export const avatarGroupItemOutlineVar = '--fuiAvatarGroupItem--outline';
export const avatarGroupItemDividerWidthVar = '--fuiAvatarGroupItem--divierWidth';

// TODO: Clean up overflow item scenario

/**
 * Styles for the root slot
 */
const useRootStyles = makeStyles({
  base: {
    boxSizing: 'border-box',
    display: 'inline-block',
    flexShrink: 0,
    position: 'relative',
  },
});

/**
 * Styles for the pie layout
 */
const usePieStyles = makeStyles({
  base: {
    position: 'absolute',
  },
  twoPies: {
    ':first-child': {
      clipPath: `inset(0 calc(25% + (var(${avatarGroupItemDividerWidthVar}) / 2)) 0 25%)`,
      left: '-25%',
    },
    ':nth-child(2)': {
      clipPath: `inset(0 25% 0 calc(25% + (var(${avatarGroupItemDividerWidthVar}) / 2)))`,
      left: '25%',
    },
  },
  threePies: {
    ':first-child': {
      clipPath: `inset(0 calc(25% + (var(${avatarGroupItemDividerWidthVar}) / 2)) 0 25%)`,
      left: '-25%',
    },
    ':not(:first-child)': {
      // Since the two AvatarGroupItems on the right are scaled by 0.5, the divider width should not be halved.
      clipPath: `inset(0 0 var(${avatarGroupItemDividerWidthVar}) var(${avatarGroupItemDividerWidthVar}))`,
      left: '50%',
      transform: 'scale(0.5)',
      transformOrigin: '0 0',
    },
    ':nth-of-type(3)': {
      clipPath: `inset(var(${avatarGroupItemDividerWidthVar}) 0 0 var(${avatarGroupItemDividerWidthVar}))`,
      top: '50%',
    },
  },
  thick: { [avatarGroupItemDividerWidthVar]: tokens.strokeWidthThick },
  thicker: { [avatarGroupItemDividerWidthVar]: tokens.strokeWidthThicker },
  thickest: { [avatarGroupItemDividerWidthVar]: tokens.strokeWidthThickest },
});

const useStackStyles = makeStyles({
  base: {
    ...shorthands.borderRadius(tokens.borderRadiusCircular),
    outlineColor: tokens.colorNeutralBackground2,
    outlineStyle: 'solid',
    outlineWidth: `var(${avatarGroupItemOutlineVar})`,
    ':not(:first-child)': {
      marginLeft: `var(${avatarGroupItemMarginVar})`,
    },
  },
});

const useSpreadStyles = makeStyles({
  base: {
    ':not(:first-child)': {
      marginLeft: `var(${avatarGroupItemMarginVar})`,
    },
  },
});

const useAvatarStyles = makeStyles({
  nonOverflow: {
    position: 'absolute',
  },
  pie: {
    ...shorthands.borderRadius(tokens.borderRadiusNone),
  },
});

/**
 * Apply styling to the AvatarGroupItem slots based on the state
 */
export const useAvatarGroupItemStyles_unstable = (state: AvatarGroupItemState): AvatarGroupItemState => {
  const avatarCount = useContextSelector(AvatarGroupContext, ctx => ctx.avatarCount);
  const { isOverflowItem, layout } = state;
  const { size } = state.avatar;

  const rootStyles = useRootStyles();
  const avatarStyles = useAvatarStyles();
  const sizeStyles = useSizeStyles();
  const pieStyles = usePieStyles();
  const stackStyles = useStackStyles();
  const spreadStyles = useSpreadStyles();

  const rootClasses = [];

  if (!isOverflowItem && size) {
    if (layout === 'pie') {
      rootClasses.push(pieStyles.base);

      if (size < 56) {
        rootClasses.push(pieStyles.thick);
      } else if (size < 72) {
        rootClasses.push(pieStyles.thicker);
      } else {
        rootClasses.push(pieStyles.thickest);
      }

      if (avatarCount && avatarCount === 2) {
        rootClasses.push(pieStyles.twoPies);
      } else if (avatarCount === 3) {
        rootClasses.push(pieStyles.threePies);
      }
    } else if (layout === 'stack') {
      rootClasses.push(stackStyles.base);
    } else {
      rootClasses.push(spreadStyles.base);
    }
  }

  state.root.className = mergeClasses(
    avatarGroupItemClassNames.root,
    rootStyles.base,
    ...rootClasses,
    size && sizeStyles[size],
    state.root.className,
  );

  state.avatar.className = mergeClasses(
    avatarGroupItemClassNames.avatar,
    !isOverflowItem && avatarStyles.nonOverflow,
    !isOverflowItem && layout === 'pie' && avatarStyles.pie,
    state.avatar.className,
  );

  if (state.overflowLabel) {
    state.overflowLabel.className = mergeClasses(
      avatarGroupItemClassNames.overflowLabel,
      state.overflowLabel.className,
    );
  }

  return state;
};
