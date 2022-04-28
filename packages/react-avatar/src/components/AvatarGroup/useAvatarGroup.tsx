import * as React from 'react';
import { getNativeElementProps, resolveShorthand } from '@fluentui/react-utilities';
import type { AvatarGroupProps, AvatarGroupState } from './AvatarGroup.types';
import { PopoverSurface } from '@fluentui/react-popover';
import { Button } from '@fluentui/react-button';
import { MoreHorizontalRegular } from '@fluentui/react-icons';
import { Label } from '@fluentui/react-label';
import { getInitials } from '../../utils/getInitials';
import { extraAvatarGroupClassNames } from './useAvatarGroupStyles';
import { avatarGroupDefaultStrings } from './AvatarGroup.strings';
import { useId } from '@fluentui/react-utilities';

/**
 * Create the state required to render AvatarGroup.
 *
 * The returned state can be modified with hooks such as useAvatarGroupStyles_unstable,
 * before being passed to renderAvatarGroup_unstable.
 *
 * @param props - props from this instance of AvatarGroup
 * @param ref - reference to root HTMLElement of AvatarGroup
 */
export const useAvatarGroup_unstable = (props: AvatarGroupProps, ref: React.Ref<HTMLElement>): AvatarGroupState => {
  const {
    layout = 'grid',
    maxAvatars = 5,
    iconIndicator = false,
    strings = avatarGroupDefaultStrings,
    children,
    size = 32,
    ...rest
  } = props;
  const childrenCount = React.Children.count(children);
  const childrenArr = React.Children.toArray(children);
  // TODO: rename variable
  // NOTE: if the pie layout is selected maxAvatars will be ignored
  const maxAvatarsFinal = layout === 'pie' ? 3 : maxAvatars;
  const renderPopover = childrenCount > maxAvatarsFinal;

  console.log('rendered AvatarGroup');

  // TODO: memoize

  // Splitting children for the avatars that won't appear in the Popover
  let renderedChildren = childrenCount > maxAvatarsFinal ? childrenArr.slice(0, maxAvatarsFinal) : childrenArr;

  // Making sure that all the children that won't appear in the Popover are the given size
  renderedChildren = renderedChildren.map(child => {
    if (!React.isValidElement(child)) {
      return child;
    }
    console.log('renderchildren');

    let initials = child.props.initials;
    if (layout === 'pie' && child.props.name && size < 40) {
      initials = getInitials(child.props.name, false)[0];
    }

    return React.cloneElement(child, { size: size, initials: initials });
  });

  const popoverChildren = childrenArr.slice(maxAvatarsFinal, childrenCount).map((child, k) => {
    if (!React.isValidElement(child)) {
      return null;
    }

    console.log('popoverchildren');

    // TODO: memoize, expensive?
    // The Avatars inside the Popover must be 32
    // The className is added to add styles but should should not appear in props as this
    // is a default content and can be overriden

    return (
      <div className={extraAvatarGroupClassNames.popoverSurfaceItem} key={k}>
        {React.cloneElement(child, { size: 24 })}
        <Label size="medium">{child.props.name}</Label>
      </div>
    );
  });

  const id = useId('avatarGroup-', props.id);

  const state: AvatarGroupState = {
    layout,
    maxAvatars,
    size,
    iconIndicator,
    tooltipContent: strings?.tooltipLabel.replace('{value}', String(childrenCount - maxAvatarsFinal)),
    renderPopover: renderPopover,

    components: {
      root: 'div',
      popoverTrigger: Button,
      popoverSurface: PopoverSurface,
    },

    root: getNativeElementProps('div', {
      ref,
      role: 'group',
      children: renderedChildren,
      id: id,
      ...rest,
    }),

    popoverTrigger: resolveShorthand(props.popoverTrigger, {
      required: true,
      defaultProps: {
        children: layout === 'pie' || iconIndicator ? null : `+${childrenCount - maxAvatarsFinal}`,
        shape: 'circular',
        icon: layout !== 'pie' && iconIndicator ? <MoreHorizontalRegular /> : undefined,
        appearance: layout === 'pie' ? 'transparent' : 'outline',
      },
    }),

    popoverSurface: resolveShorthand(props.popoverSurface, {
      required: true,
      defaultProps: {
        children: popoverChildren,
        'aria-labelledby': id,
      },
    }),
  };

  return state;
};
