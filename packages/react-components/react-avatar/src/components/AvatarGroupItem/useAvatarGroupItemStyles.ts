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

/**
 * Styles for the root slot
 */
const useRootStyles = makeStyles({
  base: {
    boxSizing: 'border-box',
    display: 'inline-block',
    position: 'relative',
  },
});

const usePieStyles = makeStyles({
  base: {
    position: 'absolute',
  },
  twoPie: {
    clipPath: 'inset(0 25% 0 25%)',
    ':first-child': {
      left: '-25%',
    },
    ':nth-child(2)': {
      left: '25%',
    },
  },
  threePie: {
    ':first-child': {
      clipPath: 'inset(0 25% 0 25%)',
      left: '-25%',
    },
    ':not(:first-child)': {
      transform: 'scale(.5)',
      transformOrigin: '0 0',
      left: '50%',
    },
    ':nth-of-type(3)': {
      top: '50%',
    },
  },
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

  const avatarClasses = [];
  const rootClasses = [];

  if (!isOverflowItem && size) {
    if (layout === 'pie') {
      rootClasses.push(pieStyles.base);
      avatarClasses.push(avatarStyles.pie);

      if (avatarCount && avatarCount === 2) {
        rootClasses.push(pieStyles.twoPie);
      } else if (avatarCount === 3) {
        rootClasses.push(pieStyles.threePie);
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

  state.avatar.className = mergeClasses(avatarGroupItemClassNames.avatar, ...avatarClasses, state.avatar.className);

  if (state.overflowLabel) {
    state.overflowLabel.className = mergeClasses(
      avatarGroupItemClassNames.overflowLabel,
      state.overflowLabel.className,
    );
  }

  return state;
};
